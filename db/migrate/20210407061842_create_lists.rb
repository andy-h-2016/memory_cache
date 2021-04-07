class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.timestamps
    end

    add_index :lists, :user_id
    add_index :lists, [:user_id, :title], unique: true
  end
end
