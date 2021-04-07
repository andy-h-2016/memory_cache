class List < ApplicationRecord
  validates :user_id, :title, presence: true
  validates :title, uniqueness: {scope: :user_id}

  belongs_to :user

  has_many :tasks
end
