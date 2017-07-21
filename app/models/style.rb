# == Schema Information
#
# Table name: styles
#
#  id         :integer          not null, primary key
#  style      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Style < ApplicationRecord
  validates :style, presence: true
  has_many :beer_styles
end
