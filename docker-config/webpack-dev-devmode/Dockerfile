FROM nystudio107/webpack-dev-base

WORKDIR /var/www/project/

COPY ./docker-config/webpack-dev-devmode/* ./

RUN npm ci

CMD npm run debug
