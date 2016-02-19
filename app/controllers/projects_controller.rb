class ProjectsController < ApplicationController
  before_filter :authenticate_user!

  def index
    @projects = current_user.projects.includes(:tasks)
    respond_to do |format|
      format.json { render json: @projects.to_json(include: :tasks) }
    end

  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def delete
  end
end
