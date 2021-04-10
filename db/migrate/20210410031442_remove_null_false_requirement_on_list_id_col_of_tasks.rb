class RemoveNullFalseRequirementOnListIdColOfTasks < ActiveRecord::Migration[5.2]
  def change
    change_column_null :tasks, :list_id, true
  end
end
