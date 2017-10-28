import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

const About = props => (
  <div>
    <h1>About page</h1>
    <p>You are looking at it!</p>
  </div>
)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(About)
