class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.references :project, index: true
      t.string :name
      t.text :description
      t.integer :effort_in_mins
      t.integer :impact

      t.timestamps null: false
    end
    add_foreign_key :tasks, :projects
  end
end
