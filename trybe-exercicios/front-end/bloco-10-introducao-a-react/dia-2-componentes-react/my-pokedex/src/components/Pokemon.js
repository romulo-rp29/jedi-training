import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.data;
        return(
        <section className="pokemon">
            <h1>{name}</h1>
            <p>{type}</p>
            <p>{`Average Weigth: ${averageWeight.value}${averageWeight.measurementUnit}`}</p>
            <img src={image} alt={name}></img>
        </section>
        )
    }
}

export default Pokemon;