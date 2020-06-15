module Support
  class DummyDynflowAction < Dynflow::Action
    def continuous_output
      self
    end

    def humanize
      "Hey yo! - This is output!"
    end
  end
end
