class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :content, null: false
      t.integer :task_id, null: false
      t.timestamps
    end

    add_index :notes, :task_id
  end
end
