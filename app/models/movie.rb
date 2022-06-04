class Movie < ApplicationRecord
    validates :title, presence: true
    validates :year, presence: true
    validates :length, presence: true
    validates :description, presence: true
    validates :poster_url, presence: true
end
