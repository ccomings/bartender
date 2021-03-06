Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :checkins, only: [:index, :create]
    resources :beers, only: [:index, :show, :create, :edit, :update, :destroy]
    resources :breweries, only: [:index, :show, :create, :edit]
  end
  root 'static_pages#root'
end
