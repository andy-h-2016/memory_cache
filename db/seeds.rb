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


Task.create!(user_id: 1, list_id: 1, title: "Sweep up Fang's fur", due_date: DateTime.new(2021, 7, 1), estimate: 10)
Task.create!(user_id: 1, list_id: 1, title: "Replace the teapot the rat hid in", due_date: DateTime.new(2021, 7, 2), estimate: nil)
Task.create!(user_id: 1, list_id: 2, title: "Meeting with centaurs about the spiders", due_date: DateTime.new(2021, 7,5), estimate: 120)
Task.create!(user_id: 1, list_id: 2, title: "Tell Aragog to stop attacking centaurs", due_date: DateTime.new(2021, 6, 30), estimate: 45)
Task.create!(user_id: 1, list_id: 3, title: "Get saddles for the thestrals so the students can see them", due_date: DateTime.new(2021, 6, 23 ), estimate: nil)
Task.create!(user_id: 1, list_id: 3, title: "Prepare lesson plan for wrestling unicorns", due_date: DateTime.new(2021, 7, 15 ), estimate: 60)
Task.create!(user_id: 1, list_id: 4, title: "Knit Grawp new coat for the winter", due_date: DateTime.new(2021, 9, 30), estimate: nil)
Task.create!(user_id: 1, list_id: 4, title: "Distract Grawp from scaring the centaurs", due_date: DateTime.new(2021,7, 1) , estimate: nil)
Task.create!(user_id: 1, list_id: 5, title: "I'm a little teapot / short and stout / Here is my handle / here is my spout", due_date: DateTime.new(2000, 5, 15 ), estimate: nil)
Task.create!(user_id: 1, list_id: 5, title: "Keep quiet about the you-know-what that Fluffy is guarding from You-Know-Who", due_date: DateTime.new(1992, 5, 17 ), estimate: nil )






