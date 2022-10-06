## Project Cinema 🚀

This project was developed as a technical test, in which we can see how you can consult the database to know the cast of a film and its roles, as well as the roles that each actor made.

It is fully developed with Sequelize and Express.js.

THIS PROJECT IS UNDER DEVELOPMENT

## Tools used 🛠️

* [Git](https://git-scm.com/book/es/v2/Empezando-Instalando-Git) - Version Control
* [Visual Studio Code](https://code.visualstudio.com/) - IDE
* [Postman](https://www.getpostman.com/) - API's tests

## Built With 🛠

* [Node.js](https://nodejs.org/es/) - Runtime Environment
* [Express.js](https://expressjs.com/es/) - Framework
* [Sequelize](https://sequelize.org/) - ORM
* [MySQL](https://www.mysql.com/es/) - Relational database management system

## Run the project 🚀

*_To start the project you must:_

1. Install the dependencies with the following command:
```
npm install
```

2. Execute the project with the following command:
```
npm run dev
```


## Installation 🔧

_Verify that you have installed the following programs on your computer:_

* [Node.js](https://nodejs.org/es/) - Entorno de ejecución para JavaScript
* [MySQL](https://www.mysql.com/es/) - Sistema de gestión de bases de datos relacional


## Database configuration 📦


_To configure the Database you must:_


1. Open the file **".config"** in the root of the project and modify the following lines:

```
username=root
password=
database= movies-sequelize
host=localhost
```

2. In your **MySQL** server, you must create a new database with the name given in the "**database**" field, in this case "**movies-sequelize**".

## Routes

_The routes to get a person with your movies using the id:_

| HTTP Method | URL | Description|
| --- | --- | --- |
| GET | [http://localhost:3000/api/persons/:id](http://localhost:3000/api/persons/:id) | Person with your movies|

_The routes to get a movie with your cast using the id:_

| HTTP Method | URL | Description|
| --- | --- | --- |
| GET | [http://localhost:3000/api/movies/:id](http://localhost:3000/api/movies/:id) | Movie with your cast|


## Authors ✒️

* **Lucas Varone** - [LucasVaroneW](https://github.com/LucasVaroneW)
