class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username],
                                     params[:user][:password])
    if @user
      login(@user)
      render :show
    else
      render json: ["Invalid Login Credentials"], status: 404
    end
  end

  def destroy
    if logged_in?
      log_out
      render json: {}
    else
      render json: ["Cannot log out without being signed in"], status: 404
    end
  end
end
