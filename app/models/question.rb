class Question < ApplicationRecord
	before_validation :strip_title

  def strip_title
    self.name = name.strip
    self.category = category.strip
    self.level = level.strip
    self.source = source.strip
  end
  
	has_many :quizzes, dependent: :destroy
	validates_associated :quizzes
	validates :name, presence: true
	validates :category, presence: true
	validates :level, presence: true
	validates :source, presence: true
end
