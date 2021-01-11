<?php
/**
 * Typogrify plugin for Craft CMS 3.x
 *
 * Typogrify prettifies your web typography by preventing ugly quotes and 'widows' and more
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2017 nystudio107
 */

use \PHP_Typography\Settings\Dash_Style;
use \PHP_Typography\Settings\Quote_Style;

/**
 * Typogrify config.php
 *
 * This file exists only as a template for the Typogrify settings.
 * It does nothing on its own.
 *
 * Don't edit this file, instead copy it to 'craft/config' as 'typogrify.php'
 * and make your changes there to override default settings.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as
 * well, so you can have different settings groups for each environment, just as
 * you do for 'general.php'
 */

return [
    // sets tags where typography of children will be untouched
    "set_tags_to_ignore" => [
        "code",
        "head",
        "kbd",
        "object",
        "option",
        "pre",
        "samp",
        "script",
        "noscript",
        "noembed",
        "select",
        "style",
        "textarea",
        "title",
        "var",
        "math"
    ],

    // sets classes where typography of children will be untouched
    "set_classes_to_ignore" => [
        "vcard",
        "noTypo"
    ],

    // sets IDs where typography of children will be untouched
    "set_ids_to_ignore" => [
    ],

    // curl quotemarks
    "set_smart_quotes" => true,

    // Primary quotemarks style
    // allowed values for $style
    //	"doubleCurled" => "&ldquo;foo&rdquo;",
    //	"doubleCurledReversed" => "&rdquo;foo&rdquo;",
    //	"doubleLow9" => "&bdquo;foo&rdquo;",
    //	"doubleLow9Reversed" => "&bdquo;foo&ldquo;",
    //	"singleCurled" => "&lsquo;foo&rsquo;",
    //	"singleCurledReversed" => "&rsquo;foo&rsquo;",
    //	"singleLow9" => "&sbquo;foo&rsquo;",
    //	"singleLow9Reversed" => "&sbquo;foo&lsquo;",
    //	"doubleGuillemetsFrench" => "&laquo;&nbsp;foo&nbsp;&raquo;",
    //	"doubleGuillemets" => "&laquo;foo&raquo;",
    //	"doubleGuillemetsReversed" => "&raquo;foo&laquo;",
    //	"singleGuillemets" => "&lsaquo;foo&rsaquo;",
    //	"singleGuillemetsReversed" => "&rsaquo;foo&lsaquo;",
    //	"cornerBrackets" => "&#x300c;foo&#x300d;",
    //	"whiteCornerBracket" => "&#x300e;foo&#x300f;",
    "set_smart_quotes_primary" => Quote_Style::DOUBLE_CURLED,

    // Secondary quotemarks style
    // allowed values for $style
    //	"doubleCurled" => "&ldquo;foo&rdquo;",
    //	"doubleCurledReversed" => "&rdquo;foo&rdquo;",
    //	"doubleLow9" => "&bdquo;foo&rdquo;",
    //	"doubleLow9Reversed" => "&bdquo;foo&ldquo;",
    //	"singleCurled" => "&lsquo;foo&rsquo;",
    //	"singleCurledReversed" => "&rsquo;foo&rsquo;",
    //	"singleLow9" => "&sbquo;foo&rsquo;",
    //	"singleLow9Reversed" => "&sbquo;foo&lsquo;",
    //	"doubleGuillemetsFrench" => "&laquo;&nbsp;foo&nbsp;&raquo;",
    //	"doubleGuillemets" => "&laquo;foo&raquo;",
    //	"doubleGuillemetsReversed" => "&raquo;foo&laquo;",
    //	"singleGuillemets" => "&lsaquo;foo&rsaquo;",
    //	"singleGuillemetsReversed" => "&rsaquo;foo&lsaquo;",
    //	"cornerBrackets" => "&#x300c;foo&#x300d;",
    //	"whiteCornerBracket" => "&#x300e;foo&#x300f;",
    "set_smart_quotes_secondary" => Quote_Style::SINGLE_CURLED,

    // replaces "a--a" with En Dash " -- " and "---" with Em Dash
    "set_smart_dashes" => true,

    // Sets the typographical conventions used by smart_dashes.
    //
    // Allowed values for $style:
    // - "traditionalUS"
    // - "international"
    "set_smart_dashes_style" => Dash_Style::TRADITIONAL_US,

    // replaces "..." with "…"
    "set_smart_ellipses" => true,

    // replaces "creme brulee" with "crème brûlée"
    "set_smart_diacritics" => false,

    // defines hyphenation language for text
    "set_diacritic_language" => "en-US",

    // $customReplacements must be
    //		an array formatted array(needle=>replacement, needle=>replacement...), or
    //		a string formatted `"needle"=>"replacement","needle"=>"replacement",...`
    "set_diacritic_custom_replacements" => [
    ],

    // replaces (r) (c) (tm) (sm) (p) (R) (C) (TM) (SM) (P) with ® © ™ ℠ ℗
    "set_smart_marks" => true,

    // replaces 1*4 with 1x4, etc.
    "set_smart_math" => true,

    // replaces 2^4 with 2<sup>4</sup>
    "set_smart_exponents" => true,

    // replaces 1/4  with <sup>1</sup>&#8260;<sub>4</sub>
    "set_smart_fractions" => true,

    // wrap numbers in <span class="numbers">
    "set_smart_ordinal_suffix" => false,

    // single character words are forced to next line with insertion of &nbsp;
    "set_single_character_word_spacing" => true,

    // fractions are kept together with insertion of &nbsp;
    "set_fraction_spacing" => true,

    // units and values are kept together with insertion of &nbsp;
    "set_unit_spacing" => true,

    // Enables/disables extra whitespace before certain punction marks, as is the French custom.
    "set_french_punctuation_spacing" => false,

    // a list of units to keep with their values
    "set_units" => [
    ],

    // Em and En dashes are wrapped in thin spaces
    "set_dash_spacing" => true,

    // Remove extra space characters
    "set_space_collapse" => true,

    // Enable usage of true "no-break narrow space" (&#8239;) instead of the normal no-break space (&nbsp;).
    "set_true_no_break_narrow_space" => false,

    // enables widow handling
    "set_dewidow" => true,

    // establishes maximum length of a widows that will be protected
    "set_max_dewidow_length" => 5,

    // establishes maximum length of pulled text to keep widows company
    "set_max_dewidow_pull" => 5,

    // enables wrapping at hard hyphens internal to a word with the insertion of a zero-width-space
    "set_wrap_hard_hyphens" => true,

    // enables wrapping of urls
    "set_url_wrap" => true,

    // enables wrapping of email addresses
    "set_email_wrap" => true,

    // establishes minimum character requirement after a url wrapping point
    "set_min_after_url_wrap" => 5,

    // wrap ampersands in <span class="amp">
    "set_style_ampersands" => true,

    // wrap caps in <span class="caps">
    "set_style_caps" => true,

    // wrap initial quotes in <span class="quo"> or <span class="dquo">
    "set_style_initial_quotes" => true,

    // wrap numbers in <span class="numbers">
    "set_style_numbers" => false,

    // sets tags where initial quotes and guillemets should be styled
    "set_initial_quote_tags" => [
        "p",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "blockquote",
        "li",
        "dd",
        "dt"
    ],

    // enables hyphenation of text
    "set_hyphenation" => true,

    // defines hyphenation language for text
    "set_hyphenation_language" => "en-US",

    // establishes minimum length of a word that may be hyphenated
    "set_min_length_hyphenation" => 5,

    // establishes minimum character requirement before a hyphenation point
    "set_min_before_hyphenation" => 3,

    // establishes minimum character requirement after a hyphenation point
    "set_min_after_hyphenation" => 2,

    // allows/disallows hyphenation of title/heading text
    "set_hyphenate_headings" => false,

    // allows hyphenation of strings of all capital characters
    "set_hyphenate_all_caps" => true,

    // allows hyphenation of strings of all capital characters
    "set_hyphenate_title_case" => true,

    // defines custom word hyphenations
    // expected input is an array of words with all hyphenation points marked with a hard hyphen
    "set_hyphenation_exceptions" => [
    ],

    // Enable lenient parser error handling (HTML is "best guess" if enabled).
    "set_ignore_parser_errors" => true,

    // Sets an optional handler for parser errors. Invalid callbacks will be silently ignored
    "set_parser_errors_handler" => null,
];
