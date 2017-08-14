import React from 'react'
import Translator from './Translator'
import {englishToAlBhed} from '../constants/englishToAlBhed'
import {alBhedToEnglish} from '../constants/alBhedToEnglish'

class TranslatorContainer extends React.Component {
    englishToAlBhed(text) {
        return this.translate(text, englishToAlBhed)
    }

    translate(originalText, translationArray) {
        const originalChars = originalText.split('')
        const alBhedChars = originalChars.map(c => {
            const char = translationArray[c]
            return char ? char : c
        })
        return alBhedChars.join('')
    }

    alBhedToEnglish(text) {
        return this.translate(text, alBhedToEnglish)
    }

    render() {
        return <Translator
            translateFromEnglish={text => this.englishToAlBhed(text)}
            translateFromAlBhed={text => this.alBhedToEnglish(text)}/>
    }
}

export default TranslatorContainer