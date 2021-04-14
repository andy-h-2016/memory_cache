class StaticPagesController < ApplicationController
  def root
    # expires_in 1.hours, public: true
    render :root
  end
end
