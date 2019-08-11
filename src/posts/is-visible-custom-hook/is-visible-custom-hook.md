---
slug: "/is-visible-custom-react-hook"
date: "2019-08-11"
title: "Custom React isVisible Hook"
cover_img: "react-hooks.png"
thumbnail_img: "/static/f888deb7a91526a1a0ba5e9a75ecc32d/0ebde/react-hooks.png"
author: "Riley Brown"
---

Recently I refactored my portfolio using Gatsby, and in the process discovered the power of using custom React Hooks.

I have never loved the HOC and Render Props patterns that have been the go-to for reusing component logic, but hooks gives us the ability to reuse component logic in a much more readable and easier way.

I created a simple reusable hook to detect if an element is currently in the viewport or not. Here's a CodeSandbox demo

<iframe src="https://codesandbox.io/embed/infallible-proskuriakova-z1nfl?fontsize=14&module=%2Fsrc%2FuseIsVisible.js" title="infallible-proskuriakova-z1nfl" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

Basically it takes a ref as an argument using the `useRef()` hook, checks the ref's `getBoundingClientRect().top` and returns true or false if the top of the element is in the viewport.

I am only checking if the top of the element is in the viewport, but you can adjust the conditional logic to check for the entire element. In my case I wanted to stop a carousel if the top was not in the viewport.

<h2 class="blog-text-center">Examining the Code</h2>

First I set the default state needed to keep track of the visible boolean and the window height using the `useState` hook

```js
const [visible, setVisible] = useState(null)
const [windowHeight, setWindowHeight] = useState(
  typeof window !== "undefined" ? window.innerHeight : null
)
```

I used a conditional to check for the window object because I was running into a build error using Gatsby as it does not have access to the window object while building. This check is **not needed** unless you are using server side rendering or some sort of static site generator that does not have access to the window.

Next is the `useEffect` hook logic to run the initial visible check, and add a scroll event to the `isVisible` function to keep checking after the initial render

```js
useEffect(() => {
  if (element.current) {
    setWindowHeight(window.innerHeight)
    isVisible() // initial visible check
    window.addEventListener("scroll", debounce(isVisible, 200))
  }

  return () => window.removeEventListener("scroll", isVisible)
}, [element])
```

<!-- The `useEffect` hook can be used to replicate multiple traditional class component life-cycle methods. In this case, our `useEffect` hook basically works as componentDidMount, componentDidUpdate, and componentWillUnmount all in one.

The `useEffect` hook runs after the first render where as `componentDidMount` runs before the first render, but in our case, it doesn't make a difference.

Using `[element]` at the end of the effect hook is referred to as the hook's dependencies. By default, `useEffect` runs after the first render, and every subsequent render but by passing the `[element]` dependency, this tells the hook to run after the first render, and only again when element changes, thus acting as componentDidUpdate. -->

Im checking for the `element.current` which comes from the ref arg passed in to make sure the ref is valid, then I set the window height, initially invoke isVisible (which is further below in the code), and add a scroll event using a debounce higher-order function to improve performance.

Lastly, I return a function from the useEffect hook which acts as componentWillUnmount, and simply removes the scroll event.

Next is the `isVisible` function which actually checks if the element is in the viewport or not

```js
const isVisible = () => {
  const top = element.current.getBoundingClientRect().top

  if (top >= 0 && top <= windowHeight) {
    setVisible(true)
  } else {
    setVisible(false)
  }
}
```

`getBoundingClientRect().top` will return a number that represents where the top of the element is, relative to the viewport, in pixels.

In my conditional i'm simply just checking if the top of the element is in the viewport, but this can be adjusted to check if the entire element is in the viewport, or other logic using different combinations of `getBoundingClientRect()`

If the rect().top is greater than or equal to 0 and less than or equal to the window height, then the top of the element is visible in the viewport, then I set the state accordingly.

Next is some simple debounce logic I put together with the help of a few StackOverFlow posts

```js
// debounce function execution
function debounce(func, delay) {
  let timeout = null
  return function() {
    window.clearTimeout(timeout)
    timeout = window.setTimeout(function() {
      func()
    }, delay)
  }
}
```

This is the function that wrapped `isVisible` in the effect hook above, and basically just delays the invocation of `isVisible` until scrolling has stopped, and the delay argument amount has passed. This significantly improves performance by avoiding a ton of repeating function invocations.

I thought this was a much nicer solution than adding something like lodash just for this one piece of functionality, although the lodash implementation is much more flexible and probably less buggy.

Lastly I return the visible state, this is what our components have access to when this hook is declared inside of a component.

```js
return visible
```

<h2 class="blog-text-center">Usage inside of a Component</h2>

Using the isVisible hook, and most hooks for that matter, inside of a component is insanely simple and clean, and is a huge reason i'm loving hooks more and more.

```jsx
import React, { useRef } from "react"
import { useIsVisible } from "./useIsVisible"

function App() {
  const ref = useRef()
  const visible = useIsVisible({ element: ref })
  return (
    <div ref={ref}>
      {visible ? (
        <h1>The top of this div is currently visible in the viewport woohoo</h1>
      ) : (
        <h1>The top of the div must be hidden now 😭</h1>
      )}
    </div>
  )
}
```

Using the visible boolean that the hook returns, we can use it to conditionally render, or preform some other logic in our component in a few lines of code. It makes the component so clean and simply beautiful to read, also more DRY if this visible logic was needed in multiple different components.
