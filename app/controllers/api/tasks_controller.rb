class Api::TasksController < ApplicationController
  def index
    @tasks = Task.where(task_params)
    if @tasks
      render :index
    else
      render json: ['No tasks can be found'], status: 404
    end
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
  end

  def update
    @task = Task.find_by(id: params[:id])
    if @task
      if @task.update(task_params)    
        render :show
      else
        render json: @task.errors.full_messages, status: 422
      end
    else
      render json: ["Task cannot be found"], status: 404
    end
  end

   def destroy
    @task = Task.find_by(id: params[:id])
    if @task
      @task.destroy
      render :show
    else
      render json: ["Task cannot be found"], status: 404
    end
  end

  private
  def task_params
    params
      .require(:task)
      .permit(:user_id, :list_id, :title, :due_date, :priority, :complete, :estimate)
      .with_defaults(user_id: current_user.id)
  end
end
