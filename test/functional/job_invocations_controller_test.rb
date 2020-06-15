# frozen_string_literal: true

require 'test_plugin_helper'

class JobInvocationsControllerTest < ActionController::TestCase
  test 'should parse inputs coming from the URL params' do
    template = FactoryBot.create(:job_template, :with_input)
    feature = FactoryBot.create(:remote_execution_feature,
      :job_template => template)
    params = {
      feature: feature.label,
      inputs: { template.template_inputs.first.name => 'foobar' },
    }

    get :new, params: params, session: set_session_user
    template_invocation_params = [
      {
        'input_values' =>
        [
          {
            'value' => 'foobar',
            'template_input_id' => template.template_inputs.first.id,
          },
        ],
        'template_id' => template.id,
      },
    ]
    assert_equal(template_invocation_params,
      assigns(:composer).params['template_invocations'])
  end

  test 'should allow no inputs' do
    template = FactoryBot.create(:job_template)
    feature = FactoryBot.create(:remote_execution_feature,
      :job_template => template)
    params = {
      feature: feature.label,
    }
    get :new, params: params, session: set_session_user
    template_invocation_params = [
      {
        'template_id' => template.id,
        'input_values' => {},
      },
    ]
    assert_equal(template_invocation_params,
      assigns(:composer).params['template_invocations'])
  end

  test 'new via GET and POST' do
    template = FactoryBot.create(:job_template, :with_input)
    feature = FactoryBot.create(:remote_execution_feature, job_template: template)
    params = { feature: feature.label, inputs: { template.template_inputs.first.name => 'foobar' } }

    get :new, params: params, session: set_session_user
    assert_response :success

    post :new, params: params, session: set_session_user
    assert_response :success
  end

  context 'download_outputs' do
    let(:tmp_inv) { FactoryBot.create(:template_invocation, :with_dynflow_task, :with_host) }

    test 'should download zip file text files' do
      params = { id: tmp_inv.job_invocation.id, host_ids: [tmp_inv.host.id], format: 'txt' }
      get :download_outputs, params: params, session: set_session_user
      assert_response :success
      assert_equal response.headers['Content-Type'], 'application/zip'
    end

    test 'should download zip file with pdf files' do
      params = { id: tmp_inv.job_invocation.id, host_ids: [tmp_inv.host.id], format: 'pdf' }
      get :download_outputs, params: params, session: set_session_user
      assert_response :success
      assert_equal response.headers['Content-Type'], 'application/zip'
    end
  end
end
