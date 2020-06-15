class TemplateInvocationsController < ApplicationController
  include Foreman::Controller::AutoCompleteSearch

  def show
    @template_invocation = TemplateInvocation.find(params[:id])
    raise ActiveRecord::RecordNotFound unless User.current.can?(:view_job_invocations, @template_invocation.job_invocation)

    @template_invocation_task = @template_invocation.run_host_job_task
    @host = @template_invocation.host
    @auto_refresh = @template_invocation_task.pending?
    @since = params[:since].to_f if params[:since].present?
    @line_sets = @template_invocation_task.main_action.live_output
    @line_sets = @line_sets.drop_while { |o| o['timestamp'].to_f <= @since } if @since
    @line_counter = params[:line_counter].to_i
  end

  def download_output
    template_invocation = TemplateInvocation.find(params[:id])
    output = template_invocation.run_host_job_task.main_action.continuous_output.humanize

    respond_to do |format|
      hostname = template_invocation.host.name

      format.text do
        send_data(output, filename: "#{hostname}.txt", type: 'text/plain')
      end

      format.pdf do
        send_data(RemoteExecutionPDF.create(output).render, filename: "#{hostname}.pdf", type: 'application/pdf')
      end
    end
  end

  private

  def controller_permission
    'job_invocations'
  end

  def action_permission
    case params[:action]
      when 'download_output'
        'view'
      else
        super
    end
  end
end
