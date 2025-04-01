import React from 'react'
import Card from './Card'

const CardsSection = () => {
    return (
        <div className='row d-flex justify-end p-3 m-0'>
            <Card title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." label="Go somewhere"/>
            <Card title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." label="Go somewhere"/>
            <Card title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." label="Go somewhere"/>
            <Card title="Card Title" text="Some quick example text to build on the card title and make up the bulk of the card's content." label="Go somewhere"/>
        </div>
    )
}

export default CardsSection