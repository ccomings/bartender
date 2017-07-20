class Update < ActiveRecord::Migration[5.1]
  def change
    add_column :beer_styles, :beer_id, :integer
    add_column :beer_styles, :style_id, :integer
    add_column :styles, :style, :string
  end
end
