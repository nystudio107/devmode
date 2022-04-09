<?php
/**
 * Site module for Craft CMS 3.x
 *
 * Custom site module for the devMode.fm website
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) 2018 nystudio107
 */

namespace modules\sitemodule\services;

use Composer\Semver\Semver;
use Craft;
use craft\base\Component;
use Jean85\PrettyVersions;
use League\Csv\AbstractCsv;
use League\Csv\Exception;
use League\Csv\Reader;
use League\Csv\Statement;
use League\Csv\UnableToProcessCsv;
use modules\sitemodule\SiteModule;
use Throwable;

/**
 * @author    nystudio107
 * @package   SiteModule
 * @since     1.0.0
 */
class Transcript extends Component
{
    // Constants
    // =========================================================================

    protected const LEAGUE_CSV_PACKAGE = 'league/csv';

    // Public Methods
    // =========================================================================

    /**
     * Return an array of transcript lines from the remote file URL
     *
     * @param string $url
     * @return array|null
     * @throws UnableToProcessCsv
     */
    public function fetch(string $url): ?array
    {
        $headers = null;
        $result = null;
        $remoteFile = SiteModule::$instance->remoteFile;
        $transcriptContents = $remoteFile->fetch($url);
        if ($transcriptContents) {
            $csv = null;
            // If your CSV document was created or is read on a Macintosh computer,
            // add the following lines before using the library to help PHP detect line ending in Mac OS X
            if (!ini_get('auto_detect_line_endings')) {
                ini_set('auto_detect_line_endings', '1');
            }
            try {
                $csv = Reader::createFromString($transcriptContents);
                $csv->setDelimiter("\t");
                $headers = array_flip($csv->fetchOne(0));
            } catch (Exception $e) {
                Craft::error($e, __METHOD__);
            }
            // If we have headers, then we have a file, so parse it
            if ($csv !== null && $headers !== null) {
                switch ($this->getLeagueCsvVersion()) {
                    case 8:
                        $result = $this->importCsvApi8($csv);
                        break;
                    case 9:
                        $result = $this->importCsvApi9($csv);
                        break;
                    default:
                        break;
                }
            }
        }

        return $result;
    }

    // Protected Methods
    // =========================================================================

    /**
     * @param AbstractCsv $csv
     */
    protected function importCsvApi8(AbstractCsv $csv)
    {
        $rows = $csv->setOffset(1)->fetchAll();
        foreach ($rows as $row) {
            $result[] = $row;
        }

        return $result;
    }

    /**
     * @param AbstractCsv $csv
     */
    protected function importCsvApi9(AbstractCsv $csv): array
    {
        $result = [];
        try {
            $stmt = (new Statement())
                ->offset(1);
        } catch (Exception $e) {
            Craft::error($e, __METHOD__);
        }
        $rows = $stmt->process($csv);
        foreach ($rows as $row) {
            $result[] = $row;
        }

        return $result;
    }

    /**
     * Return the API version for `league/csv` package
     *
     * @return int API version (or 0 for not installed)
     */
    protected function getLeagueCsvVersion(): int
    {
        $version = 0;
        $installedVersion = null;
        try {
            $pv = PrettyVersions::getVersion(self::LEAGUE_CSV_PACKAGE);
            $installedVersion = $pv->getPrettyVersion();
        } catch (Throwable $e) {
            Craft::error($e, __METHOD__);
        }
        if ($installedVersion) {
            if (Semver::satisfies($installedVersion, '^8.0.0')) {
                $version = 8;
            }
            if (Semver::satisfies($installedVersion, '^9.0.0')) {
                $version = 9;
            }
        }

        return $version;
    }
}
