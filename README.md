# Notification Trigger API/Backend

**To Setup Project on local machine you neeed to have docker and docker-compose installed**

[Downlaod Docker ](https://www.docker.com/products/docker-desktop)
[Download Docker compose](https://docs.docker.com/compose/install/)

 - Create a api folder in root and clone this repo in it
 - navigate into the api folder you just made
 - from terminal run `docker-compose up --build`
 - project will take a few minutes to setup
 - - if you see error message for timeout run `docker-compose down` and then `docker-compose up`
 - all the containers will now start
 - - if you see error cannot connect to database just wait for a few minutes to get database ready and then in you code editor (Preferrably vs code) open any project file and just save it. server will restart automatically and should be fine now
 - all the endpoints described in email will be available at `localhost/api/{endpoint name}`

**API Endpoints**

 - `POST localhost/api/developer`
 - `POST localhost/api/team`
 - `PUT localhost/api/team/:team_id`
 - `POST localhost/api/trigger_notification`

**@Author:** konarkkapil2@gmail.com
    
