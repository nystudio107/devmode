<?php
/**
 * Transcoder plugin for Craft CMS 3.x
 *
 * Transcode videos to various formats, and provide thumbnails of the video
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) 2017 nystudio107
 */

/**
 * Transcoder config.php
 *
 * This file exists only as a template for the Transcoder settings.
 * It does nothing on its own.
 *
 * Don't edit this file, instead copy it to 'craft/config' as 'transcoder.php'
 * and make your changes there to override default settings.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as
 * well, so you can have different settings groups for each environment, just as
 * you do for 'general.php'
 */

return [

    // All environments
    '*' => [
        // The path to the ffmpeg binary
        'ffmpegPath' => '/usr/bin/ffmpeg',

        // The path to the ffprobe binary
        'ffprobePath' => '/usr/bin/ffprobe',

        // The options to use for ffprobe
        'ffprobeOptions' => '-v quiet -print_format json -show_format -show_streams',

        // The path where the transcoded videos are stored; must have a trailing /
        // Yii2 aliases are supported here
        'transcoderPaths' => [
            'default' => '@webroot/transcoder/',
            'video' => '@webroot/transcoder/',
            'audio' => '@webroot/transcoder/',
            'thumbnail' => '@webroot/transcoder/',
            'gif' => '@webroot/transcoder/',
        ],

        // The URL where the transcoded videos are stored; must have a trailing /
        // Yii2 aliases are supported here
        'transcoderUrls' => [
            'default' => '@transcodedEpisodes/transcoder/',
            'video' => '@web/transcoder/',
            'audio' => '@transcodedEpisodes/transcoder/',
            'thumbnail' => '@web/transcoder/',
            'gif' => '@web/transcoder/',
        ],

        // Use a md5 hash for the filenames instead of parameterized naming
        'useHashedNames' => false,
        // if a upload location has a subfolder defined, add this to the transcoder paths too
        'createSubfolders' => true,
        // Add the Clear Caches utility to the CP?
        'clearCaches' => false,

        // Preset video encoders
        'videoEncoders' => [
            'h264' => [
                'fileSuffix' => '.mp4',
                'fileFormat' => 'mp4',
                'videoCodec' => 'libx264',
                'videoCodecOptions' => '-vprofile high -preset slow -crf 22',
                'audioCodec' => 'libfdk_aac',
                'audioCodecOptions' => '-async 1000',
                'threads' => '0',
            ],
            'webm' => [
                'fileSuffix' => '.webm',
                'fileFormat' => 'webm',
                'videoCodec' => 'libvpx',
                'videoCodecOptions' => '-quality good -cpu-used 0',
                'audioCodec' => 'libvorbis',
                'audioCodecOptions' => '-async 1000',
                'threads' => '0',
            ],
        ],

        // Preset audio encoders
        'audioEncoders' => [
            'mp3' => [
                'fileSuffix' => '.mp3',
                'fileFormat' => 'mp3',
                'audioCodec' => 'libmp3lame',
                'audioCodecOptions' => '',
                'threads' => '0',
            ],
            'aac' => [
                'fileSuffix' => '.m4a',
                'fileFormat' => 'aac',
                'audioCodec' => 'libfdk_aac',
                'audioCodecOptions' => '',
                'threads' => '0',
            ],
            'ogg' => [
                'fileSuffix' => '.ogg',
                'fileFormat' => 'ogg',
                'audioCodec' => 'libvorbis',
                'audioCodecOptions' => '',
                'threads' => '0',
            ],
        ],

        // Default options for encoded videos
        'defaultVideoOptions' => [
            // Video settings
            'videoEncoder' => 'h264',
            'videoBitRate' => '800k',
            'videoFrameRate' => 15,
            // Audio settings
            'audioBitRate' => '',
            'audioSampleRate' => '',
            'audioChannels' => '',
            // Spatial settings
            'width' => '',
            'height' => '',
            'sharpen' => true,
            // Can be 'none', 'crop', or 'letterbox'
            'aspectRatio' => 'letterbox',
            'letterboxColor' => '',
        ],

        // Default options for video thumbnails
        'defaultThumbnailOptions' => [
            'fileSuffix' => '.jpg',
            'timeInSecs' => 10,
            'width' => '',
            'height' => '',
            'sharpen' => true,
            // Can be 'none', 'crop', or 'letterbox'
            'aspectRatio' => 'letterbox',
            'letterboxColor' => '',
        ],

        // Default options for encoded videos
        'defaultAudioOptions' => [
            'audioEncoder' => 'mp3',
            'audioBitRate' => '128k',
            'audioSampleRate' => '44100',
            'audioChannels' => '2',
            'synchronous' => false,
            'stripMetadata' => false
        ],
    ],

    // Live (production) environment
    'live'  => [
    ],

    // Staging (pre-production) environment
    'staging'  => [
    ],

    // Local (development) environment
    'local'  => [
    ],
];
