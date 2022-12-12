import React from 'react'
import Container from 'react-bootstrap/Container'
import QuoteCard from './QuoteCard'
import './quotes.scss'

function Quote() {
  return (
    <>
      <Container className='quotes_container'>
        <div className="quotes">
          <h1>Beautiful Quotes</h1>
          <QuoteCard quoteNumer='Quote 1' quote='“Adopt the pace of nature. Her secret is patience.”' author=' Ralph Waldo Emerson' />

          <QuoteCard quoteNumer='Quote 2' quote='“An early-morning walk is a blessing for the whole day.”' author='Henry David Thoreau' />

          <QuoteCard quoteNumer='Quote 3' quote='“Beautiful things don’t ask for attention.”' author='James Thurber' />

          <QuoteCard quoteNumer='Quote 4' quote='“By discovering nature, you discover yourself.”' author='Maxime Lagacé' />

          <QuoteCard quoteNumer='Quote 5' quote='“Colors are the smiles of nature.”' author='Leigh Hunt' />

          <QuoteCard quoteNumer='Quote 6' quote='“Difficult roads often lead to beautiful destinations.”' author='John Lubbock' />

          <QuoteCard quoteNumer='Quote 7' quote='“Every flower is a soul blossoming in nature.” ' author='Gerard De Nerval.' />

          <QuoteCard quoteNumer='Quote 8' quote='“Everything in nature invites us constantly to be what we are.”' author='Gretel Ehrlich' />

          <QuoteCard quoteNumer='Quote 9' quote='“Heaven is under our feet as well as over our heads.”' author='Henry David Thoreau' />

          <QuoteCard quoteNumer='Quote 10' quote='“If you can’t be in awe of Mother Nature, there’s something wrong with you.”' author='Alex Trebek' />

          <QuoteCard quoteNumer='Quote 11' quote='“If you truly love nature, you will find beauty everywhere.”' author='Laura Ingalls Wilder' />
        </div>
      </Container>
    </>
  )
}

export default Quote
