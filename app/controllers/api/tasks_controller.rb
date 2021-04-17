class Api::TasksController < ApplicationController
  def index
    if params[:task][:custom]
      query = custom_params
      # query = inputs[:custom]
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
    end

    params
      .require(:task)
      .permit(:user_id, :list_id, :title, :due_date, :priority, :complete, :estimate)
      .with_defaults(user_id: current_user.id, complete: false)
  end

  def custom_params
    type = params[:task][:custom]
    complete = params[:task][:complete]
    case type
    when 'inbox'
      # finding the uncategorized tasks
      conditions = [
        'list_id IS NULL AND user_id=? AND complete=?',
        current_user.id,
        complete
      ]
    when 'today'
      conditions = [
        'due_date=? AND user_id=? AND complete=?',
        DateTime.current,
        current_user.id,
        complete
      ]
    when 'tomorrow'
      conditions = [
        'due_date=? AND user_id=? AND complete=?',
        DateTime.current.advance(days: 1),
        current_user.id,
        complete
      ]
    when 'this-week'
      #finding tasks due in the coming week
      conditions = [
        'due_date BETWEEN ? and ? AND user_id=? AND complete=?',
        DateTime.current,
        DateTime.current.advance(weeks: 1),
        current_user.id,
        complete
      ]
    else
      #if type does not match the above, it is not trustworthy, delete it.
      conditions = [];
    end

    #create the query using the conditions created by the case-when block above
    ActiveRecord::Base.send(:sanitize_sql_array, conditions)
  end

end
