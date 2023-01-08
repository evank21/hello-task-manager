import { createContext, useContext } from "react";

type Task = {
  id: string;
  text: string;
};

type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
};

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Task #1" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Task #2" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Task #3" }],
    },
  ],
};

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);
