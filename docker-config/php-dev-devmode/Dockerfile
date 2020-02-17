FROM nystudio107/php-dev-base

# Install packages
RUN apt-get update \
    && \
    # apt Debian packages
    apt-get install -y \
        ffmpeg \
    && \
    # Install PHP extensions
    docker-php-ext-install \
        pdo_pgsql \
        pgsql \
    && \
    # Install Composer
    curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin/ --filename=composer

# Copy over the directories/files php needs access to
COPY --chown=www-data:www-data ./cms/web /var/www/project/cms/web
COPY --chown=www-data:www-data ./cms/composer.json /var/www/project/cms/composer.json
COPY --chown=www-data:www-data ./cms/craft /var/www/project/cms/craft

# Create the storage directory and make it writeable by PHP
RUN mkdir -p /var/www/project/cms/storage && \
    chown -R www-data:www-data /var/www/project/cms/storage

# Do a `composer install` without running any Composer scripts
RUN composer install --no-scripts -d /var/www/project/cms && \
    chown -R www-data:www-data /var/www/project/cms/vendor && \
    chown -R www-data:www-data /var/www/project/cms/composer.lock
