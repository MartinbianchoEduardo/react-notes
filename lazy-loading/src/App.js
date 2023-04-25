import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import BlogPage, { loader as postsLoader } from './pages/Blog';
// removed import above to implement lazy loading
// we'll need to import these loaders dynamically using the import() function

import HomePage from "./pages/Home";
// import PostPage, { loader as postLoader } from "./pages/Post";
import RootLayout from "./pages/Root";

//import the page lazily
const BlogPage = lazy(() => import("./pages/Blog"));
const PostPage = lazy(() => import("./pages/Post"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts",
        children: [
          {
            index: true,
            element: (
              //use Suspense component to wait for content to be loaded
              //before actually rendering the component
              <Suspense fallback={<p>Loading...</p>}>
                <BlogPage />
              </Suspense>
            ),
            //import the loader lazily
            loader: () =>
              import("./pages/Blog").then((module) => module.loader()),
          },

          {
            path: ":id",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <PostPage />
              </Suspense>
            ),
            //we get the params from the loader function and have to pass it here
            loader: ({ params }) =>
              import("./pages/Post").then((module) =>
                module.loader({ params })
              ),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
