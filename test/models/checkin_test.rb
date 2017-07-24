# == Schema Information
#
# Table name: checkins
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  brewery_id :integer
#  beer_id    :integer          not null
#  review     :string
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class CheckinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
