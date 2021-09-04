class TaskSweeper < ActionController::Caching::Sweeper
  # observe lets the TaskSweeper hook into the Task lifecycle.
  observe Task

  # If our sweeper detects that a Product was created call this
  def after_create(task)
    expire_cache_for(task)
  end

  # If our sweeper detects that a task was updated call this
  def after_update(task)
   expire_cache_for(task)
 end

  # If our sweeper detects that a task was deleted call this
  def after_destroy(task)
    expire_cache_for(task)
  end

  private
  def expire_cache_for(task)
    # Expire the index page now that we added a new task
    expire_page(controller: 'tasks', action: 'index')

  # Expire a fragment
    expire_fragment('all_available_tasks')
  end
end
