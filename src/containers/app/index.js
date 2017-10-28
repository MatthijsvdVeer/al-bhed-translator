import React from "react"
import { Route, Link } from "react-router-dom"
import Translation from "../translation"
import About from "../about"

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Translation} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
)

export default App
