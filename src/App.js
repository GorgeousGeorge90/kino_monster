import './App.module.scss';
import {RouterProvider} from "react-router";
import router from "./router/router";
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app} id='app'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
