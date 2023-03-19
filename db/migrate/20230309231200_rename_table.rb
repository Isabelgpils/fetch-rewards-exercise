class RenameTable < ActiveRecord::Migration[7.0]
  def change
    rename_table :user_creation_forms, :user_forms
  end
end
