FROM nginx:1.16

COPY ./docker-config/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --chown=www-data:www-data ./cms /var/www/project/cms
