<?php
/**
 * FauxTwigExtension for Craft CMS 3.x
 *
 * This is intended to be used with the Symfony Plugin for PhpStorm:
 * https://plugins.jetbrains.com/plugin/7219-symfony-plugin
 *
 * It will provide full auto-complete for craft.app. and and many other useful things
 * in your Twig templates.
 *
 * Place the file somewhere in your project or include it via PhpStorm Settings -> Include Path.
 * You never call it, it's never included anywhere via PHP directly nor does it affect other
 * classes or Twig in any way. But PhpStorm will index it, and think all those variables
 * are in every single template and thus allows you to use Intellisense auto completion.
 *
 * Thanks to Robin Schambach; for context, see:
 * https://github.com/Haehnchen/idea-php-symfony2-plugin/issues/1103
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) 2019 nystudio107
 */

namespace nystudio107\craft;

/**
 * @author    nystudio107
 * @package   FauxTwigExtension
 * @since     1.0.0
 */
class FauxTwigExtension extends \Twig\Extension\AbstractExtension implements \Twig\Extension\GlobalsInterface
{
    public function getGlobals(): array
    {
        return [
            // Craft Variable
            'craft' => new \craft\web\twig\variables\CraftVariable(),
            // Craft Elements
            'asset' => new \craft\elements\Asset(),
            'category' => new \craft\elements\Category(),
            'entry' => new \craft\elements\Entry(),
            // Misc. Craft globals
            'currentUser' => new \craft\elements\User(),
            'currentSite' => new \craft\models\Site(),
            // Commerce Elements
            'lineItem' => new \craft\commerce\models\LineItem(),
            'order' => new \craft\commerce\elements\Order(),
            'product' => new \craft\commerce\elements\Product(),
            // Third party globals
            'seomatic' => new \nystudio107\seomatic\variables\SeomaticVariable(),
        ];
    }
}
