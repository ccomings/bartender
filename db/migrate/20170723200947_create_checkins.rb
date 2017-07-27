class CreateCheckins < ActiveRecord::Migration[5.1]
  def change
    create_table :checkins do |t|
      t.integer :user_id, null: false
      t.integer :beer_id, null: false
      t.integer :rating, null: false
      t.string :review
      t.string :location
      t.timestamps
    end
  end
end
