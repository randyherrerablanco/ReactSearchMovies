import React, { Component } from 'react'
import PropTypes from 'prop-types'

const API_KEY = 'b65d0889'

export class Detail extends Component {
    static propTypes = {
        id: PropTypes.string
    }
    state = { movie: {}}

    _fecthMovie({id}){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                this.setState(movie)       
            })
    }

    componentDidMount(){
        const {id} = this.props
        this._fecthMovie({id})
    }

    render() {
        const {Title, Poster, Actors, Metascore, Plot} = this.state.movie
        return (
            <p>Detalles</p>
        )
    }
}