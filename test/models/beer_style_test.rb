# == Schema Information
#
# Table name: beer_styles
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  beer_id    :integer          not null
#  style_id   :integer          not null
#

require 'test_helper'

class BeerStyleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
