import React, { Component } from 'react'
import * as style from "./movie.module.css"

export default class Movie extends Component {
    render() {
        return (
            <div className={style.card}>
            <p>Name : {this.props.movie.name}</p>
            <p>Year : {this.props.movie.year}</p>
            <p>Actor : {this.props.movie.actor}</p>
        </div>
        )
    }
}
