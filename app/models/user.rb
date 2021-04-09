class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, :first_name, :last_name, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 8}, allow_nil: true

  has_many :lists, dependent: :destroy
  has_many :tasks, dependent: :destroy

  after_initialize :ensure_session_token

  attr_reader :password


  def self.find_by_credentials(input, password)
    user = User.find_by(username: input) || User.find_by(email: input)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
    nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest) == password
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  def full_name
    "#{first_name} #{last_name}"
  end

end
