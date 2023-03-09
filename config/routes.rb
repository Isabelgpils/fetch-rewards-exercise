Rails.application.routes.draw do
  root 'home#index'
  # namespace :api do
  #   namespace :v1 do
  #     resources :occupations
  #     resources :states
  #     resources :user_creation_forms
  #   end
  # end

  # get ‘/state’, to: 'state#get_state'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
