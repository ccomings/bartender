class UpdateCheckinTable < ActiveRecord::Migration[5.1]
  def change
    add_column :checkins, :location, :string
    remove_column :checkins, :brewery_id
  end
end
