# Chat app

This chat app is a community driven application for https://codersuk.com

## Database
The following SQL file contains the main structure of the database. It can be modified and changed.

`Chat app SQL template.sql` 

##


## Backend

We will be using the following backend nodejs + socket.io, and python+django.

Nodejs will be our main socket.io driver for the front end with react. This will allow us to create multiple microservice.

### Python/django
Django will be used for the authentication backend and to save the data. This will allow us to have a lot more data being processes via nodejs load balancers.

### nodejs + socket.io
For the first testing iteration we will setup a nodejs+socket.io with a simple chat application. You can use expressjs to manage a temporary test front page to send/receive the data within nodejs.

Socket.io - server shall be used and start to think how to implement the namespace feature to create channels:
https://socket.io/docs/rooms-and-namespaces/



## Front end
We will be using a front end using React app. This will communicate with the nodejs via socket.io
