class MoviesController < ApplicationController
    wrap_parameters format: {}
rescue_from ActiveRecord::RecordInvalid, with: :render_error_message_if_not_invalid



    # show all movies
    def index
        render json: Movie.all, status: :ok
    end
    # show single movie
    def show
        movie = Movie.find(params[:id])
        render json: movie, status: :ok
    end

    # create new movie
    def create
        movie = Movie.create!(movie_params)
        render json: movie, status: :created
    end

    #update a movie

    def update
        movie = Movie.find(params[:id])
        movie.update(movie_params)

        render json: movie, status: :created
    end

    #delete a moview
    def destroy
        movie = Movie.destroy(params[:id])
        render json: {}, status: :ok
    end

    #private methods

    private

    def movie_params
        params.permit(:title, :year, :length, :description, :poster_url, :category, :discount, :female_director, :director)
    end

    def render_error_message_if_not_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
