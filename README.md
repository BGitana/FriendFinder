# FriendFINDER -App **:heart:**
FullStack mobile first with Node and Express Servers


### Overview
FriendFINDER is a responsive web application that allows the user to take a survey and be matched with a new best friend based on their answers! Take the 10-question survey and we'll match you with a friend... no wrong answers here!
Welcome to [FriendFINDER](https://dry-badlands-26968.herokuapp.com/). Enjoy!


### Commands

This app is setup to listen on a Heroku default port. In the absence of Heroku, it sets the port to 8080 instead. Since no database management is required, setup should be a simple matter of simply uploading the files and having the server listen for a request.	
```
node server.js
```
then navigate to 
```
localhost:8000 in browser
```
You should be able to click the survey button to navigate to the survey form.  Fill out all of the required fields on the survey form and click submit.  A Modal will pop-up with your best match.
```
localhost:8000/api/friends
```
Returns the friends data in JSON format to the browser.


### Prerequisites

- Clone down repo
- Node.js - Download the latest version of Node https://nodejs.org/en/
- Run command 'npm install' in Terminal or GitBash
- Body-parser
- Express
- Path


### What App Does

FriendFINDER is a mobile first full stack node app deployed on Heroku. Data is saved on a file, not in a database. It uses Express to configure and operate the server, Body-Parser to pass the json data back and forth between files & functions, and fs to read & write from the data files on the server. Various routes are setup to complete the survey, view the JSON API, and post data into the app. A general catch-all route will bring all users to the homepage, regardless of the path the user attempts to access.


### Tech Used

* [Nodejs](https://nodejs.org/en/) - run-time environment to build a back-end server
* [Expressjs](https://expressjs.com/) - framework to build back end routing 
* [Materialize](https://materializecss.com/) - component library for a front-end responsive framework
* [jQuery](https://jquery.com/) - JavaScript library for DOM traversal and manipulation
* [HTML](https://html.com/) - create pages/documents to be displayed in a web browser
* [CSS](https://www.w3schools.com/Css/css_intro.asp) - customizing content, layout, colors, and fonts
* [Heroku](https://html.com/) - a cloud Platform to deploy, manage, and scale the app


### Built With
- Visual Studio Code - Text Editor
