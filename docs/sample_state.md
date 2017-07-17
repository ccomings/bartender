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
        ratings_reviews: ["rating_review1", "rating_review2"]
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
        address: "123 Beer Ln"
        city: "Oakland",
        state: "California",
        website: "bumpcitybrewing.com",
        image_url: "string",
        beers: ["beer1", "beer3", "beer80"],
      }
    }
    allIds: ["brewery1", "brewery2"]
  }

  checkins: {
    byId: {
      "checkin1": {
        id: "checkin1",
        user_id: "user_id1",
        brewery_id: "brewery_id1",
        beer_id: "beer1",
        rating_id: "rating_id1"
        image_url: "string"
      }
    }
    allIds: ["checkin1", "checkin2"]
  }

  ratings_reviews: {
    byId: {
      "rating_review1": {
        id: "rating_review1",
        beer_id: "beer1",
        rating: "integer",
        review: "text"
      }
    }
    allIds: ["rating_review1", "rating_review2"]
  }
}
```
