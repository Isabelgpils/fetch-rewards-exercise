class ChangeColumnName < ActiveRecord::Migration[7.0]
  def change
    rename_column :user_forms, :full_name, :fullname

  end
end
