#!/bin/bash

# Common DB
#
# Shared script to set various database-related variables
#
# @author    nystudio107
# @copyright Copyright (c) 2020 nystudio107
# @link      https://nystudio107.com/
# @license   MIT

# Tables to exclude from the db dump
EXCLUDED_DB_TABLES=(
            "assetindexdata"
            "assettransformindex"
            "cache"
            "sessions"
            "templatecaches"
            "templatecachecriteria"
            "templatecacheelements"
            "templatecachequeries"
            )

TMP_DB_DUMP_CREDS_PATH="/tmp/craftscripts.creds"
