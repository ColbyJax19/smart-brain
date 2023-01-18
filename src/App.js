
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import React, { Component } from 'react'
import './App.css';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank';
import Particle from './Particle.jsx';



class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }
  
onInputChange = (event) =>{
  console.log(event.target.value)
}

onButtonSubmit = () => {
  console.log('click')
}

  render() {
    return (
      <div className="App">
        <Particle  />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange = {this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit} />
        {/* <FaceRecognition /> */}
      </div>

    );
  }
}




export default App;
