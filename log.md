# 100 Days Of Code - Log

## February 2020

### Day 0: Sunday February 2nd, 2020

**Today's Progress**: I started the challange, posted about it on Twitter for accountability and I've considered the projects I want to work on over the next 100 days. It'll be May 12th by the time I finish this challange, so I will have handed in my dissertaiton and perhaps even completed my final exams. 

**Thoughts:** The projects I could complete are: 

- Tidy up personal website (change it into a blog). 
- Make my Nasa APOD project
- Responsive data visualisation websites fetching some data from APIs.
- Build foundational cloud knowledge by completing some AWS/GCP tutorial projects.
- Write a web app for creating invocies (for my parent's business). [Starting Point](https://hackernoon.com/a-guide-to-creating-web-applications-with-react-and-redux-2f6bc0775951)
- [Project Euler](https://projecteuler.net/) and (Leetcode)[https://leetcode.com/] problems on days when I don't want to work on my open projects.

Courses: I don't have to follow from beginning to end; these are some good starting points: 

- Complete some projects from [FreeCodeCamp](https://www.freecodecamp.org/learn/). 
- Follow along with [100 days of Swift UI](https://www.hackingwithswift.com/100/swiftui)
- Build the solutions to the problems on [Project Odin](https://www.theodinproject.com/courses).
- Complete some projects on [javascript30](https://javascript30.com/)



**Link to work:** [Personal Website](http://www.elliotalker.com) - My personal website is up, but I want to transform it into a Jekyll blog. 

### Day 1: Monday February 3rd, 2020

**Today's Progress**: I worked from 15:30 - 17:30 on recreating a smaller project I made quite a while ago - a search webpage for NASA's APOD service. Their website is old and you can't search through the results 
efficiently, but the API is good. This was good practice for my JavaScript, and I used Bootstrap for the first time in years.

**Thoughts**: 

- Date pickers aren't a universally implemented feature on browsers (looking at you Safari). 
- Remember to put scripts before the closing `body` tag and not between the `head` tags. They will run before the web page has been rendered. 

### Day 2: Tuesday February 4th, 2020 

**Today's Progress**: I continued my work on the Nasa APOD search tool today - rather than inputting the date with a 
text form (as I did in my original project), I decided to use a date picker. As I learned yesterday, the HTML5 `date` type
doesn't work on all browers (mainly those using web kit); I could either use a text box (but would then have to sanatise input)
or I could use a JQuery datepicker - since I wanted to have more experience with JQuery, I decided to go for this option. I found a tutorial for using a [bootstrap datepicker](https://formden.com/blog/date-picker).

**Thoughts**: 

- JQuery won't work if the text encoding of the page is incorrect. I explored some answers on StackOverflow and 
read [Joel Spolsky's Blog](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/).

### Day 3:  Wednesday February 5th 2020, 

**Today's Progress**: I had a lot of dissertation work to complete today, so my coding time this evening was spent working on my unviersity profile site and blog. I've also been looking at improving my skills in responsive web design, so tomorrow I will try and work on a CSS Grid Gallery. 

**Thoughts**: 

- Like exercise, it's useful to "get it out of the way" when coding on days when there are a million other things to do. Some days I can sit down and work on a problem for hours, on other days though, life gets in the way. 

- Take a look at http://users.aber.ac.uk/ela12

### Day 4: Thursday February 6th 2020

**Today's Progress**: I learnt about CSS Grid and how it differs from Flexbox. I've been quite busy today so only had an hour this evening to code. I started work on a CSS Grid Gallery - I want to be able to load the most recent week of Nasa's APODs. 

**Thoughts**: I found some useful resources today to help me build the rest of this project. 

- [FrontEnd 100 Days](https://github.com/nas5w/100-days-of-code-frontend)
- [Cards with CSS Grid](https://getflywheel.com/layout/card-layout-css-grid-layout-how-to/)
- [Full Width Containers](https://css-tricks.com/full-width-containers-limited-width-parents/)
- [CSS Grid Examles (Grid By Example)](https://gridbyexample.com/examples/) 
- [How to create an image gallery](https://www.freecodecamp.org/news/how-to-create-an-image-gallery-with-css-grid-e0f0fd666a5c/)
- [SchemeColour pastels](https://www.schemecolor.com/pastel-color-tones.php)
- [CSS Split Screen](https://www.w3schools.com/howto/howto_css_split_screen.asp)
- [Complete Guide to CSS Grid (CSS-Tricks)](https://css-tricks.com/snippets/css/complete-guide-grid/)

I need to create a new repo as **[commits to forks don't count towards contributions](https://hisaac.net/2016/11/12/why-commits-to-forks-on-github-dont-count-toward-contributions/)**!

### Day 5: Friday 7th February 2020 

**Today's Progress**: I started a local version of what will eventually be my Jekyll blog. I want to be able to show off finished projects in more detail than just a simple log every day. 

**Thoughts**: I was quite distracted today, flicking between learning about JAM stacks, Zeit, then back to CSS Grid Galleries. My domain is http://elliotalker.com right now it's some simple HTML and CSS but it'll be powered by Jekyll in the next few days. 

### Day 6: Saturday 8th February 2020 

**Today's Progress**: Today I'm on holiday in Pembrokeshire; I didn't want to miss a day so I brought my laptop on the trip. I've always liked card layouts that emulate Google's Material Design and how these cards seem to "flaot", so I've updated my CSS Grid Gallery to include some hover animations. The end goal of this small project is to load the last 7 days of [APOD](https://apod.nasa.gov/apod/astropix.html) pictures and give the user the ability to interact with them. This will be part of the archive search website that I worked on in the first couple of days. 

**Thoughts**: I really enjoyed looking at [Tobias Ahlin Bjerrome's](https://tobiasahlin.com) tutorials on CSS - it shows how powerful the language can be. I also discovered [this cool code pen project](https://codepen.io/juliangarnier/pen/idhuG) which animates a model of the solar system. 

- I learn what [Pseduo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) are _actually_ for, and how they can be used in animating elements. With regards to the hover code in the tutorial that I linked to earlier, the larger pseduo `:after` box element is always "there" on the screen, but the opacity is set to 0, so the user can't see it. When the item is "animated" with the `:hover::after` code, the opcaity is set to 1 so the user is able to see the larger box. I took this site as a [good reference](https://tobiasahlin.com/demo/animate-box-shadow/). 

- When building sites, I always keep in mind [this article](https://idlewords.com/talks/website_obesity.htm) from Idle Words. I think it's important that developers take advantage of the powerful computers where our code is executed - we shouldn't be lazy. I'm saying this because animating the gallery items in the way the tutorial outlines is more efficient than just animating the given element's `box-shadow`. 

- For future sites I want to look at using [opacity](https://www.w3schools.com/css/css_image_transparency.asp) to style [hero images](https://en.wikipedia.org/wiki/Hero_image). 

- Animations use different curves, the code I worked on today uses [cubic bezier curves](https://en.wikipedia.org/wiki/Bézier_curve#Cubic_Bézier_curves).

### Day 6a, Cheat Day: Sunday 9th February 2020

### Day 7: Monday 10th February 2020 

**Today's Progress**: I had a busy day today and didn't want to do any research before I started coding like I normally do. I worked on some LeetCode problems. 

**Thoughts**: I liked the TheTechLead's YouTube video on LeetCode - it's useful for practice, but isn't the most effective way of learning programming. I like to think of it as exercise; I should be doing problems a few times a week, to stretch myself, and by the time I get to interviews, the skills are just "there". 

### Day 8: Tuesday 11th February 2020

**Today's Progress**: I wanted to see how a lot of modern “one page” websites were built, so I played around with Parallax designs today. I’ve also learnt about CSS transitions. The network is down at my university accommodation today so I’ll upload code tomorrow.

**Thoughts**: Update: Kicked from my university network as it turns out that one of my machine has malware. I needed to reinstall my OS to remove "LokiBot".

### Day 9: Wednesday 12th February 2020

**Today's Progress**: I continued with my parallax work today. I want to be able to showcase my work so far by the end of this week!

**Thoughts**: 

- Transitions when jumping between sections would be a nice feature - something smooth scrolling.

### Day 10: Thursday 13th February 2020

**Today's Progress**: Day 10: I returned to this really good article today: https://idlewords.com/talks/website_obesity.htm…. As a result, I've produced a very minimal implementation of a full width one page website with no JavaScript.

**Thoughts**: Update from later on in the project (day 16) - to make nav links clickable I added a small amount of JS for navigation purposes. 
 
### Day 11: Friday 14th February 2020

**Today's Progress**: I started work on a new project today - I want to combine the CSS grid with getting data from the UK Parliament API. 

**Thoughts**: A small web app that grabs data from http://data.parliament.uk and makes it pretty - really enjoying playing around with different APIs at the moment.

### Day 12: Saturday 15th February 2020

**Today's Progress**: I've been entertaining guests this weekend so not had much time in the evenings to build, however I'm working on my project pages ready for it to be hosted on Netlify (or similar service). I want to be able to do a "git push" and have site changes appear.

**Thoughts**: Netlify is really cool - it syncs with a GitHub repo through OAuth and like old Apple products, it "just works". I didn't have to do too much messing around with DNS records to get my Go Daddy domain working. 

### Day 13: Sunday 16th February 2020

**Today's Progress**: I need to finish projects before starting new ones. I've worked on a bookshelf app today to look back at all of the books I've read this year - I want something nicer than GoodReads.

**Thoughts**: Projects in Progress:  

- MP Data Search 
- Nasa APOD Search
- CSS Grid Gallery 
- Full Width template website (could be useful for a portfolio)
- Goodreads bookshelf app.

### Day 14, 15, 16: Monday 17th February 2020, Tuesday 18th February 2020, Wednesday 19th February 2020 

**Today's Progress**: I've continued work on my project site and udpated the full width template project that I was working on - I think it'll be useful for future projects when I want to quickly setup a site with minimum hassle. 


**Thoughts**: Over the last few days, I've had a lot of interesting ideas for projects. Before I explore them any further, I want to finish all my existing projects and push any changes to my (project site)[www.alker.xyz]. I'm also really enjoying Dan Abramov's JavaScript email newsletter, "Just Javascript". I want to have a go at making a project on "JavaScript 30" once my dissertation work has been completed for this week. 

### Day 17, 18, 19: Thursday 20th February 2020, Friday 21st February 2020 & Saturday 22nd February 2020

**Today's Progress**:

**Thoughts**:

### Day 20: Sunday 23rd February 2020

**Today's Progress**:

**Thoughts**:

### Day 21: Monday 24th February 2020

**Today's Progress**:

**Thoughts**:

## October 2020

### Day 22: Sunday 25th October 2020 

What's happened since the last update? 

- Global pandemic, lockdowns and a great deal of anxiety/uncertainty.  
- I graduate from university (graduation ceremony postponed till 2021).
- I started my graduate job as a Software Engineer. 
- I worked on projects during lockdown but didn't commit to an hour a day. 
- Restarted 100 Days of Code.

**Today's Progress**:

Today I have reacquainted myself with my projects and created some new goals for the 67 days left of this challange. I have started building a Gastby website to replace my existing blog. I will archive my current homepage for posterity. 

**Thoughts**:
My goals for the rest of 2020.

- Finish the outstanding projects on my ([projects website](www.alker.xyz)).
- Have a blog/website I'm proud of where I can easily publish blog content. 
- Completed a few more challenges on Project Euler and LeetCode. 
- Learnt Go and the COBRA framework for creating CLI apps. 
