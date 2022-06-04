class Movie < ApplicationRecord
    CATEGORIES = ['Comedy', 'Drama', 'Animation', 'Mystery', 'Horror', 'Fantasy', 'Action', 'Documentary', 'Science Fiction']

    validates :title, presence: true
    validates :year, presence: true
    validates :length, presence: true
    validates :description, presence: true
    validates :poster_url, presence: true

    validates :category, inclusion: {
    in: CATEGORIES,
    message: "must be one of: #{CATEGORIES.join(', ')}"
  }
end
