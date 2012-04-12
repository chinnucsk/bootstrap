require_relative '../spec_helper'

feature "Person", type: :request do
  scenario "Creating a person" do
    visit '/'
    click_button 'Create Person'
    fill_in 'title', with: 'Yehuda Katz'
    fill_in 'description', with: 'Ember.js dude'
    click_button 'Create'

    within '#my_people' do
      page.should have_content 'Yehuda Katz'
    end
  end
end
