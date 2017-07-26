class Api::CheckinsController < ApplicationController
  def index
    @checkins = Checkin.all
      render :index
  end

  def create
    @checkin = Checkin.new(checkin_params)

    if @checkin.save
      render :index
    else
      render json: @checkin.errors.full_messages, status: 422
    end

  end

  private

  def checkin_params
    params.require(:checkin).permit(:beer_id, :user_id, :location, :rating, :review)
  end
end
