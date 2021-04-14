class Api::ListsController < ApplicationController
  caches_action :index


  def index
    @lists = List.where(user_id: current_user.id)
    render :index
    
    expires_in 24.hours, public: true
  end

  def create
    @list = List.new(list_params)
    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def update
    @list = List.find_by(id: params[:id])
    if @list
      if @list.update(list_params)
        render :show
      else
        render json: @list.errors.full_messages, status: 422
      end
    else
      render json: ["List cannot be found"], status: 404
    end
  end

  def destroy
    @list = List.find_by(id: params[:id])
    if @list
      @list.destroy
      render :show
    else
      render json: ["List cannot be found"], status: 404
    end
  end



  private
  def list_params
    params.require(:list).permit(:title).with_defaults(user_id: current_user.id)
  end
end
