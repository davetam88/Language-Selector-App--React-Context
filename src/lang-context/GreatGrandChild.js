import React, { Component } from 'react'
import languageSpecificCopy from './languageSpecificCopy'
import LanguageContext from './LanguageContext'

class GreatGrandChild extends Component {
  static contextType = LanguageContext;

  render() {
    // get lang valiue from context
    const copy = languageSpecificCopy[this.context.lang] || {}
    return (
      <section>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>

        <button
          onClick={() => this.context.setLang('klingon')}
        >
          Klingon!{' '}
          {/* yes I know it's a vulcan salute but star-trek */}
          <span role='img' aria-label='klingon'>🖖</span>
        </button>
      </section>
    )
  }
}

export default GreatGrandChild


// const languageSpecificCopy = {
//   // put your language here if you want!
//   'en-GB': {
//     title: 'Good Morro Old Chap!',
//     body: 'Dolor sit amet consectetur adipisicing elit. Expedita sit. Ea mollitia aperiam tempora hic neque adipisci, iure repudiandae aliquam, culpa nulla officia voluptatem quibusdam, impedit illo autem.'
//   },
