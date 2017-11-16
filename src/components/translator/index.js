import React from "react"
import copy from "copy-to-clipboard"

export default props => (
  <div>
    <textarea
      onChange={e => props.updateText(e.target.value)}
      value={props.value}
    />
    <button onClick={() => copy(props.value)}>Copy to clipboard</button>
  </div>
)
