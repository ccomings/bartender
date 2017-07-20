class Api::BreweriesController < ApplicationController
  def show
    @brewery = Brewery.find(params[:id])
  end

  def index
    @breweries = Brewery.all
    render :index
  end

  private

  def brewery_params
    params.require(:user).permit(:name,
      :country, :city, :state, :website,
      :image_url)
  end
end
