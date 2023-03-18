class Api::V1::UserFormsController < ApplicationController

  def index
    @user_form = UserForm.all
    render json: user_forms
  end
  
  def show
    render json: @user_form
  end
 
  def create
    user_form = UserForm.create!(user_form_params)
    
    if user_form
      render json: user_form
    
    else
      render json: user_form.errors
    end
  end
  
  def update
    if @user_form.update(user_form_params)  
      render json: @user_form     
    else
      render json: @user_form.errors
    end 
  end 

  def destroy
    @user_form.destroy
    render json: { message: 'User Form deleted successfully' }
  end

  private

  def user_form_params
    params.permit(:name, :email, :password, :occupation, :state)
  end
end

