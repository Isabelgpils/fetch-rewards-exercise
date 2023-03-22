class UserForm < ApplicationRecord
    validates :name, presence: true
    validates :email, presence: true
    validates :password, presence: true
    validates :occupation, presence: true
    validates :state, presence: true
    default_scope {order( :state, :occupation) }
end
