class Api::SessionsController < ApplicationController

  # cache_sweeper :list_sweeper

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render template: "api/users/show"
    else
      render json: ['Invalid credentials'], status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render template: "api/users/show"
    else
      render json: ['No one was logged in'], status: 422
    end
  end
end
