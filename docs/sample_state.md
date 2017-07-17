```js
{
  currentUser: {
    id: 1,
    username: "chrissay"
  },

  users: {
    byId: {
        "user1": {
          id: "user1",
          f_name: "Chris",
          l_name: "Comings",
          image_url: "string",
          about: "text"
          checkins: ["checkin1", "checkin2"]
        }
    }
    allIds: ["user1", "user2"]
  }

  beers: {
    byId: {
      "beer1": {
        id: "beer1",
        name: "Maple Bacon Porter",
        description: "Dark smooth beer made with real maple syrup and bacon",
        brewery_id: "brewery1",
        abv: "7%",
        ibu: "50",
        style: "Porter",
        image_url: "string"
      }
    }
    allIds: ["beer1", "beer2"]
  }

  breweries: {
    byId: {
      "brewery1": {
        id: "brewery1",
        name: "Bump City",
        type: "beer and cider",
        country: "United States",
        city: "Oakland",
        state: "California",
        website: "bumpcitybrewing.com",
        image_url: "string",
        beers: ["beer1", "beer3", "beer80"],
      }
    }
    allIds: ["brewery1", "brewery2"]
  }
}
```
