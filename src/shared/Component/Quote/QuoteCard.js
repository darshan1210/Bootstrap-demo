/* eslint-disable react/prop-types */
import React from 'react'
import Card from 'react-bootstrap/Card'

function QuoteCard ({ quoteNumer, quote, author }) {
  return (
        <>

            <Card>
                <Card.Header>{quoteNumer}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                           {quote}{' '}
                        </p>
                        <footer className="blockquote-footer">
                           <cite title="Source Title">{author}</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>

        </>
  )
}

export default QuoteCard
