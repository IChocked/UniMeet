# UniMeet

**Project for LA Hacks 2021 K-12 Track**

## Inspiration
While brainstorming ideas, our team realized that in our transition to online school, a common discomfort was through social isolation. While academics could be adjusted to this new environment, the inability to physically see or interact with our peers at school led us to feel disconnected from our work, lonely, and isolated. Through this common struggle, we realized that what we really wanted was a way to approach others and bring peer to peer interaction to the virtual environment.

## What it does
UniMeet matches users with other students at their university based on common interests for introductory virtual chats throughout the week. It provides an easy to use, elegant platform you can use to match with other students from your university and helps you meet new people and schedule time to socialize with peers.

## How we built it
We broke our project into design, frontend, and backend development. 
The design was collaboratively developed using an online tool called Figma and all graphics and animations were custom made using photoshop and blender.  The Frontend was built using React and HTML/CSS. We based it off of our design mock-up and was iterated and refined by feedback from team members. The backend system was primarily built leveraging Firebase's Authentication and Realtime Database tools. We wrote JavaScript functions to interface with the Firebase API and interact with our client side, and wrote a python script to manage server side. Having dedicated software on server side enabled us to protect privacy and more efficiently match users by making requests to the server and letting the server parse the set of users and their interests instead of copying the database to client side. 

## Challenges we ran into
A massive challenge we ran into was integrating all three mostly independent developments together and merging the technologies used. For example, getting the Firebase backend to mesh nicely with the React frontend proved to be a many hours-long struggle that we were not expecting. 

## Accomplishments that we're proud of
We are extremely happy with the frontend design of our web app, as well as our success in off boarding the matching algorithm to a server side system.

## What we learned
Each of us came in with a different level of experience, and by collaborating and necessitating working on other parts of the project, we all walked away learning not only learning more about our respective prior knowledge, but also about the other parts of the project. I personally learned a lot about React and frontend design, and I know my partners gained a lot of experience with Firebase and troubleshooting backend struggles. 

## What's next for UniMeet
We plan to add integrations with Google Calendar so that matched users can more easily convey their schedules and complete all the logistical steps of setting up a meeting within our application. We also want to improve our interest selection system by enabling custom interests an aggregating the set of custom interests and using them as predictive typing results. We'd further like to finish adding support for all universities around the world and change our meeting platform to zoom and/or google meet which are more commonly used than the one we chose.

![logo_light_transparent](/assets/logo_light_transparent.png)