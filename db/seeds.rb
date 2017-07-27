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

20.times do
  User.create!(
    username: Faker::Pokemon.unique.name,
    email: Faker::Internet.unique.email,
    password: '123456',
    image_url: "http://robohash.org/#{Faker::Pokemon.unique.name}",
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    about: Faker::Lorem.paragraph(2)
  )
end

5.times do
  Brewery.create!(
    name: Faker::GameOfThrones.city,
    country: Faker::Address.country,
    state: Faker::Address.state,
    city: Faker::Address.city,
    website: Faker::Internet.url('example.com'),
    image_url: "http://robohash.org/#{Faker::GameOfThrones.city}"
  )
end

Brewery.create!(name: 'Bump City Brewery', country: 'United States', state: 'California', city: 'Oakland', website: 'bumpcitybrewery.com', image_url: 'http://res.cloudinary.com/dkeart1zy/image/upload/v1500605762/Screen_Shot_2017-07-20_at_7.55.35_PM_e3kbmq.png')
Brewery.create!(name: 'Ale Industires', country: 'United States', state: 'California', city: 'Oakland', website: 'aleindustries.com', image_url: 'http://c66a301522d9e5ac11b8-9746a72e68ee7c58e3f37701b5e74d27.r31.cf1.rackcdn.com/731124-square.jpg')
Brewery.create!(name: 'Cleophus Quealy', country: 'United States', state: 'California', city: 'San Leandro', website: 'cleophusquealy.com', image_url: 'http://static1.squarespace.com/static/51c689cee4b04f9194673d16/t/5743a9384d088e1e7428e243/1499841031125/?format=1500w')
Brewery.create!(name: 'Stone Brewing', country: 'United States', state: 'California', city: 'San Diego', website: 'http://www.stonebrewing.com/', image_url: 'https://s3.amazonaws.com/brewerydbapi/brewery/709vEK/upload_6xRCQE-medium.png')

30.times do
  Beer.create!(
    name: Faker::Beer.unique.name,
    style: Faker::Beer.style,
    ibu: Faker::Beer.ibu,
    abv: Faker::Beer.alcohol,
    description: Faker::Lorem.sentence(3),
    brewery_id: Random.rand(1..9)

  )
end

# Beer.create!(name: 'Maple Bacon Porter', description: 'dark and bacony', brewery_id: 1, abv: "5.7%", ibu: "70", image_url: "")
# Beer.create!(name: 'Make America Wheat Beer Again', description: 'light and crisp', brewery_id: 1, abv: "4%", ibu: "40", image_url: "")
# Beer.create!(name: 'Double Pale Ale', description: 'boozy like it should be', brewery_id: 1, abv: "7.1%", ibu: "80", image_url: "")
# Beer.create!(name: 'IPA', description: 'standard go to ipa', brewery_id: 1, abv: "7%", ibu: "85", image_url: "")
# Beer.create!(name: 'No Way Gose', description: 'salty, limey, and light', brewery_id: 1, abv: "4%", ibu: "30", image_url: "")
# Beer.create!(name: 'East Bay IPA', description: 'Welcome to the sunny side of the Bay! We brew this West Coast IPA with a rich malt bill and hella hops. Pairs well with good times, close friends, and new adventures.', brewery_id: 2, abv: "7.75%", ibu: "", image_url: "")
# Beer.create!(name: 'Beast Oakland', description: 'Our innovative, collaborative spirit is highlighted by this homage to everything Oakland-made. Beast Oakland is crisp and refreshing. We partner with a grassroots clothing store located in the Laurel District of Oakland for this incredible bottle art. Beast Oakland plays a key role in supporting youth education in our growing community.', brewery_id: 2, abv: "4.5%", ibu: "", image_url: "")
# Beer.create!(name: 'Cherry Kush', description: 'Cherry Kush is a twist on our Golden State of Mind. This "California Tea Beer" is brewed without hops and with fresh, organic, tart cherry juice. We blend the cherry with our Golden State of Mind for a subtle sweetness.', brewery_id: 2, abv: "4.4%", ibu: "", image_url: "")
# Beer.create!(name: 'Golden State of Mind', description: 'Golden State of Mind is a unique creation. We have called it a "California Tea Beer" due to its construction using local California ingredients, from the oats, barley, and wheat to the fresh coriander, chamomile, and sweet orange peel. This gives Golden State of Mind its smooth, dry, bready malt character with earthy, spice notes and hints of citrus. A true taste of California in all its beauty, the Golden State of Mind is also a Gruit – meaning it is made without hops.', brewery_id: 2, abv: "4.4%", ibu: "", image_url: "")
# Beer.create!(name: 'GOLDEN STAVE', description: 'Arrogant Bastard Ale is an American strong ale. It is marketed by warning potential consumers that they are "not worthy" of such a beer. It is a popular beer among craft beer aficionados. Local designer/illustrator Thomas K. Matthews created the original gargoyle in 1996. He also drew the Arrogant Bastard Ale, Stone Ruination IPA and Stone Levitation Ale gargoyles, as well as barley and hops motifs.
# ', brewery_id: 3, abv: "", ibu: "", image_url: "")
# Beer.create!(name: 'MAPLE TRIPEL', description: 'Belgian-style ale barrel aged with maple syrup. Tasting notes: Maple, oak, vanilla, brown sugar', brewery_id: 3, abv: "", ibu: "", image_url: "")
# Beer.create!(name: 'SAISON', description: 'Bright farmhouse ale with tropical flavors. Tasting notes: Mango, pepper, light, quenching', brewery_id: 3, abv: "", ibu: "", image_url: "")
# Beer.create!(name: 'Arrogant Bastard Ale', description: 'Arrogant Bastard Ale is an American strong ale. It is marketed by warning potential consumers that they are "not worthy" of such a beer. It is a popular beer among craft beer aficionados. Local designer/illustrator Thomas K. Matthews created the original gargoyle in 1996. He also drew the Arrogant Bastard Ale, Stone Ruination IPA and Stone Levitation Ale gargoyles, as well as barley and hops motifs.',
#   brewery_id: 4, abv: "7.2", ibu: "", image_url: "https://s3.amazonaws.com/brewerydbapi/beer/qlwwem/upload_IZunS7-medium.png")
# Beer.create!(name: 'Ruination IPA', description: 'So called because of the "ruinous" effect on your palate! This massive hop monster has a wonderfully delicious and intensely bitter flavor on a refreshing malt base. One taste and you can easily see why we call this brew "a liquid poem to the glory of the hop!" Those who seek, crave and rejoice in beers with big, bold, bitter character will find true nirvana in Stone Ruination IPA!',
  # brewery_id: 4, abv: "8.2%", ibu: "100", image_url: "https://s3.amazonaws.com/brewerydbapi/beer/7cnuJq/upload_aC4vUP-medium.png")

20.times do
  Checkin.create!(
    user_id: Random.rand(1..21),
    beer_id: Random.rand(1..10),
    review: Faker::Lorem.sentence(3),
    rating: Random.rand(1..5),
    location: Faker::Address.street_name
  )
end

beer_styles = ["Ale", "Altbier", "Amber", "American", "Bock",
  "Cream", "Czech", "Dark", "Dunkles",
  "Dunkel", "Exportbier", "Festbier", "German", "Helles",
  "International", "Kölsch", "Kellebier", "Lager",
  "Light", "Leichtbier", "Märzen", "Munich", "Pale",
  "Pils", "Premium", "Rauchbier", "Schwarzbier", "Vienna",
  "Wheat", "Doppelbock", "Eisbock", "Baltic", "Porter", "Weissbier",
  "Weizenbock", "Ordinary",
  "Bitter", "Best", "Strong", "British", "Golden",
  "Ale", "Austalian", "Sparkling", "English", "IPA",
  "Mild", "Brown", "Scottish", "Heavy", "Export",
  "Irish", "Red", "Stout", "Extra", "Sweet",
  "Oatmeal", "Tropical", "Foreign", "Old", "Wee",
  "Barleywine", "Blonde", "California", "Common", "Imperial",
  "Belgian", "Rye", "White", "Black", "Double",
  "Wheatwine", "Berliner", "Flanders", "Weisse", "Oud",
  "Bruin", "Lambic", "Gueuze", "Fruit", "Witbier",
  "Bière", "de", "Garde", "Blond", "Saison",
  "Trappist", "Single", "Dubbel", "Tripel", "Gose",
  "Kentucky", "Lichtenhainer", "London", "Piwo", "Grodziskie",
  "Pre-Prohibition", "Roggenbier", "Sahti", "Brett", "Beer",
  "Mixed-Fermentation", "Sour", "Beer", "Wild", "Specialty",
  "Spice", "Herb", "Vegetable", "Autumn", "Seasonal",
  "Winter", "Alternative", "Grain", "Sugar", "Smoked",
  "Classic", "Style", "Clone", "Mixed-Style", "Experimental"]

beer_styles.each do |sty|
  Style.create!(style: "#{sty}")
end
