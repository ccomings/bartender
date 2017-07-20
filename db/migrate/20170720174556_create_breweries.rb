class CreateBreweries < ActiveRecord::Migration[5.1]
  def change
    create_table :breweries do |t|
      t.string :name, null: false
      t.string :country, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :website
      t.string :image_url
      t.timestamps
    end
  end
end
