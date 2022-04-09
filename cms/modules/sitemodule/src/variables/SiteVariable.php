<?php
/**
 * Site module for Craft CMS 3.x
 *
 * Custom site module for the devMode.fm website
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) 2018 nystudio107
 */

namespace modules\sitemodule\variables;

use craft\helpers\Json;
use League\Csv\UnableToProcessCsv;
use modules\sitemodule\SiteModule;
use function is_string;

/**
 * @author    nystudio107
 * @package   SiteModule
 * @since     1.0.0
 */
class SiteVariable
{
    // Public Methods
    // =========================================================================

    /**
     * @param string $url
     *
     * @return mixed|null
     */
    public function webmentions(string $url): mixed
    {
        $remoteFile = SiteModule::$instance->remoteFile;
        $result = $remoteFile->fetch($url);
        if ($result) {
            $result = Json::decodeIfJson($result);
        }
        // Return null if the JSON decode fails
        if (is_string($result)) {
            $result = null;
        }

        return $result;
    }

    /**
     * Return an array of transcript lines from the remote file URL
     *
     * @param string $url
     * @return array|null
     * @throws UnableToProcessCsv
     */
    public function getTranscript(string $url): ?array
    {
        return SiteModule::$instance->transcript->fetch($url);
    }

    /**
     * Return the URL to the calendar feed
     *
     * @return string
     */
    public function getCalendarFeedUrl(): string
    {
        return SiteModule::$instance->calendar->getCalendarFeedUrl();
    }
}
