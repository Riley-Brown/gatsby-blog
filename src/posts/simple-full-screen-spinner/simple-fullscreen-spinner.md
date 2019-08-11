---
slug: "/simple-fullscreen-spinner"
date: "2018-09-03"
title: "Simple Fullscreen Spinner"
cover_img: "fullscreen-spinner.png"
thumbnail_img: "/static/04036adedfc30aa74ca826012e4f8f4e/0ebde/fullscreen-spinner.png"
author: "Riley Brown"
---

Here is a very simple fullscreen spinner that fades out on your site load, and improves the UX of your site. I am using jQuery, but this can also be done using plain vanilla JavaScript.

At the top of my body, I placed a div that will be the fullscreen container and a spinner SVG

```html
<div class="fullscreen-spinner">
  <img src="spinner.svg" alt="spinner logo" />
</div>
```

You can make a spinner with CSS, but I prefer to use <a href="https://loading.io/" target="_blank">this site</a> for my spinner SVGs.

Next, in CSS, we just need to style the fullscreen spinner container

```css
.fullscreen-spinner {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100000;
  background: #225470;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

I give the spinner container a width of `100vw` and `100vh` which will take up the whole browser at any width and height. I also set position fixed so no matter where the user is on the site, this fullscreen div will cover the loading content.

Make sure the z-index is higher than everything else on the site, and give the div a background color that goes well with your design.

Last, in our CSS, I display the div as flex so I can position the SVG in the center using justify-content: center and align-items: center.

The last step is the JS to hide the spinner when the site has loaded.
At the bottom of my body, after my scripts, I place script tags to hide the spinner

```html
<script language="javascript" type="text/javascript">
  $(window).on("load", function() {
    $(".fullscreen-spinner").fadeOut()
  })
</script>
```

Once again, I’m using jQuery but this can still be done a little differently with vanilla JS.

I target the fullscreen spinner div and give it the jQuery method fadeOut() which will, you guessed it, fade the element out.

I call the fadeOut() method after the site has fully loaded using the window on load jQuery event.

That’s it, a few lines of code to improve the UX of your site. <a href="https://codepen.io/RileyB/pen/oPWoJX" target="_blank">Full code here.</a>
