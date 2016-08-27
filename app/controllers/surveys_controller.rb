class SurveysController < ApplicationController
  def new
    @survey = Survey.new
    @survey.answers.build # Required to enable nested attributes
  end

  def create
    @survey = Survey.new(survey_params)
    raise
  end

  def show
  end

  private

  def survey_params
    params.require(:survey).permit(
      :locality, :number_of_employees, :sector, :data_processor,
      answers_attributes: [
        :question_number, :question_text, :answer_text,
        :compliant, :weighting_directive, :weighting_regulation,
        :explanation_text
        ]
      )
  end
end
