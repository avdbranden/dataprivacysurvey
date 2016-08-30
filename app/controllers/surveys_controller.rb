class SurveysController < ApplicationController
  def new     # GET surveys/new
    @survey = Survey.new
    @survey.answers.build # Required to enable nested attributes
  end

  def create  # POST surveys
    @survey = Survey.new(survey_params)
    if @survey.save
      redirect_to survey_path(@survey)
    else
      render "survey/show" # <-- TODO: Check whether validations errors
    end
  end

  def show    # GET surveys/:id
    @survey = Survey.find(params[:id])
    score_directive = compute_scores[:score_directive]
    score_regulation = compute_scores[:score_regulation]
    total_directive = compute_totals[:total_directive]
    total_regulation = compute_totals[:total_regulation]
    @unanswered_count = compute_unanswered
    @compliance_directive_percentage = compute_percentage(score_directive, total_directive)
    @compliance_regulation_percentage = compute_percentage(score_regulation, total_regulation)
  end

  private

  def compute_scores
    scores = { score_directive: 0, score_regulation: 0 }
    @survey.answers.where(compliant: true).each do |answer|
      scores[:score_directive] += answer.weighting_directive
      scores[:score_regulation] += answer.weighting_regulation
    end
    scores
  end

  def compute_totals
    totals = { total_directive: 0, total_regulation: 0}
    @survey.answers.where(requiredness: "required").each do |answer|
      totals[:total_directive] += answer.weighting_directive
      totals[:total_regulation] += answer.weighting_regulation
    end
    totals
  end

  def compute_percentage(numerator, denumerator)
    return 0 if denumerator == 0 || denumerator == nil
    (numerator / denumerator) * 100
  end

  def compute_unanswered
    @survey.answers.where(compliant: nil, requiredness: "required").count
  end

  def survey_params
    params.require(:survey).permit(
      :locality, :number_of_employees, :sector, :data_processor,
      answers_attributes: [
        :question_number, :question_text, :compliant,
        :weighting_directive, :weighting_regulation, :answer_text,
        :good_answer_text, :bad_answer_text, :explanation_text,
        :requiredness
        ]
      )
  end
end
