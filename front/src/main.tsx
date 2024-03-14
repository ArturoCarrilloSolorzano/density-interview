import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './views/main.tsx';
import EditView from './views/edit.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { store } from './store.ts';
import { Provider } from 'react-redux';
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/edit/:id",
    element: <EditView />,
  },
  {
    path: "/",
    element: <Main />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
