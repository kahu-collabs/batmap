class Api::V1::ReportsController < ApplicationController

	def index
		@reports = Report.all
		render json: @reports
	end

	def show
		@report = Report.find
		render json: @report
	end

	def create
		report = Report.create(report_params)
		if report.persisted?
			render json: report
		end
	end

	private

	def report_params
		params.require(:report).permit(:description, :happened_before,
			:additional_info, :location)
	end
end
