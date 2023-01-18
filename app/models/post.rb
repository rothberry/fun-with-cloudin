class Post < ApplicationRecord
  validates :title, :content, :image_url, presence: true
end
