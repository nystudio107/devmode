# Determine the docker compose API version to get the separator character
VERSION?=$(shell docker-compose -v)
ifneq (,$(findstring v2.,$(VERSION)))
	SEPARATOR:=-
else
	SEPARATOR:=_
endif
CONTAINER?=$(shell basename $(CURDIR))$(SEPARATOR)php$(SEPARATOR)1
BUILDCHAIN?=$(shell basename $(CURDIR))$(SEPARATOR)vite$(SEPARATOR)1

.PHONY: build clean composer craft dev npm pulldb restoredb nuke ssh up

# Production build via the buildchain container
build: up
	docker exec -it $(BUILDCHAIN) npm run build
# Remove `vendor/`, `node_modules` & lockfiles
clean:
	rm -f cms/composer.lock
	rm -rf cms/vendor/
	rm -f buildchain/package-lock.json
	rm -rf buildchain/node_modules/
# Executed a composer command in the PHP container
composer: up
	docker exec -it $(CONTAINER) su-exec www-data composer \
		$(filter-out $@,$(MAKECMDGOALS)) $(MAKEFLAGS)
# Executed a craft command in the PHP container
craft: up
	docker exec -it $(CONTAINER) su-exec www-data php craft \
		$(filter-out $@,$(MAKECMDGOALS)) $(MAKEFLAGS)
# Start the dev server
dev: up
# Executed an npm command in the buildchain container
npm: up
	docker exec -it $(BUILDCHAIN) npm \
		$(filter-out $@,$(MAKECMDGOALS)) $(MAKEFLAGS)
pulldb: up
	cd scripts/ && ./docker_pull_db.sh
restoredb: up
	cd scripts/ && ./docker_restore_db.sh \
		$(filter-out $@,$(MAKECMDGOALS)) $(MAKEFLAGS)
# Remove the Docker volumes & start clean
nuke: clean
	docker-compose down -v
	docker-compose up --build --force-recreate
# Open up a shell in the PHP container
ssh:
	docker exec -it $(CONTAINER) su-exec www-data /bin/sh
up:
	if [ ! "$$(docker ps -q -f name=$(CONTAINER))" ]; then \
		cp -n cms/example.env cms/.env; \
		docker-compose up; \
    fi
%:
	@:
# ref: https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line
