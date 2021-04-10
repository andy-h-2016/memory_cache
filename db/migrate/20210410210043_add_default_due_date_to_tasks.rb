class AddDefaultDueDateToTasks < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:tasks, :due_date, DateTime.current)
  end
end
