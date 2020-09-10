Hey all thanks to everyone who joined the Tampa FullStack Meetup! You can find the Zoom recording of the session here: 

[Tampa FullStack Meetup 9.9.2020 :: Zoom Recording](https://us02web.zoom.us/recording/detail?meeting_id=nKvBvPOvRuOXMWLTC8ghcA==)


Questions? Comments? Technical Help?   zev@clearlyagileinc.com


## Getting Started

1. Clone the repository from github, if you have the repo, go to step 2.

2. Install Docker Desktop if you don't have it [Download it Here](https://www.docker.com/products/docker-desktop) (Skip if you have)
   **See the note below if you don't want to use Docker

3. Once you have Docker Desktop open a terminal and run `docker-compose up agile-rabbit-mq` This will download RabbitMQ and start the server!

4. Optionally, if we get this far, also install MongoDB with docker `docker-compose up agile-rabbit-mongo`

5. Run `npm install` at the root of the project, you're done!


**You will have to install RabbitMQ & MongoDB manually by downloading their install packages. 
