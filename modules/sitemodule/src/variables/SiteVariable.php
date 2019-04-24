<?php
/**
 * Retour plugin for Craft CMS 3.x
 *
 * Retour allows you to intelligently redirect legacy URLs, so that you don't
 * lose SEO value when rebuilding & restructuring a website
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2018 nystudio107
 */

namespace modules\sitemodule\variables;

use modules\sitemodule\SiteModule;

use ICal\ICal;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class SiteVariable
{
    // Public Methods
    // =========================================================================

    /**
     * Return the URL to the calendar feed
     *
     * @return string
     */
    public function getCalendarFeedUrl(): string
    {
        return SiteModule::$instance->calendar->getCalendarFeedUrl();
    }

    /**
     * Return the ICal object (or null) for the events feed
     *
     * @return null|ICal
     */
    public function getICal()
    {
        return SiteModule::$instance->calendar->getICal();
    }
}
