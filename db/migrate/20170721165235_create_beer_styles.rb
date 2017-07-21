class CreateBeerStyles < ActiveRecord::Migration[5.1]
  def change
    create_table :beer_styles do |t|
      t.integer :beer_id, null: false
      t.integer :style_id, null: false
      t.timestamps
    end
  end
end
