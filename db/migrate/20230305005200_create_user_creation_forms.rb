class CreateUserCreationForms < ActiveRecord::Migration[7.0]
  def change
    create_table :user_creation_forms do |t|
      t.string :full_name
      t.string :email
      t.string :password
      t.string :occupation
      t.string :state

      t.timestamps
    end
  end
end
