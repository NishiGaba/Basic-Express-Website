# Basic-Express-Website

Basic Express Website with Multiple Pages, Template and a working Contact Form.


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

	:open_file_folder: bin 
	:open_file_folder: node_modules		
	:open_file_folder: public
	:open_file_folder: routes
	:open_file_folder: views
	</> app.js
	</> package.json


## Section 2 (Jade Template Setup)

### Jade 
Default HTML Helper or Engine for Express with some different syntactical structure than standard HTML.There is no tags.

Now, we are going to require essential modules and routes and then eventually creating the instance of expressJS and then setting up view Engine (in our case it is Jade) and setting up error handling system in ``` app.js ```

Now, run command ``` npm start ``` in your terminal. 

	views -- index.jade   (main content of EXpress Default Page)
		  -- layout.jade  (contains core HTML)
		  -- error.jade

**Bang** :sparkles: Jade Template Setup is Done. Well Done !!! 


## Section 3 (Page Routes and Views)

Coming Soon...



## License

MIT © [Nishi Gaba](https://github.com/NishiGaba)
