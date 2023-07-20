import React, { Component } from 'react'
import Cards from './Cards';
import RickAndMortyService from '../../../Services/RickAndMortyService';


export default class Main extends Component {
  
  constructor(props){
    super(props);
this.state = {ricks : []}
  }
  componentDidMount(){



  }
  
    render() {

       
    return (
      <div>
         <main>

<section class="py-5 text-center container">
  <div class="row py-lg-5">
    <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="fw-light">Bienvenido a la biblioteca de Rick and Morty!</h1>
      <p class="lead text-body-secondary">Este es un proyecto de prueba, por lo tanto no estará disponible en la web.</p>
      <p>
        <a href="#" class="btn btn-primary my-2">Siguiente página</a>
        <a href="#" class="btn btn-secondary my-2">Pagina previa</a>
      </p>
    </div>
  </div>
</section>
<Cards />


</main>
      </div>
    )
  }
}


