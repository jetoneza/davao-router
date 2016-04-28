class CreateZodes < ActiveRecord::Migration
  def change
    create_table :zodes do |t|
      t.string :name
      t.decimal :longitude
      t.decimal :latitude
      t.timestamps null: false
    end
  end
end
