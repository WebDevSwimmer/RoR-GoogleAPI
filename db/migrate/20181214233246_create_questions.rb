class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :name
      t.string :category
      t.string :level
      t.string :source

      t.timestamps
    end
  end
end
