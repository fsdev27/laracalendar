# Set master image
FROM php:7.3-fpm-alpine

# Set working directory
WORKDIR /var/www/html

# Install Additional dependencies
RUN apk add --no-cache \
        build-base shadow vim curl \
        zip \
        libzip-dev \
        libpng \
        libpng-dev \
        libjpeg \
        icu \
        icu-dev \
        libxml2 \
        libxml2-dev \
        openssl \
        openssl-dev
RUN docker-php-ext-install \
        pdo_mysql \
        mysqli \
        gd \
        mbstring \
        intl \
        xml \
        zip

# Install PHP Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer global require hirak/prestissimo

# Remove Cache
RUN rm -rf /var/cache/apk/*

# Add UID '1000' to www-data
RUN usermod -u 1000 www-data

# Change current user to www
USER www-data

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
