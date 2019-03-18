import { code as theme } from 'mdx-deck/themes'
import style from 'react-syntax-highlighter/styles/prism/ghcolors'
import bash from 'react-syntax-highlighter/languages/prism/bash'

const bodyFont = 'Merriweather, serif'

export default {
  ...theme,
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
    backgroundImage: 'linear-gradient(90deg, #e6007d 0, #f8a022)',
    fontSize: '2rem',
    'table td': {
      padding: '1rem',
    },
    pre: {
      borderRadius: '8px',
      boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.3)',
      textShadow: 'none',    
    },
    textShadow: '4px 3px 8px rgba(0, 0, 0, 0.2)',    
  },
  transitionDuration: 0, // disable transitions
}
