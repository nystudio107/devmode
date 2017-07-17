Garnish Changelog
=================

## 0.1.18 - 2017-05-02

- Fixed a bug where HUDs where briefly showing up in the top left corner of the window before getting repositioned 

## 0.1.17 - 2017-03-21

### Fixed
- Fixed a potential infinite HUD resize loop in IE11.

## 0.1.16 - 2017-03-14

### Fixed
- Fixed a bug where NiceText objects’ staging areas were getting a `&nbps;` entity appended rather than `&nbsp;`. (AugustMiller)

## 0.1.15 - 2017-02-22

### Changed
- Modals no longer automatically update their position when they change size.

### Fixed
- Fixed a bug where modals would get caught in infinite resize handling loops.
- Fixed a bug where modals could be initialized with the wrong size when fading in.

## 0.1.14 - 2017-02-22

### Changed
- Modals and HUDs now trigger `updateSizeAndPosition` events when their size/position changes.

## 0.1.13 - 2017-02-16

### Changed
- Modals now automatically update their position when they change size. 

## 0.1.12 - 2017-01-30

### Fixed
- Fixed a bug where an infinite event loop could be caused when opening an HUD.  

## 0.1.11 - 2017-01-04

### Fixed
- Fixed a “Garnish is not defined” error.

## 0.1.10 - 2017-01-04

### Changed
- Garnish no longer has jQuery as a Bower dependency.

## 0.1.9 - 2016-12-19 

### Fixed
- Fixed a bug where HUDs weren’t factoring in window/trigger padding when calculating the max size of the HUD alongside the trigger element

## 0.1.8 - 2016-12-07

### Changed
- Relaxed the dependencies’ version requirements

## 0.1.7 - 2016-12-07

### Removed
- Removed touch support from `Garnish.BaseDrag`

## 0.1.6 - 2016-11-25

### Added
- Added touch support to `Garnish.BaseDrag`

### Changed
- Updated gulp-sourcemaps dependency to 1.9.1

## 0.1.5 - 2016-11-19

### Fixed
- HUDs now have their size and position updated on window resize

## 0.1.4 - 2016-09-02

### Added
- Added bower as an NPM dependency
- Added element-resize-detector 1.1.7 bower dependency
- Added jquery 2.2.1 bower dependency
- Added velocity 1.2.3 bower dependency
- Added jquery-touch-events 1.0.5 bower dependency
- Added gulp docs task for generating documentation with JSDoc

### Fixed
- Fixed a bug where the listener on the `click` event on the HUD’s `$shade` was not working properly with a `taphold` event defined on the same element

## 0.1.3 - 2016-08-30

### Fixed
- Fixed a bug where NiceText wasn’t accounting for trailing newlines when approximating the input height

## 0.1.2 - 2016-08-26

### Fixed
- Fixed a bug where clicking on a Menu option could hide the menu before the option had a chance to activate

## 0.1.1 - 2016-08-25

### Fixed
- Improved NiceText’s input height approximation logic
- Fixed a bug where NiceText was not ensuring the associated input was still visible before recalculating its height
