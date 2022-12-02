import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useRoutes,
} from "react-router-dom";
import "./App.css";
import BookLayout from "./BookLayout";
import Book from "./pages/Book";
import Booklist from "./pages/Booklist";
import Home from "./pages/Home";
import NewBook from "./pages/NewBook ";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();
  console.log(location);
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
  // ]);
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"} state="DASA">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/books"}>Books</NavLink>
          </li>
        </ul>
      </nav>
      {/* {element} when we use useRoutes hook we use to pass object like that. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<Booklist />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
{
  /* <Route path="/books" element={<Booklist />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */
}
