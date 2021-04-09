@tasks.each do |task|
  json.set! task.id do
    json.extract! task, :id, :user_id, :list_id, :title, :due_date, :priority, :complete, :estimate
  end
end