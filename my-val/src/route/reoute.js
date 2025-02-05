import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Page from "../page/Page";


const reactRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Page />
            }
        ]
    }
]);

export default reactRouter;