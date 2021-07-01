class Note < ApplicationRecord
  validates :content, :task_id, presence: true

  belongs_to :task
end
