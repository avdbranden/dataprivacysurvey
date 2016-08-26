# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160826124245) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.integer  "survey_id"
    t.string   "question_number"
    t.text     "question_text"
    t.text     "answer_text"
    t.boolean  "compliant"
    t.float    "weighting_directive"
    t.float    "weighting_regulation"
    t.text     "explanation_text"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  add_index "answers", ["survey_id"], name: "index_answers_on_survey_id", using: :btree

  create_table "surveys", force: :cascade do |t|
    t.string   "locality"
    t.integer  "number_of_employees"
    t.string   "sector"
    t.boolean  "data_processor"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  add_foreign_key "answers", "surveys"
end
