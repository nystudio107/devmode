<?php
/**
 * Craft web bootstrap file
 */

// Project root path
$root = dirname(__DIR__);

// Composer autoloader
require_once $root.'/vendor/autoload.php';

// Load the local craft3-multi-environment
if (file_exists($root . DIRECTORY_SEPARATOR . '.env.php'))
    require_once $root . DIRECTORY_SEPARATOR . '.env.php';
// Default environment
if (!defined('CRAFT_ENVIRONMENT'))
    define('CRAFT_ENVIRONMENT', getenv('CRAFTENV_CRAFT_ENVIRONMENT'));

// Craft
define('CRAFT_BASE_PATH', $root);
$app = require $root.'/vendor/craftcms/cms/bootstrap/web.php';
$app->run();
