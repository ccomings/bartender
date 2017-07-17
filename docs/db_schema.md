# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
location        | string    |
f_name          | string    | not null
l_name          | string    | not null
about           | text      |
image_url       | string    |

## beers
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, unique
description     | text      | not null
brewery_id      | integer   | not null, foreign key (references breweries)
abv             | float     | not null
ibu             | float     | not null
style           | string    | not null
image_url       | string    |

## breweries
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, unique
type        | string    | not null
country     | string    | not null
city        | string    | not null
state       | string    | not null
website     | string    |
image_url   | string    |

## checkins
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
brewery_id  | integer   | foreign key (references breweries), indexed
beer_id     | integer   | not null, foreign key (references beers), indexed
rating_id   | integer   | not null, foreign key (references beers), indexed
image_url   | string    |

## ratings/reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
beer_id     | integer   | not null, foreign key (references beers), indexed
rating      | integer   | not null
review      | text      |
