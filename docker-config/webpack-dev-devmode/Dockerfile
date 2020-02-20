FROM nystudio107/webpack-dev-base

WORKDIR /var/www/project/

COPY ./docker-config/webpack-dev-devmode/* ./

# We'd normally use `npm ci` here, but by using `install`:
# - If `package-lock.json` is present, it will install what is in the lock file
# - If `package-lock.json` is missing, it will update to the latest dependencies
#   and create the `package-lock-json` file
RUN npm install

# Copy the resulting `package-lock.json` back into place
CMD cp ./package-lock.json ./docker-config/webpack-dev-devmode/package-lock.json \
    && \
    npm run debug
