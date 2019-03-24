---
slug: "/close-bootstrap-menu-after-click"
date: "2018-08-05"
title: "Close BootStrap nav menu after click"
cover_img: "bootstrap-social.png"
thumbnail: "/static/56be615bbca4502de5d55d721dae917f/c07a1/bootstrap-social.png"
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
