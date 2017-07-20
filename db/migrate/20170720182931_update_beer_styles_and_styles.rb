class UpdateBeerStylesAndStyles < ActiveRecord::Migration[5.1]
  def change
    remove_column :beer_styles, :beer_id
    add_column :beer_styles, :beer_id, :integer, null: false
    remove_column :beer_styles, :style_id
    add_column :beer_styles, :style_id, :integer, null: false

    remove_column :styles, :style
    add_column :styles, :style, :string, null: false
  end
end
