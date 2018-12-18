Rails.application.routes.draw do
	resources :quizzes
  root 'quizzes#index' 	
end
