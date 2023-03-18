# README
This is a user creation form built with Ruby on Rails and React.  

### HTTP REQUEST
* Uses Axios to send a GET request to https://frontend-take-home.fetchrewards.com/form. This returns a JSON body with data to populate the 'occupations' and 'states' drop-down fields. 

* Uses Axios to send a PUT request to https://frontend-take-home.fetchrewards.com/form with the information entered into the creation form. 

### Database
The data is then sent to the Rails database to populate the local database to be able to show some CRUD actions using the information. 


### Front End 
* React 18.2.0
* Axios 1.3.4
* bootstrap 5.2.3
* react-hook-form


### Back End
* Ruby version 3.1.3
* Rails version 7.0.4
* esbuild

