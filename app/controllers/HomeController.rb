class HomeController < ApplicationController

  require "rest-client"
  def get_occupations

    response = RestClient.get 'https://frontend-take-home.fetchrewards.com/form '
    data = JSON.parse(response)
    @occupation = data["occupations"]
    @occupation.each do | t |
      t.occupation
    end
  end

  def get_states
    response = RestClient.get 'https://frontend-take-home.fetchrewards.com/form '
    data = JSON.parse(response)
    @home_state = data["states"]
    @home_state.each do |t|
      t.name
    end
  end

  def index
  end

end

