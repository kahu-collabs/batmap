Rails.application.routes.draw do


	namespace :api do
		namespace :v1 do
  			resources :reports, except: [:edit, :new]
		end
	end
end