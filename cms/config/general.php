<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see craft\config\GeneralConfig
 */

use craft\config\GeneralConfig;
use craft\helpers\App;

return GeneralConfig::create()
    // Craft config settings from .env variables
    ->aliases([
        '@assetsUrl' => App::env('ASSETS_URL'),
        '@cloudfrontUrl' => App::env('CLOUDFRONT_URL'),
        '@transcodedEpisodes' => 'https://d21kofsrtbjnsd.cloudfront.net/',
        '@ptGoogleAnalyticsProxy' => 'https://dbt8fhq6c1i4k.cloudfront.net/',
        '@web' => App::env('SITE_URL'),
        '@webroot' => App::env('WEB_ROOT_PATH'),
    ])
    ->allowUpdates(App::env('ALLOW_UPDATES'))
    ->allowAdminChanges(App::env('ALLOW_ADMIN_CHANGES'))
    ->backupOnUpdate(App::env('BACKUP_ON_UPDATE'))
    ->devMode(App::env('DEV_MODE'))
    ->enableTemplateCaching(App::env('ENABLE_TEMPLATE_CACHING'))
    ->resourceBasePath(App::env('WEB_ROOT_PATH') . '/cpresources')
    ->runQueueAutomatically(App::env('RUN_QUEUE_AUTOMATICALLY'))
    ->securityKey(App::env('SECURITY_KEY'))
    // Craft config settings from constants
    ->cacheDuration(false)
    ->defaultSearchTermOptions([
        'subLeft' => true,
        'subRight' => true,
    ])
    ->defaultTokenDuration('P2W')
    ->enableCsrfProtection(true)
    ->errorTemplatePrefix('errors/')
    ->extraFileKinds([
        'text' => [
            'extensions' => ['csv'],
        ],
    ])
    ->generateTransformsBeforePageLoad(true)
    ->maxCachedCloudImageSize(3000)
    ->maxUploadFileSize(100 * 1024 * 1024)
    ->omitScriptNameInUrls(true)
    ->useEmailAsUsername(true)
    ->usePathInfo(true);
