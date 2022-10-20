import React from 'react'
import { Link } from 'react-router-dom'

export default function Filter() {
  return (
    <div className="filter">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor :"#dc4c2c"}}>
          Categorias
          </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to={'/categoria/velas'}>Velas</Link>
              <Link className="dropdown-item" to={'/categoria/velas XL'}>Velas XL</Link>
              <Link className="dropdown-item" to={'/categoria/velas XXL'}>Velas XXL</Link>
            </div>
    </div>
  )
}
