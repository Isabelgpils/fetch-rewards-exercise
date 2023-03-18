class ChangUserCreationFormTable < ActiveRecord::Migration[7.0]
  def change
    change_column_null :user_creation_forms, :full_name, false
    change_column_null :user_creation_forms, :email, false
    change_column_null :user_creation_forms, :password, false    
    change_column_null :user_creation_forms, :occupation, false
    change_column_null :user_creation_forms, :state, false
  end
end
