class CreateCheckins < ActiveRecord::Migration[5.1]
  def change
    create_table :checkins do |t|
      t.integer :user_id, null: false
      t.integer :brewery_id
      t.integer :beer_id, null: false
      t.string :review
      t.integer :rating, null: false
      t.timestamps
    end
  end
end
