class ChangeDefaultDueDateToFixedTime < ActiveRecord::Migration[5.2]
  def change
    change_column_default :tasks, :due_date, from: -> {'NOW()'}, to: "2021-04-10 21:05:04" 
  end
end
