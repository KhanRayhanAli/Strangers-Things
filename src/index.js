import React from 'react'
import ReactDOM from "react-dom/client"
import {Login, Main, Posts, PostDetails} from './components'


const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)


root.render(<Main />)