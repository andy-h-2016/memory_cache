class MakeDefaultEstimateZero < ActiveRecord::Migration[5.2]
  def change
    change_column_default :tasks, :estimate, 0
  end
end
