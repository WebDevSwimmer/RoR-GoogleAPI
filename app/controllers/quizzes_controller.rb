class QuizzesController < ApplicationController
  def index
    @quizzes = Quiz.all
  end

  def new
    @question = Question.new
    @quiz = Quiz.new
    @flag = false
  end

  def edit
    @quiz = Quiz.find(params[:id])
    @question = Question.find(@quiz[:question_id])
    @category = ["Category1", "Category2", "Category3"]
    @level = ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"]
  end

  def show
    @quiz = Quiz.find(params[:id])
    @question = Question.find(@quiz[:question_id])
    @search_words = @quiz[:quiz] # Get 2 random words
    @category = ["Category1", "Category2", "Category3"]
    @level = ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"]
  end

  def create
    @question = Question.create(quiz_params.except(:questions))
    @quiz = Quiz.new
    if @question.valid?
      quiz_list = quiz_params[:questions].split(/\r\n+/)
      @flag = true
      quiz_list.each do |item|
        words = item.split(/\s*,\s*/)
        @quiz = Quiz.create(
          question: @question,
          quiz: words[0],
          answer1: words[1],
          answer2: words[2],
          answer3: words[3],
          answer4: words[4]
        )
        if @quiz.invalid?
          @question = Question.last
          @question.delete
          @flag = false
          break
        end
      end
    end
    render 'new'
  end

  def update
    @quiz = Quiz.find(params[:id])
    @question = Question.find(@quiz[:question_id])
    @category = ["Category1", "Category2", "Category3"]
    @level = ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"]
    @quiz.update(quiz_params)
    render 'edit'
  end

  def destroy
    @quiz = Quiz.find(params[:id])
    @quiz.destroy

    redirect_to quizzes_path  
  end

  private

  def quiz_params
    params.permit(:name, :category, :level, :source, :questions, :quiz, :answer1, :answer2, :answer3, :answer4, :optQues, :optAnswer1, :optAnswer2, :optAnswer3, :optAnswer4)
  end
end