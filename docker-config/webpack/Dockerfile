FROM node:11

WORKDIR /var/www/project/

COPY ./docker-config/buildchain/package.json package.json
COPY ./docker-config/buildchain/postcss.config.js postcss.config.js
COPY ./docker-config/buildchain/tailwind.config.js tailwind.config.js
COPY ./docker-config/buildchain/webpack.common.js webpack.common.js
COPY ./docker-config/buildchain/webpack.dev.js webpack.dev.js
COPY ./docker-config/buildchain/webpack.prod.js webpack.prod.js
COPY ./docker-config/buildchain/webpack.settings.js webpack.settings.js

RUN cd /var/www/project/ && npm install

CMD npm debug dev
