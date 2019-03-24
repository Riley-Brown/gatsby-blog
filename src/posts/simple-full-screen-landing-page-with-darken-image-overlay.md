---
slug: "/simple-full-screen-landing-page-with-darken-image-overlay"
date: "2018-08-04"
title: "Simple Full-screen landing page with darken image overlay"
cover_img: "fullscreen-landing.jpg"
thumbnail_img: "/static/6b893956d0016b4762dbfec78f40b638/2dec6/fullscreen-landing.jpg"
author: "Riley Brown"
---

Simple beautiful landing page with 4 lines of HTML, and ~20 lines of CSS.

```html
<div class="fullscreen-image">
  <h1 class="landing-h1">Lorem Ipsum</h1>
  <p class="landing-p">Lorem ipsum dolor sit.</p>
</div>
```

This is all the HTML you need for the image background and slogan.

First, in our CSS, we need to 0 out the default margin and padding so things work properly. The `*` will select all elements in the HTML.

```css
* {
  margin: 0;
  padding: 0;
}
```

Next, in our CSS, we need to style the fullscreen-image class.

```css
.fullscreen-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=architecture-building-business-302769.jpg&fm=jpg");
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
```

Using `background-image` we can use `linear-gradient` with a combination of rgba() to give the image an overlay without any extra markup. The “a” in the rgba() property controls the alpha value which is very useful for making an image darker or lighter but does not affect the content inside of the div like the opacity property would.

We give the fullscreen-image class a height of `100vh` which always covers the entire height of the browser no matter what size the window is at. Then the normal background size and position properties that properly size and position our image.

Displaying the fullscreen-image class as `flex` allows us to properly position our h1 and p inside of the fullscreen-image class. The `flex-direction` is important to display our content as a column instead of the default row, then align and justify properties that position our content directly in the middle of the fullscreen-image class.

I added a few extra styles to make things look a little better

```css
.landing-h1 {
  font-size: 2.3rem;
}

.landing-h1,
.landing-p {
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
}

.landing-p {
  margin-top: 10px;
  font-size: 1.3rem;
}
```

These styles are pretty self-explanatory, text color white and some basic spacing.

That’s it, all the code we need for a nice looking landing page. You can find my full code <a href="https://codepen.io/RileyB/pen/LBXWgd" target="_blank">here</a>
