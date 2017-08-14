import React, {Component} from 'react';
import './App.css';
import TranslatorContainer from './components/TranslatorContainer'

class App extends Component {
    render() {
        return (
            <div>
                <div className="intro">
                    <h1>Title</h1>
                    <div>
                        <p>
                            Welcome to the Al Bhed Translator! This site is a homage to the Al Bhed-O-Fier I made for
                            MSN
                            Messenger Plus. This site is in no way finished. You can find the source code at
                            <a href="https://github.com/MatthijsvdVeer/al-bhed-translator">GitHub</a>
                        </p>
                        <p>
                            To get started, type in either text area. The other text area will automatically update.
                        </p>
                    </div>
                </div>
                < TranslatorContainer/>
            </div>
        );
    }
}

export default App;
