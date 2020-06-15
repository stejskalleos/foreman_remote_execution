# frozen_string_literal: true

require 'test_plugin_helper'

class TemplateInvocationsControllerTest < ActionController::TestCase
  context 'download_output' do
    let(:tmp_inv) { FactoryBot.create(:template_invocation, :with_dynflow_task, :with_host) }

    test 'should download text file' do
      params = { id: tmp_inv.id, format: 'txt' }
      get :download_output, params: params, session: set_session_user
      assert_response :success
      assert_equal response.headers['Content-Type'], 'text/plain'
    end

    test 'should download pdf file' do
      params = { id: tmp_inv.id, format: 'pdf' }
      get :download_output, params: params, session: set_session_user
      assert_response :success
      assert_equal response.headers['Content-Type'], 'application/pdf'
    end
  end
end
