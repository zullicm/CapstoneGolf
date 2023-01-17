class InstructorSerializer < ActiveModel::Serializer
  attributes :id, :name, :about, :difficulty, :price, :image_1, :image_2
end
