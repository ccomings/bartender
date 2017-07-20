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

require 'test_helper'

class BeerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
