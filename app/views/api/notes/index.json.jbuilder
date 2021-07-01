@notes.each do |note|
  json.set! note.id do
    json.extract! note, :id, :content, :task_id, :updated_at
  end
end