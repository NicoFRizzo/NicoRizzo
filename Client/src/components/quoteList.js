import React from 'react'
 
const QuoteList = ({quotes}) =>
  quotes.map(quote => <li key={quote}>{quote}</li>)
 
 
export default QuoteList
