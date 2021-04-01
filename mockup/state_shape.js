{
  entities: {
    users: {
      1: {
        id: 1,
        username: "randall818",
        email: "randall818@gmail.me"
      },
      2: {
        id: 2,
        username: "turingBot1912",
        email: "turingBot1912@gmail.me"
      } 
    },
    tasks: {
      1: {
        id: 1,
        userId: 1,
        listId: 1,
        title: "Mow the lawn",
        due_date: "2021-04-16T03:17:17.149Z",
        priority: 4,
        completed: false,
        estimate: null
      },
      2: {
        id: 2,
        userId: 1,
        listId: 2,
        title: "Take the red pill"
        due_date: "2021-04-17T03:17:17.149Z",
        priority: 4,
        completed: false,
        estimate: nuill
      },
      3: {
        id: 3,
        userId: 1,
        listId: 2,
        title: "Plan for tutoring session",
        due_date: "2021-04-18T03:17:17.149Z",
        priority: 3,
        completed: true,
        estimate: null
      }
      4: {
        id: 4,
        userId: 2,
        listId: 3,
        title: "Smile",
        due_date: "2021-04-16T03:17:17.149Z",
        priority: 1,
        completed: true,
        estimate: 60
      },
      5: {
        id: 4,
        userId: 2,
        listId: 4,
        title: "Say hello",
        due_date: "2021-04-18T03:17:17.149Z",
        priority: 2,
        completed: false,
        estimate: 10
      }
    }
    lists: {
      1: {
        id: 1,
        userId: 1,
        title: "Inbox"
      },
      2: {
        id: 2,
        userId: 1,
        title: "Daily Tasks"
      },
      3: {
        id: 3,
        userId: 2,
        title: "Inbox"
      },
      4: id: 4,
        userId: 2,
        title: 'Verbal Communications'
      }
  },
  session: {
    currentUser: 1
  },
  errors: {
    userErrors: [],
    sessionErrors: [],
    postErrors: []
  }
}

