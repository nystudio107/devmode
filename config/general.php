<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see craft\config\GeneralConfig
 */

return [
    // Global settings
    '*' => [
        // Aliases parsed in sites’ settings, volumes’ settings, and Local volumes’ settings
        'aliases' => [
            '@basePath' => getenv('BASE_PATH'),
            '@baseUrl' => getenv('BASE_URL'),
        ],
        // Craft defined config settings
        'cacheDuration' => false,
        'defaultSearchTermOptions' => [
            'subLeft' => true,
            'subRight' => true,
        ],
        'enableCsrfProtection' => true,
        'errorTemplatePrefix' => 'errors/',
        'generateTransformsBeforePageLoad' => true,
        'maxCachedCloudImageSize' => 3000,
        'maxUploadFileSize' => 209715200,
        'omitScriptNameInUrls' => true,
        'resourceBasePath' => dirname(__DIR__) . '/web/cpresources',
        'securityKey' => getenv('SECURITY_KEY'),
        'siteUrl' => getenv('SITE_URL'),
        'useEmailAsUsername' => true,
        'usePathInfo' => true,
        'useProjectConfigFile' => false,
    ],
    // Live (production) environment
    'live' => [
        // Craft defined config settings
        'allowUpdates' => false,
        'allowAdminChanges' => true,
        'backupOnUpdate' => false,
        'devMode' => false,
        'enableTemplateCaching' => true,
        'isSystemLive' => true,
        // Custom site-specific config settings
        'custom' => [
            'environment' => getenv('ENVIRONMENT'),
        ],
    ],

    // Staging (pre-production) environment
    'staging' => [
        // Craft defined config settings
        'allowUpdates' => false,
        'allowAdminChanges' => true,
        'backupOnUpdate' => false,
        'devMode' => false,
        'enableTemplateCaching' => true,
        'isSystemLive' => true,
        // Custom site-specific config settings
        'custom' => [
            'environment' => getenv('ENVIRONMENT'),
        ],
    ],

    // Local (development) environment
    'local' => [
        // Craft defined config settings
        'allowUpdates' => true,
        'allowAdminChanges' => true,
        'backupOnUpdate' => true,
        'devMode' => true,
        'enableTemplateCaching' => false,
        'isSystemLive' => true,
        // Custom site-specific config settings
        'custom' => [
            'environment' => getenv('ENVIRONMENT'),
        ],
    ],
];
