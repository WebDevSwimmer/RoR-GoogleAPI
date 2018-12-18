class CreateQuizzes < ActiveRecord::Migration[5.2]
  def change
    create_table :quizzes do |t|
      t.string :quiz
      t.string :answer1
      t.string :answer2
      t.string :answer3
      t.string :answer4
      t.string :optQues
      t.string :optAnswer1
      t.string :optAnswer2
      t.string :optAnswer3
      t.string :optAnswer4
      t.references :question, foreign_key: true

      t.timestamps
    end
  end
end
