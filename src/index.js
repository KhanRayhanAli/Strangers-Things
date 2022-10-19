import React from 'react'
import ReactDOM from "react-dom/client"
import {Login, Main} from './components'
// import {
//     createBrowserRouter,
//     RouterProvider,
//     Route,
//     createRoutesFromElements,
//   } from "react-router-dom";


const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/" >
//             <Route path="" element={<Main />}/>
//             <Route path={"/Login"} element={<Login/>}/>
//         </Route>
//     )
// )

root.render(<Main />)