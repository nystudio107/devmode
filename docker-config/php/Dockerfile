FROM php:7.3-fpm

# Ensure resolv.conf is world-readable
RUN chmod a+r /etc/resolv.conf

# Install packages
RUN apt-get update \
    && \
    # apt Debian packages
    apt-get install -y \
    apt-utils \
    libfreetype6-dev libjpeg62-turbo-dev \
    libpng-dev libbz2-dev \
    libssl-dev autoconf \
    ca-certificates curl g++ libicu-dev \
    libmagickwand-dev libzip-dev \
    zip unzip libpq-dev \
    && \
    # pecl PHP extensions
    pecl install \
    imagick-3.4.4 redis xdebug-2.8.1 \
    && \
    # Install PHP extensions
    docker-php-ext-install \
    bcmath bz2 exif \
    ftp gd gettext mbstring opcache \
    shmop sockets sysvmsg sysvsem sysvshm \
    zip iconv intl \
    pgsql pdo pdo_pgsql \
    && \
    # Configure PHP extensions
    docker-php-ext-configure \
    gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && \
    # Enable PHP extensions
    docker-php-ext-enable \
    imagick redis xdebug \
    && \
    # Install Composer
    curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin/ --filename=composer

ENV PHP_REVALIDATE=0

# Append our php.ini overrides to the end of the file
RUN echo "upload_max_filesize = 10M" > /usr/local/etc/php/php.ini && \
    echo "post_max_size = 10M" >> /usr/local/etc/php/php.ini && \
    echo "max_execution_time = 300" >> /usr/local/etc/php/php.ini && \
    echo "memory_limit = 256M" >> /usr/local/etc/php/php.ini && \
    echo "opcache.revalidate_freq = 0" >> /usr/local/etc/php/php.ini && \
    echo "opcache.validate_timestamps = \${PHP_REVALIDATE}" >> /usr/local/etc/php/php.ini

# Copy the `zzz-docker.conf` file into place for php-fpm
COPY ./docker-config/php/zzz-docker.conf /usr/local/etc/php-fpm.d/zzz-docker.conf

# Copy over the directories/files php needs access to
COPY --chown=www-data:www-data ./cms/web /var/www/project/cms/web
COPY --chown=www-data:www-data ./cms/composer.json /var/www/project/cms/composer.json
COPY --chown=www-data:www-data ./cms/nys-setup /var/www/project/cms/nys-setup
COPY --chown=www-data:www-data ./cms/craft /var/www/project/cms/craft
COPY --chown=www-data:www-data ./cms/.env.sh /var/www/project/cms/.env.sh

# Create the storage directory and make it writeable by PHP
RUN mkdir -p /var/www/project/cms/storage && \
    chown -R www-data:www-data /var/www/project/cms/storage

# Do a `composer install` without running any Composer scripts
RUN composer install --no-scripts -d /var/www/project/cms && \
    chown -R www-data:www-data /var/www/project/cms/vendor && \
    chown -R www-data:www-data /var/www/project/cms/composer.lock

# CMD composer run-script craft-update -d /var/www/project/cms
