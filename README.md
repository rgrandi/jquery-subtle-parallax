# jquery-subtle-parallax

## Usage

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