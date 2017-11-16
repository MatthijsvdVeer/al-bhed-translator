import { alBhedToEnglish } from "../constants/alBhedToEnglish"
import { englishToAlBhed } from "../constants/englishToAlBhed"

export const UPDATE_TEXT = "translate/UPDATE_TEXT"
export const TRANSLATE = "translate/TRANSLATE"

const initialState = {
  english: "",
  alBhed: ""
}

const actionHandlers = {
  [UPDATE_TEXT]: (state, action) => {
    return {
      ...state,
      [action.language]: action.text
    }
  },
  [TRANSLATE]: (state, action) => {
    const newState = { ...state }

    const isEnglish = action.language === "english"
    const dictionary = isEnglish ? englishToAlBhed : alBhedToEnglish
    const translation = translate(state[action.language], dictionary)
    const targetLanguage = isEnglish ? "alBhed" : "english"
    newState[targetLanguage] = translation
    return newState
  }
}

const translate = (originalText, translationArray) => {
  const originalChars = originalText.split("")
  const alBhedChars = originalChars.map(c => {
    const char = translationArray[c]
    return char ? char : c
  })
  return alBhedChars.join("")
}

export const updateText = (language, text) => {
  return dispatch => {
    dispatch({ type: UPDATE_TEXT, text, language })
    dispatch({ type: TRANSLATE, language })
  }
}

export default (state = initialState, action) => {
  const actionHandler = actionHandlers[action.type]
  return actionHandler ? actionHandler(state, action) : state
}
