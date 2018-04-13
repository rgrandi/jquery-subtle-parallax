# jquery-subtle-parallax

## Introduction
jQuery Subtle Parallax is a lightweight (16 lines of code) jQuery plugin that is used to gently parallax a given element so long as it has a `background-image` assigned to it and that the `background-attachment` is set to `fixed`. For simplicity, there are no configurable options at the moment and it can be used as is - it moves the image at 33% of the rate of the rest of the browser.

In the future, I may look at adding configurable options for the plugin.

## Usage Instructions
Include this file in your jQuery compilation.

```javascript
$('.element').subtle_parallax();
```

This plugin will check the height of the `element`, and when the `element` comes into the viewport it will begin to parallax it. In order for it to work, the `element` will need to have a background image with the following CSS attributes:

```css
.element {
  background-attachment: fixed;
  background-position: 50% 0%;
}
```

## Dependencies
[jQuery](https://jquery.com/) - jQuery must be called prior to the script that contains **jQuery Subtle Parallax**.

