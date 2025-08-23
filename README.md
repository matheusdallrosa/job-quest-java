# JobQuest

JobQuest is a 'Job Portal' web application made using Java SpringBoot and ReactJS.

## Table of Contents

- [Demo](#demo)
  - [Screenshots](#screenshots)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Running the Project Locally](#running-the-project-locally)

## Demo

You can check out the live demo of JobQuest [here](https://job-quest-client.vercel.app/).

### Screenshots

![](ReadmeImgs/screen-1.png)

---

![](ReadmeImgs/screen-2.png)

---

![](ReadmeImgs/screen-3.png)

## Features

- Candidates can
  - apply to posted jobs
  - keep a watch on their job applications' status
- Recruiters can
  - post and delete jobs
  - accept or reject job applications from candidates

## Technologies Used

### Frontend

- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/) for styling
- [Axios](https://axios-http.com/docs/intro)
- [Redux Toolkit (RTK)](https://redux-toolkit.js.org/)
- [Redux Persist](https://redux-toolkit.js.org/rtk-query/usage/persistence-and-rehydration)

### Backend

- [Spring Boot](https://spring.io/projects/spring-boot)
- [Spring Security](https://spring.io/projects/spring-security)
- [Spring Data MongoDB](https://spring.io/projects/spring-data-mongodb)

## Running the Project Locally

These instructions will help you set up a copy of the project on your local machine.

### Installing & Usage

The first option to run the application locally for development is to use our docker-compose.yml configuration.
This option is very interesting if you are going to make mostly front-end related changes, or you want to make sure
that you are starting a test with a clean environment.

Prerequisites
- Docker
- Node 17.5+
- Npm 8.4.1

Commands
   ```bash
   # clone the repo
   git clone https://github.com/matheusdallrosa/job-quest-java
   cd job-quest-java
   
   # Builds the back-end project. 
   # Starts the back-end API inside a docker file.
   # Starts a mongodb server to store the data.
   Docker compose up --build
   
   # Goes to FE project folder
   cd job-quest-frontend 
   
   # Installs dependencies
   npm install
   
   # Run dev server.
   npm run dev
   ```

The second option is to run manually run the back-end application and the front-end application. Very useful when you are going to do
a lot of changes on the back-end and wants to iterate quickly.
Prerequisites
- Docker
- Node 17.5+
- Npm 8.4.1
- Java 17

Commands
   ```bash
   # clone the repo
   git clone https://github.com/matheusdallrosa/job-quest-java
   cd job-quest-java/jobquestbackend
   
   # Run mongodb inside a docker container
   docker container run --name mongodb -e MONGO_INITDB_ROOT_USERNAME=jobdb -e MONGO_INITDB_ROOT_PASSWORD=jobdb -e MONGO_INITDB_DATABASE=jobquest -p 27017:27017 mongo
   
   # Build the application code
   MONGO_USER=jobdb MONGO_PASSWORD=jobdb MONGO_CLUSTER=127.0.0.1 ./mvnw clean install
   
   # Run local server
   MONGO_USER=jobdb MONGO_PASSWORD=jobdb MONGO_CLUSTER=127.0.0.1 ./mvnw clean spring-boot:run
   
   # Goes to FE project folder
   cd ../job-quest-frontend
   
   # Installs dependencies
   npm install
   
   # Run dev server.
   npm run dev
   ```
