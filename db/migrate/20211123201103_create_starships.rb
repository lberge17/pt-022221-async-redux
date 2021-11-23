class CreateStarships < ActiveRecord::Migration[6.1]
  def change
    create_table :starships do |t|
      t.string :name
      t.string :cost
      t.string :hyperdrive_rating

      t.timestamps
    end
  end
end
