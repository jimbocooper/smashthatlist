require "administrate/base_dashboard"

class TaskDashboard < Administrate::BaseDashboard
  ATTRIBUTE_TYPES = {
      project: Field::BelongsTo,
      name: Field::String,
      description: Field::String,
      effort_in_mins: Field::Number,
      impact: Field::Number,
      created_at: Field::DateTime,
      updated_at: Field::DateTime
  }

  COLLECTION_ATTRIBUTES = ATTRIBUTE_TYPES.keys
  SHOW_PAGE_ATTRIBUTES = ATTRIBUTE_TYPES.keys
  FORM_ATTRIBUTES = ATTRIBUTE_TYPES.keys - [:created_at, :updated_at]

  def display_resource(task)
    task.name
  end
end