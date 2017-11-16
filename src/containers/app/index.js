import React from "react"
import { Route } from "react-router-dom"
import Translation from "../translation"

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Translation} />
    </main>
  </div>
)

export default App
