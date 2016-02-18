require "administrate/base_dashboard"

class ProjectDashboard < Administrate::BaseDashboard
  ATTRIBUTE_TYPES = {
      user: Field::BelongsTo,
      name: Field::String,
      colour: Field::String,
      created_at: Field::DateTime,
      updated_at: Field::DateTime
  }

  COLLECTION_ATTRIBUTES = ATTRIBUTE_TYPES.keys
  SHOW_PAGE_ATTRIBUTES = ATTRIBUTE_TYPES.keys
  FORM_ATTRIBUTES = ATTRIBUTE_TYPES.keys - [:created_at, :updated_at]

  def display_resource(project)
    project.name
  end
end