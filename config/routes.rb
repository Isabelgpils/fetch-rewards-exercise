Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'user_forms/index'
      post 'user_forms/create'
      get '/show/:id', to: 'user_forms#show'
      delete '/destroy/:id', to: 'user_forms#destroy'
      
    end
  end
  root 'home#index'
  get '/*path' => 'home#index'
end
