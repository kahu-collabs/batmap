class JsmapsController < ApplicationController

	def main
		render file: '/public/main', layout: false
	end
end
