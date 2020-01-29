FROM node:11

# Ensure resolv.conf is world-readable
RUN chmod a+r /etc/resolv.conf

# Install packages for headless chrome
# https://medium.com/@ssmak/how-to-fix-puppetteer-error-while-loading-shared-libraries-libx11-xcb-so-1-c1918b75acc3
RUN apt-get update \
    && \
    # apt Debian packages
    apt-get install -y \
    libgl1-mesa-glx \
    gconf-service libasound2 libatk1.0-0 libc6 libcairo2 \
    libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 \
    libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 \
    libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 \
    libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 \
    libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation \
    libappindicator1 libnss3 lsb-release xdg-utils wget

WORKDIR /var/www/project/

COPY ./docker-config/webpack/package.json package.json
COPY ./docker-config/webpack/postcss.config.js postcss.config.js
COPY ./docker-config/webpack/tailwind.config.js tailwind.config.js
COPY ./docker-config/webpack/webpack.common.js webpack.common.js
COPY ./docker-config/webpack/webpack.dev.js webpack.dev.js
COPY ./docker-config/webpack/webpack.prod.js webpack.prod.js
COPY ./docker-config/webpack/webpack.settings.js webpack.settings.js

RUN npm install

CMD npm debug dev
