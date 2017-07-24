# == Schema Information
#
# Table name: beers
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :string           not null
#  brewery_id  :integer          not null
#  abv         :string
#  ibu         :string
#  image_url   :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Beer < ApplicationRecord
  validates :name, :description, :brewery_id, presence: true
  validates :name, uniqueness: true

  belongs_to :brewery
  has_many :beer_styles
  has_many :styles,
    through: :beer_styles
  has_many :checkins

end
