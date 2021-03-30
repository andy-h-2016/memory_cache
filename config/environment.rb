# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

#autoformat keys of state from Ruby snake_case to JS camelCase
Jbuilder.key_format camelize: :lower