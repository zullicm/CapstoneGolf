class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :type, :player_num, :time
  has_one :course_id
  has_one :instructor_id
  has_one :user_id
end
