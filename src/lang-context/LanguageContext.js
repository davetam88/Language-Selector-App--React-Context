import React from 'react'

const LanguageContext = React.createContext({
  // add 'empty updater function' 
  lang: window.navigator.language,
  setLang: () => {
  },
})
export default LanguageContext

