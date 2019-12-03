FROM php:7.3-fpm

# Install packages
RUN apt-get update \
    && \
    # apt Debian packages
    apt-get install -y \
    libfreetype6-dev libjpeg62-turbo-dev \
    libpng-dev libbz2-dev \
    libssl-dev autoconf \
    ca-certificates curl g++ libicu-dev \
    libmagickwand-dev mariadb-client libzip-dev \
    zip unzip \
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
    zip iconv pdo_mysql intl \
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

RUN echo "upload_max_filesize = 10M" > /usr/local/etc/php/php.ini && \
    echo "post_max_size = 10M" >> /usr/local/etc/php/php.ini && \
    echo "max_execution_time = 300" >> /usr/local/etc/php/php.ini && \
    echo "memory_limit = 256M" >> /usr/local/etc/php/php.ini && \
    echo "opcache.revalidate_freq = 0" >> /usr/local/etc/php/php.ini && \
    echo "opcache.validate_timestamps = \${PHP_REVALIDATE}" >> /usr/local/etc/php/php.ini

COPY ./docker-config/php/zzz-docker.conf /usr/local/etc/php-fpm.d/zzz-docker.conf

COPY --chown=www-data:www-data ./cms /var/www/project/cms

RUN composer install -d /var/www/project/cms && \
    chown -R www-data:www-data /var/www/project/cms/vendor && \
    chown -R www-data:www-data /var/www/project/cms/composer.lock
