```js
{
  currentUser: {
    id: 1,
    username: "chrissay"
  },

  users: {
    "user1": {
      id: "user1",
      f_name: "Chris",
      l_name: "Comings",
      image_url: "string",
      about: "text"
    }
  }

  beers: {
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

  breweries: {
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

  checkins: {
    "checkin1": {
      id: "checkin1",
      user_id: "user_id1",
      brewery_id: "brewery_id1",
      beer_id: "beer1",
      image_url: "string"
    }
  }

  ratings_reviews: {
    "rating_review1": {
      id: "rating_review1",
      beer_id: "beer1",
      checkin_id: "checkin1"
      rating: "integer",
      review: "text"
    }
  }
}
```
