class UpdateBeers < ActiveRecord::Migration[5.1]
  def change
    remove_column :beers, :beer_style_id
  end
end
