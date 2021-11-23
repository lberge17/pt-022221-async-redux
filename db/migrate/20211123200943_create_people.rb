class CreatePeople < ActiveRecord::Migration[6.1]
  def change
    create_table :people do |t|
      t.string :name
      t.string :birthyear
      t.belongs_to :planet

      t.timestamps
    end
  end
end
