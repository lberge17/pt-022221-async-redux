class StarshipsController < ApplicationController
  before_action :set_starship, only: [:show, :update, :destroy]

  # GET /starships
  def index
    @starships = Starship.all

    render json: @starships
  end

  # GET /starships/1
  def show
    render json: @starship
  end

  # POST /starships
  def create
    @starship = Starship.create!(starship_params)
    render json: @starship, status: :created, location: @starship
  end

  # PATCH/PUT /starships/1
  def update
    @starship.update!(starship_params)
    render json: @starship
  end

  # DELETE /starships/1
  def destroy
    @starship.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_starship
      @starship = Starship.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def starship_params
      params.require(:starship).permit(:name, :cost, :hyperdrive_rating)
    end
end
