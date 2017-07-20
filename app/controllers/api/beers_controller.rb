class Api::BeersController < ApplicationController
  before_action :require_logged_in

  def index
    @beers = Beer.all
    render :index
  end

  def create
    @beer = Beer.new(beer_params)

    if @beer.save
      render :show
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end

  def show
    @beer = Beer.find(params[:id])
  end

  def update
    @beer = Beer.find(params[:id])

    if @beer.update(beer_params)
      render :show
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end

  def destroy
    @beer = Beer.find(params[:id])

    if @beer.destroy
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private
  def beer_params
    params.require(:beer).permit(
      :name, :description, :abv, :ibu, :image_url
    )
  end
end
