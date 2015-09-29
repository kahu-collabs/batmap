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
		let(:mock_saved_report){
			double("Report", persisted?: true)
		}
		let(:mock_invalid_report){
			double("Report", persisted?: false)
		}
		it "returns 200 with valid params" do
			allow(Report).to receive(:create) {mock_saved_report}
			post :create, report: {description: "Description"}
			expect(response.status).to eq(200)
		end

		it "returns 400 with incorrect params" do
			allow(Report).to receive(:create) {mock_invalid_report}
			post :create, report: {description: "Description"}
			expect(response.status).to eq(400)
		end
	end

	describe "DELETE a report" do
		let(:mock_report){
			double("Report", destroy: nil)
		}
		it "returns 200 with valid params" do
			allow(Report).to receive(:find_by) {mock_report}
			delete :destroy, id: 1
			expect(response.status).to eq(200)
		end

		it "calls destroy with valid params" do
			allow(Report).to receive(:find_by) {mock_report}
			expect(mock_report).to receive(:destroy)
			delete :destroy, id: 1
		end

		it "returns 400 with incorrect params" do
			allow(Report).to receive(:find_by) {nil}
			delete :destroy, id: -1
			expect(response.status).to eq(400)
		end
	end



end
