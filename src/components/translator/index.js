import React from "react"

export default props => (
  <div>
    <textarea
      onChange={e => props.updateText(e.target.value)}
      value={props.value}
    />
  </div>
)
