import "./App.css";
import Form from "./form";
import Task from "./task";
import { useState, useEffect } from "react";
import { Amplify, API, Auth } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import { listTasks } from "./graphql/queries";
import { createTasks, deleteTasks } from "./graphql/mutations";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
  const pullData = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const tasks = await API.graphql({
      query: listTasks,
      variables: { filter: { userId: { eq: user.attributes.sub } } },
    });
    setList(tasks.data.listTasks.items);
  };
  useEffect(() => {
    pullData();
  }, []);

  const addTask = async (description) => {
    const user = await Auth.currentAuthenticatedUser();
    try {
      const newTask = await API.graphql({
        query: createTasks,
        variables: {
          input: {
            userId: user.attributes.sub,
            description: description,
          },
        },
      });
    } catch (e) {
      console.log("e", e);
    }
    pullData();
  };

  const deleteTask = async (taskId) => {
    console.log("taskID", taskId);
    try {
      const removeTask = await API.graphql({
        query: deleteTasks,
        variables: {
          input: {
            id: taskId,
          },
        },
      });
    } catch (e) {
      console.log("e", e);
    }
    pullData();
  };

  const [list, setList] = useState([]);

  // const deleteTask = (id) => {
  //   setList(list.filter((task) => task.id !== id));
  // };
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <button onClick={signOut}>Sign Out</button>
          <Form addTask={addTask} />
          <div>
            {list.length <= 0 ? (
              <div>No pending tasks</div>
            ) : (
              list.map((task, index) => {
                return (
                  <Task
                    key={`item-${index}`}
                    task={task}
                    deleteTask={deleteTask}
                  />
                );
              })
            )}
          </div>
        </div>
      )}
    </Authenticator>
  );
};

export default App;
