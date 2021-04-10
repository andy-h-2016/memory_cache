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

  after_initialize :ensure_due_date

  def ensure_due_date
    self.due_date ||= DateTime.current
  end
end
