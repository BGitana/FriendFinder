# FriendFINDER -App **:heart:**
FullStack with Node and Express Servers


### Overview
FriendFINDER is an application that allows the user to take a survey and be matched with a new best friend based on their answers! Take the 10-question survey and we'll match you with a friend... no wrong answers here!
Welcome to [FriendFINDER!](https://gtcbc-friendfinder.herokuapp.com/). Enjoy!


### Prerequisites

- Clone down repo
- Node.js - Download the latest version of Node https://nodejs.org/en/
- Run command 'npm install' in Terminal or GitBash
- Body-parser
- Express
- Path


### Commands

This app is setup to listen on a Heroku default port. In the absence of Heroku, it sets the port to 8080 instead. Since no database management is required, setup should be a simple matter of simply uploading the files and having the server listen for a request.	
```
node server.js
```
then navigate to 
```
localhost:8080 in browser
```
You should be able to click the survey button to navigate to the survey form.  Fill out all of the required fields on the survey form and click submit.  A Modal will pop-up with your best match.
```
localhost:8080/api/friends
```
Returns the friends data in JSON format to the browser.


## What App Does

FriendFINDER is a full stack node app deployed on Heroku. Data is saved on a file, not in a database. It uses Express to configure and operate the server, Body-Parser to pass the json data back and forth between files & functions, and fs to read & write from the data files on the server. Various routes are setup to complete the survey, view the JSON API, and post data into the app. A general catch-all route will bring all users to the homepage, regardless of the path the user attempts to access.

This App offers the user the chance to the take the survey as many times as they like. The user is directed to home page where they have the option to take the survey or look at JSON data for the friends that are currently housed within the application. 

If the user decides to take the survey, they will be redirected to the appropriate page to begin. The user is asked to provide a name and URL image that they want to use as their "profile" picture this information will be stored in an array for future use by others interested in taking the survey.

There are ten questions currently in the survey, the user has the ability to choose, on a scale of 1 to 5. The answers are stored until the end of the survey, where they are then taken and compared with other "friends" within the application. These scores are not aggregated for all 10 answers at the end, instead they are compared by difference per question, then the difference is taken and the stored "friend" with the smallest difference becomes the users new best friend.

Once the user has completed the survey, they can choose to go back to the home page, visit the API page that houses information on all other "friends" or take the survey again, where a new set of answers may produce a new best friend!


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
