import React, { Component } from 'react'
import data from './data.json'
export default class MovieList extends Component {

    constructor(props){
        super(props)
        this.state = {
            mangPhim: data
        }
    }

    renderMangPhim = () =>{
        return this.state.mangPhim.map((phim,index)=>{
            return(
                <div className="card col-4" key={index}>
                    <img className='card-img-top' src={phim.hinhAnh} alt={phim.biDanh} height={350}/>
                    <div className="card-body">
                        <h4 className='card-title'>{phim.tenPhim}</h4>
                        <p className='card-text'>{phim.moTa.length > 100 ? phim.moTa.substr(0,100) + '...' : phim.moTa}</p>
                    </div>
                </div>
            )
        })
    }

  render() {
    console.log(this.state.mangPhim)
    return (
      <div className='container'>
        <div className="row">
            {this.renderMangPhim()}
        </div>
      </div>
    )
  }
}
