# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
user = User.first_or_create :email => 'me@manumatute.me', :password => 'testing1', :password_confirmation => 'testing1', :first_name => 'Manu', :last_name => 'Matute'
#user.confirm!
user.add_role :admin