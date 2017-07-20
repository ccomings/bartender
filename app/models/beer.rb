# == Schema Information
#
# Table name: beers
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  description   :string           not null
#  brewery_id    :integer          not null
#  abv           :string
#  ibu           :string
#  beer_style_id :integer          not null
#  image_url     :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Beer < ApplicationRecord
  validates :name, :description, :brewery_id, :beer_style_id, presence: true
  validates :name, uniqueness: true

  belongs_to :brewery
  belongs_to :beer_style

end
