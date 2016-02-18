require "administrate/base_dashboard"

class UserDashboard < Administrate::BaseDashboard
  ATTRIBUTE_TYPES = {
      email: Field::Email,
      first_name: Field::String,
      last_name: Field::String,
      created_at: Field::DateTime,
      updated_at: Field::DateTime
  }

  COLLECTION_ATTRIBUTES = ATTRIBUTE_TYPES.keys
  SHOW_PAGE_ATTRIBUTES = ATTRIBUTE_TYPES.keys
  FORM_ATTRIBUTES = ATTRIBUTE_TYPES.keys - [:created_at, :updated_at]

  def display_resource(user)
    "#{user.first_name} #{user.last_name} (#{user.email})"
  end
end