# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Brewery.destroy_all


User.create!(username: 'guest', email:'guest@guest.com', password: 'password', first_name: 'guest_first', last_name: 'guest_last')

Brewery.create!(name: 'Bump City Brewery', country: 'United States', state: 'California', city: 'Oakland', website: 'bumpcitybrewery.com', image_url: '')
Brewery.create!(name: 'Ale Industires', country: 'United States', state: 'California', city: 'Oakland', website: 'aleindustries.com', image_url: '')
Brewery.create!(name: 'Cleophus Quealy', country: 'United States', state: 'California', city: 'San Leandro', website: 'cleophusquealy.com', image_url: '')

# Beer.create!(name: 'Maple Bacon Porter', description: 'dark and bacony', brewery_id: 1, abv: "5.7%", ibu: "70", beer_style_id: 1, image_url: "")
# Beer.create!(name: 'Make America Wheat Beer Again', description: 'light and crisp', brewery_id: 1, abv: "4%", ibu: "40", beer_style_id: 2, image_url: "")
# Beer.create!(name: 'Double Pale Ale', description: 'boozy like it should be', brewery_id: 1, abv: "7.1%", ibu: "80", beer_style_id: 3, image_url: "")
# Beer.create!(name: 'IPA', description: 'standard go to ipa', brewery_id: 1, abv: "7%", ibu: "85", beer_style_id: 4, image_url: "")
# Beer.create!(name: 'No Way Gose', description: 'salty, limey, and light', brewery_id: 1, abv: "4%", ibu: "30", beer_style_id: 5, image_url: "")
