class Api::NotesController < ApplicationController
  def index
    # fetches all notes that belong to a given task
    @notes = Note.where(task_id: note_params[:task_id])

    render :index
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = Note.find_by(id: params[:id])
    if @note
      if @note.update(note_params)
        render :show
      else
        render json: @note.errors.full_messages, status: 422
      end
    else
      render json: ["Note cannot be found"], status: 404
    end
  end

  def destroy
    @note = Note.find_by(id: params[:id])
    if @note
      @note.destroy
      render :show
    else
      render json: ["Note cannot be found"], status: 404
    end
  end

  private
  def note_params
    params.require(:note).permit(:content, :task_id)
  end
end
