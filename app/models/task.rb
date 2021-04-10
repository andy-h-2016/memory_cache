BOOL = [true, false]
RANGE = (1..4).to_a

class Task < ApplicationRecord
  validates :user_id, :title, :due_date, presence: true
  validates :complete, inclusion: {in: BOOL}
  validates :priority, inclusion: {in: RANGE}
  validates :title, uniqueness: {scope: :user_id}

  belongs_to :user
  belongs_to :list,
    optional: true

end
