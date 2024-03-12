import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddNewBook from "../pages/AddNewBook";
import AllBooks from "../pages/AllBooks";
import BookDetails from "../pages/BookDetails";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import UpdateBook from "../pages/UpdateBook";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/add-book",
        element: <AddNewBook />,
      },
      {
        path: "/edit-book/:id",
        element: <UpdateBook />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
