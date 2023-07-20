import React from 'react'
import { Link } from "react-router-dom";

const Card = ({ricks}) => {
  return (
    

    
        <div class="col">
          <div class="card shadow-sm">
            <img width="100%" src = {ricks.image} alt= "imagen"/> 
            <h3> {ricks.name}</h3>
            <div class="card-body">
              <p class="card-text">This is a {ricks.gender} and {ricks.species} character!</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                  <Link to ={`/detail/${ricks.id}`}>Detalle</Link>
                  </button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
  )

  }

export default Card;