class ChangeDefaultDueDateBackToPsqlFunc < ActiveRecord::Migration[5.2]
  def change
    change_column_default :tasks, :due_date, from: "2021-04-10 21:05:04", to: -> {'NOW()'}
    change_column_null :tasks, :due_date, true
  end
end
