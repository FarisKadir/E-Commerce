# E-Commerce

## Table of Contents

[Description](#Description)  

[User Story](#User_Story)  

[Video Walkthrough](#Video_Walkthrough)  

[Installation Instructions](#Installation_Instructions)  

[APIs](#Apis)

[Questions](#Questions)  


## Description

I created this application to allow an e-commerce store to update their product offerings and update their inventory. A user can view all of the existing products, categories and tags. They can also add/update/delete products, categories and tags. The technlogies that were used for this application were MySQL, Express, Node.js, Sequelize, and Javascript. This application can only run on a server. Once the server is started you can use an API tool like Postman or Insomnia core to access the API endpoints.

## User_Story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Video_Walkthrough

[Part 1](https://www.youtube.com/watch?v=ICP3WTLXru8) <br>
[Part 2](https://www.youtube.com/watch?v=iMbQoJaLBwE)


## Installation_Instructions

In order to run this application you'll need to install the following:

    -Node.js
    -MySQL12
    -Express
    -Sequelize
    -dotenv

You will need to run the below file in your MySQL database to create the database:

    /db/schema.sql

Once the database has been created and the above applications installed you can run the below commands in your terminal to seed the database and start your server:

    npm run seed

    npm start

Lastly you will need a way to make API calls. You can use a tool like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/products/insomnia) or build an application of your own.
    

## APIs

A collection of the API endpoints can be found in the below directory. Import this file into [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/products/insomnia) to quickly be able to call the endpoints.

    assets/api_collection

## Questions

For any questions please reach out to me on [GitHub](https://github.com/FarisKadir).