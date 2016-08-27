class Answer < ActiveRecord::Base
  belongs_to :survey, required: false
end
