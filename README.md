# Basic-Express-Website

Basic Express Website with Multiple Pages, Template and a working Contact Form.

### Things to Know Before Start

How to Setup [Node_JS_Web_Server](https://github.com/NishiGaba/Node-JS-Web-Server)


## Project Description and Features

* Installing and Setting up Express
* Routing System
* Jade Templating
* Working with Views


## Project Sections

* Installing and Setting up Express
* Jade Template Setup
* Page Routes and Views


## Section 1 (Installing and Setting up Express)

### Express JS 
Express JS is a Third Party Module for Node JS,an Entire MVC Framework. We can define our own Routes and interact with our Databases.

Install Express JS through: ``` npm install -g express ```

Install Express JS Generator for generating the framework folders  and files for our application. 
``` npm install -g express-generator ```

Now, you can run the command ``` express express-website ```
Then run command ``` npm Install ``` in the Project Directory 

This will create a project struture like this: 

	[-] bin 
	[-] node_modules		
	[-] public
	[-] routes
	[-] views
	</> app.js
	</> package.json



## Section 2 (Jade Template Setup)

### Jade 
Default HTML Helper or Engine for Express with some different syntactical structure than standard HTML.There is no tags.

Now, we are going to require essential modules and routes and then eventually creating the instance of expressJS and then setting up view Engine (in our case it is Jade) and setting up error handling system in ``` app.js ```

Now, run command ``` npm start ``` in your terminal. 

Check views : 		

	</> index.jade   (main content of Express Default Page)
	</> layout.jade  (contains core HTML)
	</> error.jade

Jade Template Setup is Done. Well Done :sparkles: 



## Section 3 (Page Routes and Views)

First of all, Install **Nodemon** Module to increase your Coding and Time Efficieny. 

To know more about Nodemon ,visit these links:

* [Simple_and_Best_Way_to_Practice_Javacsript](https://medium.com/dev-blogs/simple-and-best-way-to-practice-javascript-f91e8de1232e)
* [nodemon](https://www.npmjs.com/package/nodemon)

In this Section, we are going to Setup Bootstrap Theme and updating the views by changing the content in layout.jade,
index.jade in the ``` views``` Directory.

We are going to add some new views and routes for **About Us** and **Contact Us** and then require them in our ``` app.js ``` file 

Our Basic Express Website is Ready with Multiple Routes and a Working Contact Form.


## How to run this Project:

* Clone this repository by typing following command in your Terminal: 
	``` git clone https://github.com/NishiGaba/Basic-Express-Website.git ``` 
* Then run ``` npm install ``` in the Cloned Project Directory
* In last, run ``` nodemon ./bin/www ``` command in your Terminal

**Whoa** :smile: Awesome Express Website is running in your Browser. Check it out.


## License

MIT © [Nishi Gaba](https://github.com/NishiGaba)
