BOOL = [true, false]
RANGE = (1..4).to_a

class Task < ApplicationRecord
  validates :user_id, :list_id, :title, :due_date, :priority, presence: true
  validates :complete, inclusion: {in: BOOL}
  validates :priority, inclusion: {in: RANGE}

  belongs_to :user
  belongs_to :list

end
