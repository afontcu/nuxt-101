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
    link: 'rgba(255, 255, 255, 0.9)',
  },
  css: {
    backgroundImage: 'linear-gradient(90deg, #e6007d 0, #f8a022)',
    fontSize: '2.1rem',
    'table td': {
      padding: '1rem',
    },
    pre: {
      borderRadius: '8px',
      boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.3)',
      textShadow: 'none',    
    },
    textShadow: '4px 3px 8px rgba(0, 0, 0, 0.2)',  
    a: {
      textAlign: 'center',
      display: 'block',
      '&:hover': {
        color: 'white'
      }
    },
  },
  transitionDuration: 0, // disable transitions
}
