# README
This project is part of a Frontend take-home exercise for Fetch Rewards. The user creation form was built with React and a backend Rails API. 

## Exercise Requirements
The requirement is to build a webpage with a user creation form.

* The form should take the following required inputs:
- Full Name
- Email
- Password
- Occupation
- State

* The Occupation and State Fields are populated from options returned by an endpoint. 


### HTTP REQUESTS
* Sends Axios GET request to https://frontend-take-home.fetchrewards.com/form. This returns a JSON body with data to populate the 'occupations' and 'states' drop-down fields in the user creationform.

* Send Axios POST request to https://frontend-take-home.fetchrewards.com/form with the information entered into the user form.

AND

* Sends Axios POST request to the Rails API to populate the user_forms database.  This can then be used to perform CRUD actions.


### Rails API
* An Axios GET request is made to the Rails API to get an index of all users and a view is generated with the state and occupation of users.  This is sorted alphabetically by state then by occupation. The Rails controller is set up for all CRUD actions. Additional views can be generated using calls to the Rails API. 


### Front End
* React 18.2.0
* bootstrap 5.2.3
* NOTE: I Intially tried to use React hook `useForm` but ran into issues with the Rails API so switched to using simple `useState`.


### Back End
* Ruby version 3.1.3
* Rails version 7.0.4

#### Gems
* rack-cors
* pg ~> 1.1


### Middleware
* Axios 1.3.4

### Accessibility
* Used the WAVE Web Accessibility Evaluation Tool chrome extension