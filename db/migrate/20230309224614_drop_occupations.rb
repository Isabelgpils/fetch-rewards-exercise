class DropOccupations < ActiveRecord::Migration[7.0]
  def change
    drop_table :occupations
  end
end
