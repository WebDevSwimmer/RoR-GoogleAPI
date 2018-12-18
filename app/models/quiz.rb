class Quiz < ApplicationRecord
  before_validation :strip_title

  def strip_title
    self.quiz = quiz.strip
    # self.answer1 = answer1.strip
    # self.answer2 = answer2.strip
    # self.answer3 = answer3.strip
    # self.answer4 = answer4.strip
  end

  belongs_to :question
  validates :quiz, presence: true, length: { maximum: 1024, message: "(max 1024 characters) and this quiz won't be save." }
  validates :answer1, presence: {message: " should exist and this question won't be save."}
end
