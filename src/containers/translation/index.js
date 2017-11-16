import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Translator from "../../components/translator"
import Introduction from "../../components/introduction"
import { updateText } from "../../modules/translate"

const Translation = props => (
  <div className="container">
    <div className="row">
      <div className="col">
        <Introduction />
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <Translator updateText={props.updateEnglish} value={props.english} />
      </div>
      <div className="col-6">
        <Translator updateText={props.updateAlBhed} value={props.alBhed} />
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  english: state.translate.english,
  alBhed: state.translate.alBhed
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateEnglish: text => updateText("english", text),
      updateAlBhed: text => updateText("alBhed", text)
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Translation)
