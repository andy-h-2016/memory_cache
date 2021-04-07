# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!(username: 'hagrid', email: "bigbro@pottermore.com", password: 'nevermore', first_name: "Rubeus", last_name: "Hagrid")

List.create!(user_id: 1, title: 'Housekeeping')
List.create!(user_id: 1, title: 'Forbidden Forest')
List.create!(user_id: 1, title: 'Care of Magical Creatures')
List.create!(user_id: 1, title: 'Grawp')
List.create!(user_id: 1, title: "Secrets: Don't tell anyone!")