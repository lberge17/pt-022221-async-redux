class CreatePlanets < ActiveRecord::Migration[6.1]
  def change
    create_table :planets do |t|
      t.string :name
      t.string :climate
      t.string :terrain

      t.timestamps
    end
  end
end
