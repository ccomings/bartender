# == Schema Information
#
# Table name: styles
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  style      :string           not null
#

class Style < ApplicationRecord
end
