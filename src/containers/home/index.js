import React from "react"
import { push } from "react-router-redux"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>
  </div>
)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push("/about")
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Home)
