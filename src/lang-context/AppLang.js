import React, { Component } from "react"
import Child from './Child';
import GreatGrandChild from "./GreatGrandChild";
import LangControls from './LangControls'
import LanguageContext from './LanguageContext'

export default class AppLang extends Component {
  state = {
    lang: window.navigator.language
  };

  handleSetLang = (lang) => {
    this.setState({ lang })
  };

  render() {
    const contextValue = {
      lang: this.state.lang,
      // the context piggyback off a component's state with the context value for the CB
      setLang: this.handleSetLang
    }

    return (

      // provide value for the control, and cb for GreatGrandChild

      < LanguageContext.Provider value={contextValue} >
        <div className='AppLang'>

          <LangControls
            onSetLang={this.handleSetLang}
          />

          <Child />

        </div>
      </LanguageContext.Provider >

    );

  }
}

