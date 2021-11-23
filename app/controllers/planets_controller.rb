class PlanetsController < ApplicationController
  before_action :set_planet, only: [:show, :update, :destroy]

  # GET /planets
  def index
    @planets = Planet.all

    render json: @planets
  end

  # GET /planets/1
  def show
    render json: @planet
  end

  # POST /planets
  def create
    @planet = Planet.create!(planet_params)
    render json: @planet, status: :created, location: @planet
  end

  # PATCH/PUT /planets/1
  def update
    @planet.update!(planet_params)
    render json: @planet
  end

  # DELETE /planets/1
  def destroy
    @planet.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_planet
      @planet = Planet.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def planet_params
      params.require(:planet).permit(:name, :climate, :terrain)
    end
end
