require 'rails_helper'

RSpec.describe Api::V1::ReportsController, type: :controller do

	describe "GET all reports" do
		it "returns 200" do
			get :index
			expect(response.status).to eq(200)
		end	
	end
end
