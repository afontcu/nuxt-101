import { code as theme } from 'mdx-deck/themes'
import style from 'react-syntax-highlighter/styles/prism/ghcolors'
import bash from 'react-syntax-highlighter/languages/prism/bash'

const bodyFont = 'Merriweather, serif'
const titleFont = '"Kavoon", serif'
const mainColor = '#f06c17'

export default {
  ...theme,
  // monospace: bodyFont,
  font: bodyFont,
  prism: {
    style,
    languages: {
      bash,
    },
  },
  colors: {
    text: 'white',
  },
  css: {
    backgroundImage: 'linear-gradient(90deg,#e6007d 0,#f8a022)',
    fontSize: '2rem',
    'table td': {
      padding: '15px',
    },
    pre: {
      borderRadius: '8px',
      boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.3)',
      textShadow: 'none',    
    },
    textShadow: '4px 3px 8px rgba(0, 0, 0, 0.2)',    
  },
  //   textAlign: 'left',
  //   blockquote: {
  //     fontSize: '4rem',
  //     fontFamily: titleFont,
  //   },
  //   li: {
  //     fontFamily: bodyFont,
  //     fontSize: '1.4em',
  //     paddingBottom: '1.2em',
  //   },
  //   strong: {
  //     fontWeight: 900,
  //     color: mainColor,
  //   },
  //   h1: {
  //     fontFamily: titleFont,
  //   },
  //   h2: {
  //     fontFamily: titleFont,
  //   },
  // },
  // heading: {
  //   textTransform: 'inherit',
  // },
  // colors: {
  //   text: '#333',
  //   background: '#fafafa',
  // },
  // p: {
  //   fontFamily: bodyFont,
  //   fontSize: '1.5em',
  //   lineHeight: '1.4',
  // },
  transitionDuration: 0, // disable transitions
}
