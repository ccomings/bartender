# Beertendr

[Beertendr][live-link] is a full stack web application inspired by Untapped. The goal of our site is to connect users with breweries, beers, and other users around the world. The app provides functionality to add beers to a brewery, 'checkin' with a beer, and fully navigate between beers, breweries, and checkins. Beertendr utilizes Ruby on Rails for the backend, PostgreSQL database, and React/Redux on the front end.

## Features

### Checkins
No need to navigate to a beer show page to checkin! Create a checkin from any screen with the check-in button. This feature opens a `CreateCheckin` modal component with several subcomponents. This feature searches the database for a beer name with an API call and actively updates the `SearchIndex` with `SearchIndexItems`

![photo-1][photo-1]

### Breweries, Beers, and Checkins
Seamlessly navigate through breweries, beers, and checkins. `BreweriesIndex`, `BeersIndex`, and `CheckinsIndex` each have subcomponents that are responsible for seamless navigation through out the website.

Selectors were designed for each and their respective subcomponents to optimize Ajax calls to the database and what is loaded into the store.

![photo-2][photo-2]

## Future Features

* Editing Profiles
* Likes of Checkins
* Friends/follows
* Interfacing with the BreweryDB.com api for complete and robust database








[live-link]: www.beertendr.co
[photo-1]: http://res.cloudinary.com/dkeart1zy/image/upload/v1501280073/Screen_Shot_2017-07-28_at_3.09.22_PM_dueap0.png

[photo-2]: http://res.cloudinary.com/dkeart1zy/image/upload/v1501280127/Screen_Shot_2017-07-28_at_3.09.12_PM_aqvh6l.png
