# frozen_string_literal: true

require 'prawn'

class RemoteExecutionPDF
  class << self
    def create(text, font_path = default_font_path)
      file = Prawn::Document.new
      file.font(font_path)
      file.text(text.gsub(' ', Prawn::Text::NBSP))
      file
    end

    private

    def default_font_path
      ForemanRemoteExecution::Engine.root.join('vendor', 'assets', 'fonts', 'source_code_pro_regular.ttf')
    end
  end
end
