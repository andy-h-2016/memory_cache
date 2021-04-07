class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.integer :user_id, null: false
      t.integer :list_id, null: false
      t.string :title, null: false
      t.datetime :due_date, null: false
      t.integer :priority, null: false, default: 4
      t.boolean :complete, null: false, default: false
      t.integer :estimate
      t.timestamps
    end

    add_index :tasks, :user_id
    add_index :tasks, :list_id
    add_index :tasks, :title
    add_index :tasks, :due_date
    add_index :tasks, :priority
    add_index :tasks, :estimate
    add_index :tasks, [:user_id, :title], unique: true
  end
end
