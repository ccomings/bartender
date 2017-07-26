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

class Checkin < ApplicationRecord
  validates :user_id, :beer_id, :rating, presence: true
  validates :rating, inclusion: { in: [1,2,3,4,5], message: "not valid" }

  belongs_to :user
  belongs_to :beer
  belongs_to :brewery
end
