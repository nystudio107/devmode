<?php
/**
 * Site module for Craft CMS 3.x
 *
 * Custom site module for the devMode.fm website
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) 2018 nystudio107
 */

namespace modules\sitemodule;

use Craft;
use craft\events\RegisterTemplateRootsEvent;
use craft\events\TemplateEvent;
use craft\i18n\PhpMessageSource;
use craft\web\twig\variables\CraftVariable;
use craft\web\View;
use modules\sitemodule\assetbundles\sitemodule\SiteModuleAsset;
use modules\sitemodule\services\Calendar;
use modules\sitemodule\services\RemoteFile;
use modules\sitemodule\services\Transcript;
use modules\sitemodule\variables\SiteVariable;
use yii\base\Event;
use yii\base\InvalidConfigException;
use yii\base\Module;

/**
 * Class SiteModule
 *
 * @author    nystudio107
 * @package   SiteModule
 * @since     1.0.0
 *
 * @property Calendar $calendar
 * @property RemoteFile $remoteFile
 * @property Transcript $transcript
 */
class SiteModule extends Module
{
    // Static Properties
    // =========================================================================

    /**
     * @var ?SiteModule
     */
    public static ?SiteModule $instance = null;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function __construct($id, $parent = null, array $config = [])
    {
        Craft::setAlias('@modules/sitemodule', $this->getBasePath());
        $this->controllerNamespace = 'modules\sitemodule\controllers';

        // Translation category
        $i18n = Craft::$app->getI18n();
        /** @noinspection UnSafeIsSetOverArrayInspection */
        if (!isset($i18n->translations[$id]) && !isset($i18n->translations[$id . '*'])) {
            $i18n->translations[$id] = [
                'class' => PhpMessageSource::class,
                'sourceLanguage' => 'en-US',
                'basePath' => '@modules/sitemodule/translations',
                'forceTranslation' => true,
                'allowOverrides' => true,
            ];
        }

        // Base template directory
        Event::on(View::class, View::EVENT_REGISTER_CP_TEMPLATE_ROOTS, function (RegisterTemplateRootsEvent $e) {
            if (is_dir($baseDir = $this->getBasePath() . DIRECTORY_SEPARATOR . 'templates')) {
                $e->roots[$this->id] = $baseDir;
            }
        });

        // Set this as the global instance of this module class
        static::setInstance($this);
        // Register our components
        $config['components'] = [
            'calendar' => Calendar::class,
            'remoteFile' => RemoteFile::class,
            'transcript' => Transcript::class,
        ];

        parent::__construct($id, $parent, $config);
    }

    /**
     * @inheritdoc
     */
    public function init(): void
    {
        parent::init();
        self::$instance = $this;
        // Register our variables
        Event::on(
            CraftVariable::class,
            CraftVariable::EVENT_INIT,
            static function (Event $event) {
                /** @var CraftVariable $variable */
                $variable = $event->sender;
                $variable->set('site', SiteVariable::class);
            }
        );
        // Register our Asset bundle for CP requests
        if (Craft::$app->getRequest()->getIsCpRequest()) {
            Event::on(
                View::class,
                View::EVENT_BEFORE_RENDER_TEMPLATE,
                static function (TemplateEvent $event) {
                    try {
                        Craft::$app->getView()->registerAssetBundle(SiteModuleAsset::class);
                    } catch (InvalidConfigException $e) {
                        Craft::error(
                            'Error registering AssetBundle - ' . $e->getMessage(),
                            __METHOD__
                        );
                    }
                }
            );
        }

        Craft::info(
            Craft::t(
                'site-module',
                '{name} module loaded',
                ['name' => 'Site']
            ),
            __METHOD__
        );
    }

    // Protected Methods
    // =========================================================================
}
