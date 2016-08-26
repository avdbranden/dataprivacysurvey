class SurveysController < ApplicationController
  def new
    @survey = Survey.new
  end

  def create
  end

  def show
  end

  private

  def survey_params
    params.require(:survey).permit(
      :locality, :number_of_employees, :sector, :data_processor,
      answers_attributes: [
        :survey_id, :question_number, :question_text, :answer_text,
        :compliant, :weighting_directive, :regulation_directive,
        :explanation_text]
        )
  end
end
