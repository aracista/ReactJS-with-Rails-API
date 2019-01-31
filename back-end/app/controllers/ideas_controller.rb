class IdeasController < ApplicationController
	def index
		ideas = Idea.order(id: :desc)
		render json: ideas
	end

	def create
		idea = Idea.create(resource_params)
		render json: idea
	end

	private


	def resource_params
		params.require(:idea).permit(:title, :content)
	end
end
