import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { LabelList } from "./label/LabelList";
import { LabelCreate } from "./label/LabelCreate";
import { LabelEdit } from "./label/LabelEdit";
import { LabelShow } from "./label/LabelShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { StepsList } from "./steps/StepsList";
import { StepsCreate } from "./steps/StepsCreate";
import { StepsEdit } from "./steps/StepsEdit";
import { StepsShow } from "./steps/StepsShow";
import { HistoryList } from "./history/HistoryList";
import { HistoryCreate } from "./history/HistoryCreate";
import { HistoryEdit } from "./history/HistoryEdit";
import { HistoryShow } from "./history/HistoryShow";
import { SprintList } from "./sprint/SprintList";
import { SprintCreate } from "./sprint/SprintCreate";
import { SprintEdit } from "./sprint/SprintEdit";
import { SprintShow } from "./sprint/SprintShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"JiraClone"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="Label"
          list={LabelList}
          edit={LabelEdit}
          create={LabelCreate}
          show={LabelShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Steps"
          list={StepsList}
          edit={StepsEdit}
          create={StepsCreate}
          show={StepsShow}
        />
        <Resource
          name="History"
          list={HistoryList}
          edit={HistoryEdit}
          create={HistoryCreate}
          show={HistoryShow}
        />
        <Resource
          name="Sprint"
          list={SprintList}
          edit={SprintEdit}
          create={SprintCreate}
          show={SprintShow}
        />
      </Admin>
    </div>
  );
};

export default App;
