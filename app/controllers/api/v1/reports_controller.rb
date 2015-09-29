class Api::V1::ReportsController < ApplicationController
	
	def index
		@reports = Report.all
		render json: @reports
	end

	def show
		@report = Report.find
		render json: @report
	end

	

end
