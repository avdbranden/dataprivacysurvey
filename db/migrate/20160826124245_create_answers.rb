class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.references :survey, index: true, foreign_key: true
      t.string :question_number
      t.text :question_text
      t.text :answer_text
      t.boolean :compliant
      t.float :weighting_directive
      t.float :weighting_regulation
      t.text :explanation_text

      t.timestamps null: false
    end
  end
end
