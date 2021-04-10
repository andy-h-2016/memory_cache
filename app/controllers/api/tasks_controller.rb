class Api::TasksController < ApplicationController
  def index
    if params[:task][:custom]
      inputs = task_params
      query = inputs[:custom]
      @tasks = Task.where(query)
    else
      @tasks = Task.where(task_params)
    end

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
    if params[:task][:due_date]
      year, month, day = params[:task][:due_date].map(&:to_i)
      params[:task][:due_date] = DateTime.new(year, month, day)
    elsif params[:task][:custom]
      
      ## query template = {today: [year, month, day], next_week: [year, month, day]}
      query = params[:task][:custom][:query]

      type = params[:task][:custom][:type]
      case type
      when 'this-week'
        conditions = [
          'due_date BETWEEN ? and ? AND user_id=?',
          DateTime.new(*(query[:today].map(&:to_i))),
          DateTime.new(*(query[:next_week].map(&:to_i))),
          current_user.id
        ]
       
        params[:task][:custom] = ActiveRecord::Base.send(:sanitize_sql_array, conditions)
      else
        #if custom does not match the above, it is not trustworthy, delete it.
        params[:task].delete(:custom)
      end
    end

    params
      .require(:task)
      .permit(:user_id, :list_id, :title, :due_date, :priority, :complete, :estimate, :custom)
      .with_defaults(user_id: current_user.id, complete: false)
  end
end
