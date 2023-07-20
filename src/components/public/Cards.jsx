import React, { useEffect, useState } from 'react'
import Card from './Card'
import RickAndMortyService from '../../../Services/RickAndMortyService';



 const Cards = () => {
 

const [ricks,setRicks] = useState([]);


useEffect(()=>{

  RickAndMortyService.getAllCharacters()
.then((data ) => setRicks(data.results))
.catch((error) => console.log(error))


},[ricks])



//en lugar de switch & component, voy a usar routes & element.

const cardList = ricks.map((m)=> <Card ricks={m} key={m.id}/>)


  return (
    <div>
      <div class="album py-5 bg-body-tertiary">
  <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {cardList}

      </div>
</div> 
    
</div>
    </div>
  )
}

 export default Cards;



