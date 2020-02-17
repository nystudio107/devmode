FROM nystudio107/webpack-dev-base

WORKDIR /var/www/project/

COPY ./docker-config/webpack-dev-devmode/package.json package.json
COPY ./docker-config/webpack-dev-devmode/postcss.config.js postcss.config.js
COPY ./docker-config/webpack-dev-devmode/tailwind.config.js tailwind.config.js
COPY ./docker-config/webpack-dev-devmode/webpack.common.js webpack.common.js
COPY ./docker-config/webpack-dev-devmode/webpack.dev.js webpack.dev.js
COPY ./docker-config/webpack-dev-devmode/webpack.prod.js webpack.prod.js
COPY ./docker-config/webpack-dev-devmode/webpack.settings.js webpack.settings.js

RUN npm install

CMD npm run debug
