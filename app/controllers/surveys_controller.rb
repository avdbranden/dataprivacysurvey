class SurveysController < ApplicationController
  def new # GET surveys/new
    @survey = Survey.new
    @survey.answers.build # Required to enable nested attributes
  end

  def create # POST surveys
    @survey = Survey.new(survey_params)
    if @survey.save
      redirect_to survey_path(@survey)
    else
      render "survey/show" # <-- Check whether validations errot
    end
  end

  def show # GET surveys/:id
    @survey = Survey.find(params[:id])
    @score_directive = compute_scores[:score_directive]
    @score_regulation = compute_scores[:score_regulation]
  end

  private

  def compute_scores
    scores = { score_directive: 0, score_regulation: 0 }
    @survey.answers.each do |answer|
      if answer.compliant == true
        scores[:score_directive] += answer.weighting_directive
        scores[:score_regulation] += answer.weighting_regulation
      end
    end
    return scores
  end

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
