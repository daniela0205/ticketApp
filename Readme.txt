This project will be carried out in two parts: the frontend and the backend
*Backend:
An API Restful was coding using Nodejs, it was also done using the MVC. In the Model, the JSON object is loaded, in the Controller, the logic of the functions is carried out and in Routers, the routes that will have the Rest API are defined.
- But the main index.js calls the path: http://localhost:3000/api
- To access all tickets the path is: http://localhost:3000/api/tickets/
- The path to display a ticket is necessary to place the ticket identifier in the JSON object for example: http://localhost:3000/api/ticket/2

The internal Nodejs server for this project is set to port 3000, but this is editable. This change can be made in the index.js of the project, changing the port in the port variable

*Frontend:
The frontend is done with the Angular framework.
Basically, three components were created called tickets, details, and error.
In the ticket component, the configuration was made to show all the tickets of the backend API. By default it is shown in the default url: http://localhost:4200/

In the details component, the configuration was carried out to show in detail each one of the tickets that are selected. To access it is by selecting the link of one of the tickets and another page is opened showing the detail, or you can also through the URL for example http://localhost:4200/ticket/1

The Error component is to show page 404 when that page is not found or the connection work