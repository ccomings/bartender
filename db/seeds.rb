# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Brewery.destroy_all
Beer.destroy_all
Style.destroy_all
Checkin.destroy_all

User.create!(username: 'guest', email:'guest@guest.com', password: 'password', first_name: 'guest_first', last_name: 'guest_last')
User.create!(username: 'Police_Officer', email: Faker::Internet.unique.email, password: 'password',
  first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, about: Faker::Lorem.paragraph(2),
  image_url: 'http://res.cloudinary.com/dkeart1zy/image/upload/v1501172834/0_oo4fb9.jpg')
User.create!(username: 'LegoMan', email: Faker::Internet.unique.email, password: 'password',
  first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, about: Faker::Lorem.paragraph(2),
  image_url: 'http://res.cloudinary.com/dkeart1zy/image/upload/v1501172833/1_vpefgq.jpg')
User.create!(username: 'Magician', email: Faker::Internet.unique.email, password: 'password',
  first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, about: Faker::Lorem.paragraph(2),
  image_url: 'http://res.cloudinary.com/dkeart1zy/image/upload/v1501172833/2_ynymnk.jpg')
User.create!(username: 'Doctor', email: Faker::Internet.unique.email, password: 'password',
  first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, about: Faker::Lorem.paragraph(2),
  image_url: 'http://res.cloudinary.com/dkeart1zy/image/upload/v1501172833/3_qwip9h.jpg')
User.create!(username: 'trash can lid hat', email: Faker::Internet.unique.email, password: 'password',
  first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, about: Faker::Lorem.paragraph(2),
  image_url: 'http://res.cloudinary.com/dkeart1zy/image/upload/v1501172833/4_irm1fd.jpg')
User.create!(username: 'Guy', email: Faker::Internet.unique.email, password: 'password',
  first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, about: Faker::Lorem.paragraph(2),
  image_url: 'http://res.cloudinary.com/dkeart1zy/image/upload/v1501172833/5_dlmp7n.jpg')
User.create!(username: 'Fiesta', email: Faker::Internet.unique.email, password: 'password',
  first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, about: Faker::Lorem.paragraph(2),
  image_url: 'http://res.cloudinary.com/dkeart1zy/image/upload/v1501172834/6_k0l4ov.jpg')
User.create!(username: 'Joe the Plumber', email: Faker::Internet.unique.email, password: 'password',
  first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, about: Faker::Lorem.paragraph(2),
  image_url: 'http://res.cloudinary.com/dkeart1zy/image/upload/v1501172834/7_vx6goh.jpg')
User.create!(username: 'Bobby Flay', email: Faker::Internet.unique.email, password: 'password',
  first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, about: Faker::Lorem.paragraph(2),
  image_url: 'http://res.cloudinary.com/dkeart1zy/image/upload/v1501172833/8_wrhwsc.jpg')

Brewery.create!(name: 'Bump City Brewery', country: 'United States', state: 'California',
  city: 'Oakland', website: 'bumpcitybrewery.com',
  image_url: 'http://res.cloudinary.com/dkeart1zy/image/upload/v1500605762/Screen_Shot_2017-07-20_at_7.55.35_PM_e3kbmq.png')
Brewery.create!(name: Faker::GameOfThrones.city, country: Faker::Address.country, state: Faker::Address.state,
  city: Faker::Address.city, website: Faker::Internet.url('example.com'),
  image_url: "http://res.cloudinary.com/dkeart1zy/image/upload/v1501281471/images_brewery_mvwz4r.jpg")
Brewery.create!(name: Faker::GameOfThrones.city, country: Faker::Address.country, state: Faker::Address.state,
  city: Faker::Address.city, website: Faker::Internet.url('example.com'),
  image_url: "http://res.cloudinary.com/dkeart1zy/image/upload/v1501281471/images_brewery2_umpehr.jpg")
Brewery.create!(name: Faker::GameOfThrones.city, country: Faker::Address.country, state: Faker::Address.state,
  city: Faker::Address.city, website: Faker::Internet.url('example.com'),
  image_url: "http://res.cloudinary.com/dkeart1zy/image/upload/v1501281471/images_brewery3_skmpfo.jpg")
Brewery.create!(name: Faker::GameOfThrones.city, country: Faker::Address.country, state: Faker::Address.state,
  city: Faker::Address.city, website: Faker::Internet.url('example.com'),
  image_url: "http://res.cloudinary.com/dkeart1zy/image/upload/v1501281471/images_brewery_4_xfni2r.jpg")
Brewery.create!(name: Faker::GameOfThrones.city, country: Faker::Address.country, state: Faker::Address.state,
  city: Faker::Address.city, website: Faker::Internet.url('example.com'),
  image_url: "http://res.cloudinary.com/dkeart1zy/image/upload/v1501281471/images_brwery_5_yz6bpt.jpg")

30.times do
  Beer.create!(
    name: Faker::Beer.unique.name,
    style: Faker::Beer.style,
    ibu: Faker::Beer.ibu,
    abv: Faker::Beer.alcohol,
    description: Faker::Lorem.sentence(3),
    brewery_id: Random.rand(1..6)

  )
end

Beer.create!(name: 'Maple Bacon Porter', description: 'dark and bacony', brewery_id: 1, abv: "5.7%", ibu: "70", image_url: "")
Beer.create!(name: 'Make America Wheat Beer Again', description: 'light and crisp', brewery_id: 1, abv: "4%", ibu: "40", image_url: "")
Beer.create!(name: 'Double Pale Ale', description: 'boozy like it should be', brewery_id: 1, abv: "7.1%", ibu: "80", image_url: "")
Beer.create!(name: 'IPA', description: 'standard go to ipa', brewery_id: 1, abv: "7%", ibu: "85", image_url: "")
Beer.create!(name: 'No Way Gose', description: 'salty, limey, and light', brewery_id: 1, abv: "4%", ibu: "30", image_url: "")

20.times do
  Checkin.create!(
    user_id: Random.rand(1..10),
    beer_id: Random.rand(1..35),
    review: Faker::Lorem.sentence(3),
    rating: Random.rand(1..5),
    location: Faker::Address.street_name
  )
end

# beer_styles = ["Ale", "Altbier", "Amber", "American", "Bock",
#   "Cream", "Czech", "Dark", "Dunkles",
#   "Dunkel", "Exportbier", "Festbier", "German", "Helles",
#   "International", "Kölsch", "Kellebier", "Lager",
#   "Light", "Leichtbier", "Märzen", "Munich", "Pale",
#   "Pils", "Premium", "Rauchbier", "Schwarzbier", "Vienna",
#   "Wheat", "Doppelbock", "Eisbock", "Baltic", "Porter", "Weissbier",
#   "Weizenbock", "Ordinary",
#   "Bitter", "Best", "Strong", "British", "Golden",
#   "Ale", "Austalian", "Sparkling", "English", "IPA",
#   "Mild", "Brown", "Scottish", "Heavy", "Export",
#   "Irish", "Red", "Stout", "Extra", "Sweet",
#   "Oatmeal", "Tropical", "Foreign", "Old", "Wee",
#   "Barleywine", "Blonde", "California", "Common", "Imperial",
#   "Belgian", "Rye", "White", "Black", "Double",
#   "Wheatwine", "Berliner", "Flanders", "Weisse", "Oud",
#   "Bruin", "Lambic", "Gueuze", "Fruit", "Witbier",
#   "Bière", "de", "Garde", "Blond", "Saison",
#   "Trappist", "Single", "Dubbel", "Tripel", "Gose",
#   "Kentucky", "Lichtenhainer", "London", "Piwo", "Grodziskie",
#   "Pre-Prohibition", "Roggenbier", "Sahti", "Brett", "Beer",
#   "Mixed-Fermentation", "Sour", "Beer", "Wild", "Specialty",
#   "Spice", "Herb", "Vegetable", "Autumn", "Seasonal",
#   "Winter", "Alternative", "Grain", "Sugar", "Smoked",
#   "Classic", "Style", "Clone", "Mixed-Style", "Experimental"]
#
# beer_styles.each do |sty|
#   Style.create!(style: "#{sty}")
# end
