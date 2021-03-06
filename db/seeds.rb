# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!(username: 'hagrid', email: "bigbro@pottermore.com", password: 'nevermore', first_name: "Rubeus", last_name: "Hagrid")
User.create!(username: 'harrypotter', email: "hjp@pottermore.com", password: 'asdfasdf', first_name: "Harry", last_name: "Potter")

List.create!(user_id: 1, title: 'Housekeeping')
List.create!(user_id: 1, title: 'Forbidden Forest')
List.create!(user_id: 1, title: 'Care of Magical Creatures')
List.create!(user_id: 1, title: 'Grawp')
List.create!(user_id: 1, title: "Secrets: Don't tell anyone!")
List.create!(user_id: 2, title: "Stuff")


Task.create!(user_id: 1, list_id: 1, title: "Sweep up Fang's fur", due_date: DateTime.new(2021, 9, 8), estimate: 10)
Task.create!(user_id: 1, list_id: 1, title: "Replace the teapot the rat hid in", due_date: DateTime.new(2021, 9, 6))
Task.create!(user_id: 1, list_id: 1, title: "Compost Norbert's egg shells", due_date: DateTime.new(2021, 9, 13), complete: true)
Task.create!(user_id: 1, list_id: 1, title: "Return Filius' timpani", due_date: DateTime.new(2021, 9, 15))
Task.create!(user_id: 1, list_id: 2, title: "Meeting with centaurs about the spiders", due_date: DateTime.new(2021, 9, 20), estimate: 120)
Task.create!(user_id: 1, list_id: 2, title: "Tell Aragog to stop attacking centaurs", due_date: DateTime.new(2021, 10, 30), estimate: 45)
Task.create!(user_id: 1, list_id: 2, title: "Gather firewood for the winter", due_date: DateTime.new(2021, 9, 30), estimate: 60, complete: true)
Task.create!(user_id: 1, list_id: 3, title: "Get saddles for the thestrals so the students can see them", due_date: DateTime.new(2021, 10, 23 ))
Task.create!(user_id: 1, list_id: 3, title: "Prepare lesson plan for wrestling unicorns", due_date: DateTime.new(2021, 10, 15 ), estimate: 60)
Task.create!(user_id: 1, list_id: 4, title: "Knit Grawp new coat for the winter", due_date: DateTime.new(2021, 9, 30))
Task.create!(user_id: 1, list_id: 4, title: "Distract Grawp from scaring the centaurs", due_date: DateTime.new(2021,10, 1) )
Task.create!(user_id: 1, list_id: 4, title: "Teach Grawp how to shave", due_date: DateTime.new(2021, 12, 3), complete: true)
Task.create!(user_id: 1, list_id: 5, title: "I'm a little teapot / short and stout / Here is my handle / here is my spout", due_date: DateTime.new(2021, 10, 15), complete: true)
Task.create!(user_id: 1, list_id: 5, title: "I am not big-boned", due_date: DateTime.new(1928, 12, 6) )
Task.create!(user_id: 1, list_id: 5, title: "Keep quiet about the you-know-what that Fluffy is guarding from You-Know-Who", due_date: DateTime.new(1992, 5, 17), complete: true )
Task.create!(user_id: 1, title: "Track down the niffler that stole my Galleons", due_date: DateTime.new(2021, 11, 17 ) )
Task.create!(user_id: 1, title: "Make a stable for Buckbeak", due_date: DateTime.new(2021, 10, 17 ))
Task.create!(user_id: 1, title: "Get a new wand", due_date: DateTime.new(2007, 9, 20 ), complete: true)

Task.create!(user_id: 2, list_id: 6, title: "Teach Ron how to use an iPhone", due_date: DateTime.new(2021, 4, 13))
Task.create!(user_id: 2, list_id: 6, title: "Ask Hermione how to use an iPhone", due_date: DateTime.new(2021, 4, 12))
Task.create!(user_id: 2, title: "Reply to Hagrid's letter", due_date: DateTime.new(2021, 4, 17))




