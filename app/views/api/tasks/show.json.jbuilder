json.extract! @task, :id, :user_id, :list_id, :title, :priority, :complete, :estimate
json.due_date @task.due_date.to_date