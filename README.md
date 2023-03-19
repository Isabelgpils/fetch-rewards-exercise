# README
This is a form built with ReactJS and Ruby on Rails.  

### HTTP REQUESTS
* Uses Axios to send a GET request to https://frontend-take-home.fetchrewards.com/form. This returns a JSON body with data to populate the 'occupations' and 'states' drop-down fields in the user form. 

* Uses Axios to send a POST request to https://frontend-take-home.fetchrewards.com/form with the information entered into the user form. 

AND

* An Axios POST request is sent to the Rails API to populate the user_forms database.  This can then be used to perform CRUD actions. 

### Front End 
* React 18.2.0
* bootstrap 5.2.3
* react-hook-form

### Back End
* Ruby version 3.1.3
* Rails version 7.0.4
#### Gems
* rack-cors
* pg ~> 1.1

### Middleware
* Axios 1.3.4
