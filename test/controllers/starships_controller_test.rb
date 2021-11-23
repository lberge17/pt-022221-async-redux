require "test_helper"

class StarshipsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @starship = starships(:one)
  end

  test "should get index" do
    get starships_url, as: :json
    assert_response :success
  end

  test "should create starship" do
    assert_difference('Starship.count') do
      post starships_url, params: { starship: { cost: @starship.cost, hyperdrive_rating: @starship.hyperdrive_rating, name: @starship.name } }, as: :json
    end

    assert_response 201
  end

  test "should show starship" do
    get starship_url(@starship), as: :json
    assert_response :success
  end

  test "should update starship" do
    patch starship_url(@starship), params: { starship: { cost: @starship.cost, hyperdrive_rating: @starship.hyperdrive_rating, name: @starship.name } }, as: :json
    assert_response 200
  end

  test "should destroy starship" do
    assert_difference('Starship.count', -1) do
      delete starship_url(@starship), as: :json
    end

    assert_response 204
  end
end
