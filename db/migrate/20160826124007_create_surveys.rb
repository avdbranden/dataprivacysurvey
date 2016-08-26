class CreateSurveys < ActiveRecord::Migration
  def change
    create_table :surveys do |t|
      t.string :locality
      t.integer :number_of_employees
      t.string :sector
      t.boolean :data_processor

      t.timestamps null: false
    end
  end
end
