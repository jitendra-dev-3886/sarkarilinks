createBrowserRouter([
    {
        element: <PublicLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/jobs",
                element: <JobsList />,
            },
            {
                path: "/results",
                element: <ResultsList />,
            },
        ],
    },
]);