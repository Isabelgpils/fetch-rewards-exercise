class DropStates < ActiveRecord::Migration[7.0]
  def change
    drop_table :states
  end
end
