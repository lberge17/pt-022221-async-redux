class PeopleController < ApplicationController
  before_action :set_person, only: [:show, :update, :destroy]

  # GET /people
  def index
    @people = Person.all

    render json: @people, include: :planet
  end

  # GET /people/1
  def show
    render json: @person, include: :planet
  end

  # POST /people
  def create
    @person = Person.create!(person_params)

    render json: @person, status: :created, location: @person
  end

  # PATCH/PUT /people/1
  def update
    @person.update!(person_params)
    render json: @person
  end

  # DELETE /people/1
  def destroy
    @person.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_person
      @person = Person.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def person_params
      params.require(:person).permit(:name, :birthyear, :planet_id)
    end
end
