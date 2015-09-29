Rails.application.routes.draw do


	root 'site#index'

	namespace :api do
		namespace :v1 do
  			resources :reports, except: [:edit, :new]
		end
	end
end

