import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Translator from "../../components/translator"
import { updateText } from "../../modules/translate"

const Translation = props => (
  <div>
    <Translator updateText={props.updateEnglish} value={props.english} />
    <Translator updateText={props.updateAlBhed} value={props.alBhed} />
  </div>
)

const mapStateToProps = state => ({
  english: state.translate.english,
  alBhed: state.translate.alBhed
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateEnglish: (text) => updateText("english", text),
      updateAlBhed: (text) => updateText("alBhed", text)
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Translation)
