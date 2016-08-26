Rails.application.routes.draw do

  # Routes to fill-in survey, to create survey and review results
  resources :surveys, only: [:new, :create, :show]

  # Route to homepage
  root to: 'pages#home'
end
