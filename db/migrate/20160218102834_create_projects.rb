class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.references :user, index: true
      t.string :colour

      t.timestamps null: false
    end
    add_foreign_key :home, :users
  end
end
