class Api::SessionController < ApplicationController
  def create
    @user = User.find_by_credentials(username: params[:user][:username], password: params[:user][:password])
    if @user
      login(@user)
      render template: "api/users/show"
    else
      render json: 'invalid credentials', status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      # render home page
      render template: "users/show"
    else
      render json: 'No one was logged in', status: 422
    end
  end
end
