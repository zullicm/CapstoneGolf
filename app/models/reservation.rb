class Reservation < ApplicationRecord
  belongs_to :course_id
  belongs_to :instructor_id
  belongs_to :user_id
end
