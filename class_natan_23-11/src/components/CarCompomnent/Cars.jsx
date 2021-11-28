import React, { Component } from 'react'
import Car from './Car'

export default class Cars extends Component {

    state={
        arrayOfImges:[
            {model:"B.M.W",price:10000,pic:"https://media.istockphoto.com/photos/-picture-id943558044?b=1&k=20&m=943558044&s=170667a&w=0&h=LilwClrVg4zglprvH1J2zwFP2HOBY7M0OUhMGOgW6R8= "},
            {model:"B.M.W",price:15000,pic:"https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278__340.jpg"},
            {model:"B.M.W",price:20000,pic:"https://cdn.pixabay.com/photo/2017/09/01/20/23/ford-2705402__340.jpg"},
            {model:"B.M.W",price:25000,pic:"https://cdn.pixabay.com/photo/2016/11/22/20/10/dog-1850465__480.jpg"}
        ]
    }


    render() {
        return (
                <div>
                    { this.state.arrayOfImges.map((item,i) =><Car car={item} />
                    )}
                </div>
        )
    }
}
