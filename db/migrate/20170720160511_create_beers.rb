class CreateBeers < ActiveRecord::Migration[5.1]

  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.integer :brewery_id, null: false
      t.string :abv
      t.string :ibu
      t.string :image_url
      t.timestamps
    end
  end
end
