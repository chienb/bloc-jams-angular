## Bloc Jams Angular

jQuery is a great tool for adding animations and effects to a page, but it's difficult to build a sophisticated frontend application with jQuery alone. In this project, I refactored Bloc Jams using AngularJS. I used controllers to control the flow of data in the application, services to organize and share code across the app, and directives to attach specific Angular behavior to DOM elements.

In addition, d3.js was used to display the number of song plays in a simple <a href="https://blocjamsangular.herokuapp.com/metrics">graph</a>. Instead of logging song plays locally as a JSON object as instructed in the course, I applied what I've learned previously about Firebase and stored the data in the cloud which will update the graph in real time across all devices. 

Deployed app can be viewed here: <a href="http://blocjamsangular.herokuapp.com/">Link</a>
