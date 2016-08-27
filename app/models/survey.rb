class Survey < ActiveRecord::Base
  SIZES = ["Below 5", "Between 5 and 20", "Between 20 and 50", "Between 50 and 100",
    "Between 100 and 200", "Above 200"]
  SECTORS = ["Health", "Finance", "Consumer goods", "Insurance", "Fashion",
    "Law", "Construction", "Industrials", "Non-profit", "Marketing",
    "Analytics", "Bio & Food"].sort_by { |word| word.downcase }

  has_many :answers
  accepts_nested_attributes_for :answers
end
