---
slug: "/close-bootstrap-menu-after-click"
date: "2018-08-07"
title: "My First Post"
img: "https://blog.riley.gg/wp-content/uploads/elementor/thumbs/pexels-photo-o1ojckl0efl8iv51r91z9jtm39v5wjq20adie62s20.jpg"
author: "Riley Brown"
---

I found an interesting snippet on StackOverflow a while back when I was trying to find a solution to close a bootstrap mobile nav after a click. I’m not sure why this is not built into BootStrap, but it is a pretty easy fix.

```js
// script to close mobile menu after click

$(".navbar-collapse a").click(function(e) {
  if (
    $(e.target).is("a") &&
    window.innerWidth < 767 &&
    $(e.target).attr("class") != "dropdown-toggle"
  ) {
    $(".navbar-collapse").collapse("toggle")
  }
})
```

This jQuery script will target every a tag in the nav, and collapse the menu after it is clicked. I have mine to include a window width of 767px, but you if need it higher or lower you can simply change to what you need.
