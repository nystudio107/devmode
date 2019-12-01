FROM php:7.3-fpm

RUN apt-get update && apt-get install -y \
        libfreetype6-dev libjpeg62-turbo-dev \
        libpng-dev libbz2-dev \
        libssl-dev autoconf \
        ca-certificates curl g++ libicu-dev \
        libmagickwand-dev mariadb-client libzip-dev\
        && \
        pecl install imagick-3.4.3 \
        && \
        docker-php-ext-install \
        bcmath bz2 exif \
        ftp gd gettext mbstring opcache \
        shmop sockets sysvmsg sysvsem sysvshm \
        zip iconv pdo_mysql intl \
        && \
        docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
        && \
        docker-php-ext-enable imagick

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin/ --filename=composer
RUN composer global require hirak/prestissimo

ENV PHP_REVALIDATE=0

RUN echo "upload_max_filesize = 10M" > /usr/local/etc/php/php.ini && \
    echo "post_max_size = 10M" >> /usr/local/etc/php/php.ini && \
    echo "max_execution_time = 300" >> /usr/local/etc/php/php.ini && \
    echo "memory_limit = 256M" >> /usr/local/etc/php/php.ini && \
    echo "opcache.revalidate_freq = 0" >> /usr/local/etc/php/php.ini && \
    echo "opcache.validate_timestamps = \${PHP_REVALIDATE}" >> /usr/local/etc/php/php.ini

COPY ./docker-config/php/zzz-docker.conf /usr/local/etc/php-fpm.d/zzz-docker.conf

COPY --chown=www-data:www-data ./src /var/www/html

RUN composer install -d /var/www/html/ && \
    chown -R www-data:www-data /var/www/html/vendor && \
    chown -R www-data:www-data /var/www/html/composer.lock
