---
slug: "/labs-week-three-retrospective"
date: "2019-04-05"
title: "Labs Week Three Retrospective"
cover_img: "labs-week-three-retrospective.jpg"
thumbnail_img: "/static/fb3546b94447fd7efd213990abc5b702/3b215/labs-week-three-retrospective.jpg"
author: "Riley Brown"
---

During week three of labs my team and I made great progress on our project. We had a very informative meeting with a UX engineer that had some great advice on where to take our app. We ended up refactoring the entire layout of the app to make it easier for users to see the data they want to see. On top of this, we made the entire app mobile friendly using media queries.

<h2 class="blog-text-center">Detailed Analysis</h2>

This week I worked on responsive design of the entire app, as well as features such as the edit post modal, backend functionality to get only posts that a user has liked, and sort posts properly based on date.

I ran into issues with the edit modal form that took me a while to figure out. I had made a few actions and reducers and hooked everything up properly with redux but the form fields were not updating correctly. Inside of the book mark component, I was importing the EditModal component like this:

```js
<EditModal />
```

I eventually realized that my component was only mounting once in React’s virtual dom because the EditModal component had no unique key. After added a unique key to this component, it now re-mounted every time the key changed, which was every time you clicked on the edit button of a post. My updated component now looks like this in Bookmarks.js:

```js
{
  this.props.editFormData ? (
    <EditModal key={this.props.editFormData.post.id} />
  ) : null
}
```

<h2 class="blog-text-center">Weekly Reflection</h2>

My teammates were once again amazing this week. We all worked together to realize what we were missing in terms of our app, and what we could do to improve it. We all worked on responsive design to make our app usable on all devices, as well as a total restructure of our React components for a better user experience.

Trying to think of ways to make the user experience better as a whole was a challenge we faced this week. However, after a meeting with a UX engineer we were given valuable guidance on where we needed to take our app.

Our team is still thinking of new ways to really make our app stand out and be viable to the average consumer. Over these next two weeks we will be polishing up the app and added stretch features that we will be excited to show off on demo day.
