**README.md**

<img src="./app/assets/images/logo_w_background.png" style="border: 1px solid blue"/>


**An app that remembers the little things for you.**

Try the <a href="https://todo-placeholder.herokuapp.com/#/list/all">live demo!</a>

# Introduction
Turn Off The Stove is a Rails-React-Redux clone of Remember the Milk, a to-do list website. Users can create tasks, organize them into lists, and Turn Off The Stove will keep track of which tasks are coming up.
<img src="./app/assets/images/overview.png" style="border: 1px solid blue"/>




# Technologies Used
* Ruby / Rails
* PostgreSQL
* React.js
* Redux
* AJAX
* JBuilder
* JavaScript
* Webpack
* Regex
* HTML5 / CSS3

# Main Features

### Tasks Query 
Tasks are fetched depending on which list the user is viewing. The Today, Tomorrow, and This Week lists are built-in for each user. All queries only fetch items belonging to the current user to ensure separation of users. 


<img src="./app/assets/images/tasks_query_snapshot.png" style="border: 1px solid blue"/>
<br/>

The app reads the `:listId` wildcard from the URL to construct its query. A user-generated list is represented by its numeric `id` while the standard built-in lists are identified by a keyword. 

`todo-placeholder.herokuapp.com/#/list/3`

`todo-placeholder.herokuapp.com/#/list/this-week`


The React component constructs query parameters and sends it to the Rails controller in an AJAX request. For the built-in lists (e.g. This Week), the controller fires a different query structure based on a `custom` parameter. The `complete` parameter is also included to filter between complete and incomplete tasks. Below is the Rails code that converts the payload from the AJAX request into a format recognizeable by the ActiveRecord API:
```ruby
def custom_params
  #params from the body of the AJAX request
  type = params[:task][:custom]
  complete = params[:task][:complete]

  case type
  when 'inbox'
    # finding the uncategorized tasks
    conditions = [
      'list_id IS NULL AND user_id=? AND complete=?',
      current_user.id,
      complete
    ]
  when 'today'
    conditions = [
      'due_date=? AND user_id=? AND complete=?',
      DateTime.current.to_date,
      current_user.id,
      complete
    ]
  when 'tomorrow'
    conditions = [
      'due_date=? AND user_id=? AND complete=?',
      DateTime.current.advance(days: 1).to_date,
      current_user.id,
      complete
    ]
  when 'this-week'
    #finding tasks due in the coming week
    conditions = [
      'due_date BETWEEN ? and ? AND user_id=? AND complete=?',
      DateTime.current.to_date,
      DateTime.current.advance(weeks: 1).to_date,
      current_user.id,
      complete
    ]
  else
    #if type does not match the above, it is not trustworthy, delete it.
    conditions = [];
  end

  #create the search params using the conditions created by the case-when block above. This will feed into the Task.where() query.
  ActiveRecord::Base.send(:sanitize_sql_array, conditions)
  end
  ```


  ### Task Creation
  Users are able to create tasks and attach properties on them such as due dates and time estimates. If no properties are specified at the time, default values are used:
  <img src="./app/assets/images/default_output.png" style="border: 1px solid blue" />
  <br />

  At the time of creation, users can input special modifier characters to signal a property to add. Below would be the notation to set a due date of April 24, with an estimate of 10 minutes, at priority 2.
  <img src="./app/assets/images/input_1.png" style="border: 1px solid blue" />
  <br />


  The user can just use the buttons below to insert the modifier characters, and even some preset values:
  <img src="./app/assets/images/input_2.png" style="border: 1px solid blue" />
  <br />


  which is especially handy for dates and lists.
  <img src="./app/assets/images/input_3.png" style="border: 1px solid blue" />
  <br />


  Ta-da!
  <img src="./app/assets/images/output.png" style="border: 1px solid blue" />


Regex pattern matching is utilized to parse the modifier characters and translate them into a format recognizable by the Rails controller's strong params:
``` javascript
export const parseInput = (input, lists) => {
  let titleMatch = input.match(/((?:\w|\s)+)(?:\s\W)?/)
  let title = titleMatch[1]
  let task = {title};

  let dueDateMatch = input.match(/\^(.*)/);
  if (dueDateMatch) {
    let dueDate = parseDate(dueDateMatch[1])
    task.dueDate = dueDate;
  };

  let listMatch = input.match(/#\((.+)\)/);
  if (listMatch) {
    let listTitle = listMatch[1];
    let listObj = lists.find(list => list.title === listTitle);
    let listId = listObj.id;
    task.listId = listId; 
  }

  let priorityMatch = input.match(/!([1-4])/);
  if (priorityMatch) {
    let priority = priorityMatch[1];
    task.priority = priority;
  }

  let estimateMatch = input.match(/=(\d+)min/);
  if (estimateMatch) {
    let estimate = estimateMatch[1];
    task.estimate = estimate;
  }

  //output is an object with up to 5 key-value pairs depending on which regex matches are found
  return task;
}
```

# Future Plans
* Be able to search for tasks based on title or other properties
* Allow for subtasks and notes to be added to each task
* Display summaries for each list (# completed vs incompleted, overdue, etc.)
* Create recurring tasks


---
### Attributions

Vector art in the logo was created by <a href="https://www.freepik.com/vectors/water">brgfx (www.freepik.com)</a>