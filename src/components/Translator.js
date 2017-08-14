import React from 'react'

class Translator extends React.Component {
    englishChanged(e) {
        const english = e.target.value
        this.alBhedTextArea.value = this.props.translateFromEnglish(english)
    }

    alBhedChanged(e) {
        const alBhed = e.target.value
        this.englishTextArea.value = this.props.translateFromAlBhed(alBhed)
    }

    render() {
        return (
            <div className="translations">
                <div className="translation-box">
                    <h2>English</h2>
                    <textarea
                        ref={(englishTextArea) => {
                            this.englishTextArea = englishTextArea
                        }}
                        onChange={e => this.englishChanged(e)}/>
                    <button>Copy to clipboard</button>
                </div>
                <div className="translation-box">
                    <h2>Al Bhed</h2>
                    <textarea
                        ref={(alBhedTextArea) => {
                            this.alBhedTextArea = alBhedTextArea
                        }}
                        onChange={e => this.alBhedChanged(e)}/>
                    <button>Copy to clipboard</button>
                </div>
            </div>)

    }
}

export default Translator