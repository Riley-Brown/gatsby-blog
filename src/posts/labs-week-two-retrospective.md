---
slug: "/labs-week-two-retrospective"
date: "2019-03-29"
title: "Labs Week Two Retrospective"
cover_img: "labs-week-two-retrospective.jpg"
thumbnail_img: "/static/aef8928c77326e97142fc6da51acb672/2dec6/labs-week-two-retrospective.jpg"
author: "Riley Brown"
---

Over the course of this sprint I integrated Google oAuth using Passport.js to create a user in our Postgres database, and authenticate them for accessing protected API routes. I created a login and sign up modal with state managed by redux to log users in using either Google oAuth or Github oAuth. I also created backend logic to only display posts that match the current logged in user, as well as combining the needed meta data for each post.

<h2 class="blog-text-center">Detailed Analysis</h2>

Implementing Google oAuth came with a few challenges. Most of the Passport documentation was using MongoDB and we are using Postgres so there was more of a learning curve. I had to register a new Google+ API to get the needed keys to authorize our app. Next I created a new Google Strategy in the Passport.js file:

```js
/* ===== PASSPORT GOOGLE STRATEGY ===== */
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const google_id = profile.id
        const existingUser = await db("users")
          .where("google_id", google_id)
          .first()
        if (existingUser) {
          return done(null, existingUser)
        } else {
          await db("users").insert({
            google_id: profile.id,
            display_name: profile.displayName,
            email: profile.emails[0].value,
            profile_picture: profile.photos[0].value,
          })
          const user = await db("users")
            .where({ google_id: profile.id })
            .first()
          return done(null, user)
        }
      } catch (err) {
        return done(err)
      }
    }
  )
)
```

The biggest challenge here was serializing and deserializing the user on signup/login. All of these examples were in MongoDB with built in Mongo methods. My team and I eventually realized we were trying to insert the data to our Postgres DB incorrectly. Once this was fixed everything worked properly.

```js
passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser((id, done) => {
  db("users")
    .where({ id: id })
    .first()
    .then(user => {
      if (!user) {
        done(new Error("User not found " + id))
      }
      done(null, user)
    })
})
```

<h2 class="blog-text-center">Weekly Reflection</h2>

Working in a group setting has been a great experience so far. I've learned a lot from my teammates brainstorming solutions and ideas. We all help each other debug as well when we run into a problem.

We had some issues this week with how we wanted to structure everything within our app, and how each component was going to function. We solved this by all joining a zoom call and using a whiteboard website as well as Google Spreadsheet to clearly view all the key components and data flow of our application.

When we are discussing feature changes or new features all together, we make sure everyone on the team is on the same page with the change, and address any thoughts and concerns on said change.
