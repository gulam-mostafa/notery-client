import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Output from "../Components/Output/Output";
import Main from "./Main";



export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [
           
            {
                path: '/output',
                element: <Output></Output>
            },
            
        ]
    },


])