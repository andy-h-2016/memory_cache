class Api::ListsController < ApplicationController
  def index
    @lists = List.where(user_id: current_user.id)
    render :index
  end

  def create
    full_params = list_params.to_hash.symbolize_keys.merge({user_id: current_user.id})
    @list = List.new(full_params)
    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def update
    @list = List.find_by(id: params[:id])
    if @list
      if @list.update(params[:list][:title])
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
    params.require(:list).permit(:user_id, :title)
  end
end
