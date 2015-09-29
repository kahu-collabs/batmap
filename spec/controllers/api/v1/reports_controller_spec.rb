require 'rails_helper'

RSpec.describe Api::V1::ReportsController, type: :controller do

	describe "GET all reports" do
		let!(:mock_all){
			allow(Report).to receive(:all) {[{text:"meow"}]}
		}

		it "returns 200" do
			get :index
			expect(response.status).to eq(200)
		end

		it "returns reports as JSON" do
			get :index
			results = JSON.parse(response.body)
			expect(results.first["text"]).to eq("meow")
		end
	end

	describe "GET individual report" do

		let!(:mock_find){
			allow(Report).to receive(:find) {{text:"meow"}}
		}

		it "returns 200" do
			get :show, :id => 1
			expect(response.status).to eq(200)
		end

		it "returns report as JSON" do
			get :show, :id => 1
			results = JSON.parse(response.body)
			expect(results["text"]).to eq("meow")
		end
	end

	describe "CREATE a report" do
		let(:mock_report){
			double("Report", persisted?: true)
		}
		let!(:mock_create){
			allow(Report).to receive(:create) {mock_report}
		}
		it "returns 200 with valid params" do
			post :create, report: {description: "Description"}
			expect(response.status).to eq(200)
		end
	end



end
