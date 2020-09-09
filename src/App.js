
import React from 'react';
import logo from './logo.svg';
import './App.css';
//import berrie from '../images/berrie.jpg'


export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ["Berries","Mangoes","Grams","Guavas","Pears","Kales","Onions","Avocados","Carrots","Tomatoes","Spinach","Beans","Oranges","Bananas","Watermelons","Garlic","Corn","Pineapples","Cabbages","Sesame"],
      quantity: ["500kg","300kg","600kg","460kg","500kg","430kg","500kg","470kg","876kg","1208kg","952kg","300kg","2080kg","500kg","900kg","400kg","670kg","300kg","700kg"],
      type:["Fruit","Vegetable","Cereal"],
      price:[450,34,120,460,678,789,200,350,100,250,50,100,180,300,400,160,480,200,600],
      images:["https://i.postimg.cc/43gfnNfd/berrie.jpg","https://i.postimg.cc/9z5S10Nw/download.jpg","https://i.postimg.cc/gkfs3TBw/grams.jpg","https://i.postimg.cc/q7TK0TWc/guava.jpg",
      "https://i.postimg.cc/fkQzXwcB/peas.jpg","https://i.postimg.cc/rpvRPBxW/kales.jpg","https://i.postimg.cc/Pf9MY7Pg/onions.jpg","https://i.postimg.cc/SsphndcC/avocado.jpg",
      "https://i.postimg.cc/hvdZVRgG/carrots.jpg","https://i.postimg.cc/mDxHhvdj/tomatoes.jpg","https://i.postimg.cc/qRZW8G31/spinach.jpg","https://i.postimg.cc/cLxyG60M/beans.jpg",
      "https://i.postimg.cc/sgzGWMhh/oranges.jpg","https://i.postimg.cc/nhVcZBm0/bananas.jpg","https://i.postimg.cc/xdyRHr80/watermelon.jpg","https://i.postimg.cc/rpPS58c2/garlic.jpg",
      "https://i.postimg.cc/c4vM4tNM/corn.jpg","https://i.postimg.cc/sXF2FXRc/pineapple.jpg","https://i.postimg.cc/tJjtgpFd/cabbage.jpg","https://i.postimg.cc/vHmxt48g/sesame.jpg"]
    }
  }
  render() {
    return (
      <fragment>
        <h1>Greens Kiosk</h1>
        
        <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#updates">Updates</a>
  <a href="#about">About</a>
  <a href="#contacts">Contacts</a>
</div>
      
      <div class="two">
      <img src={this.state.images[0]}></img>
      <ul>
        <li>{this.state.products[0]}</li>
        <li>Available: {this.state.quantity[0]}</li>
        <li>Type:{this.state.type[0]}</li>
        <li>Ksh. {this.state.price[0]}</li>
      </ul>
        
        
      </div>
      <div class="two" >
      <img src={this.state.images[1]}></img>
      <ul>
      <p>{this.state.products[1]}</p>
      <li>Available: {this.state.quantity[1]}</li>
      <li>Type:{this.state.type[0]}</li>
      <li>Ksh. {this.state.price[1]}</li>
      </ul>
      
      
     </div>
     

      <div class="two" >
      <img src={this.state.images[11]}></img>
      <ul>
        <li>{this.state.products[11]}</li>
        <li>Available: {this.state.quantity[11]}</li>
        <li>Type:{this.state.type[2]}</li>
        <li>Ksh.{this.state.price[11]}</li>
      </ul>
        
        
      </div>

      <div class="two">
      <img src={this.state.images[3]}></img>
      <ul>
        <li>{this.state.products[3]}</li>
        <li>Available: {this.state.quantity[3]}</li>
        <li>Type:{this.state.type[1]}</li>
        <li>Ksh {this.state.price[3]}</li>
      </ul>
        
        
      </div>
      <div class="three">
      <img src={this.state.images[4]}></img>
      <ul>
        <li>{this.state.products[4]}</li>
        <li>Available: {this.state.quantity[4]}</li>
        <li>Type:{this.state.type[0]}</li>
        <li>Ksh. {this.state.price[4]}</li>
      </ul>
        
        
      </div>
      <div class="three" >
      <img src={this.state.images[5]}></img>
      <ul>
        <li>{this.state.products[5]}</li>
        <li>Available: {this.state.quantity[5]}</li>
        <li>Type:{this.state.type[1]}</li>
        <li>Ksh.{this.state.price[5]}</li>
      </ul>
        
        
      </div>
      <div class="three" >
      <img src={this.state.images[6]}></img>
      <ul>
        <li>{this.state.products[6]}</li>
        <li>Available: {this.state.quantity[6]}</li>
        <li>Type:{this.state.type[1]}</li>
        <li>Ksh.{this.state.price[6]}</li>
      </ul>
        
        
      </div>

      <div class="three" >
      <img src={this.state.images[7]}></img>
      <ul>
        <li>{this.state.products[7]}</li>
        <li>Available: {this.state.quantity[7]}</li>
        <li>Type:{this.state.type[0]}</li>
        <li>Ksh.{this.state.price[7]}</li>
      </ul>
        
        
      </div>

      <div class="four" >
      <img src={this.state.images[8]}></img>
      <ul>
        <li>{this.state.products[8]}</li>
        <li>Available: {this.state.quantity[8]}</li>
        <li>Type:{this.state.type[1]}</li>
        <li>Ksh.{this.state.price[8]}</li>
      </ul>
        
        
      </div>

      <div class="four" >
      <img src={this.state.images[9]}></img>
      <ul>
        <li>{this.state.products[9]}</li>
        <li>Available: {this.state.quantity[9]}</li>
        <li>Type:{this.state.type[1]}</li>
        <li>Ksh.{this.state.price[9]}</li>
      </ul>
        
        
      </div>

      <div class="four" >
      <img src={this.state.images[10]}></img>
      <ul>
        <li>{this.state.products[10]}</li>
        <li>Available: {this.state.quantity[10]}</li>
        <li>Type:{this.state.type[1]}</li>
        <li>Ksh.{this.state.price[10]}</li>
      </ul>
        
        
      </div>

      <div class="four">
     <img src={this.state.images[2]}></img>
     <ul>
        <li> {this.state.products[2]}</li>
        <li>Available: {this.state.quantity[2]}</li>
        <li>Type:{this.state.type[1]}</li>
        <li>Ksh {this.state.price[2]}</li>
      </ul>
        
        
      </div>


      <div class="five">
     <img src={this.state.images[12]}></img>
     <ul>
        <li> {this.state.products[12]}</li>
        <li>Available: {this.state.quantity[12]}</li>
        <li>Type:{this.state.type[0]}</li>
        <li>Ksh {this.state.price[12]}</li>
      </ul>
        
        
      </div>


      <div class="five">
     <img src={this.state.images[13]}></img>
     <ul>
        <li> {this.state.products[13]}</li>
        <li>Available: {this.state.quantity[13]}</li>
        <li>Type:{this.state.type[0]}</li>
        <li>Ksh {this.state.price[13]}</li>
      </ul>
        
        
      </div>


      <div class="five">
     <img src={this.state.images[14]}></img>
     <ul>
        <li> {this.state.products[14]}</li>
        <li>Available: {this.state.quantity[14]}</li>
        <li>Type:{this.state.type[0]}</li>
        <li>Ksh {this.state.price[14]}</li>
      </ul>
        
        
      </div>


      <div class="five">
     <img src={this.state.images[15]}></img>
     <ul>
        <li> {this.state.products[15]}</li>
        <li>Available: {this.state.quantity[15]}</li>
        <li>Type:{this.state.type[1]}</li>
        <li>Ksh {this.state.price[15]}</li>
      </ul>
        
        
      </div>


      <div class="six">
     <img src={this.state.images[16]}></img>
     <ul>
        <li> {this.state.products[16]}</li>
        <li>Available: {this.state.quantity[16]}</li>
        <li>Type:{this.state.type[2]}</li>
        <li>Ksh {this.state.price[16]}</li>
      </ul>
        
        
      </div>


      <div class="six">
     <img src={this.state.images[17]}></img>
     <ul>
        <li> {this.state.products[17]}</li>
        <li>Available: {this.state.quantity[17]}</li>
        <li>Type:{this.state.type[0]}</li>
        <li>Ksh {this.state.price[17]}</li>
      </ul>
        
        
      </div>

      <div class="six">
     <img src={this.state.images[18]}></img>
     <ul>
        <li> {this.state.products[18]}</li>
        <li>Available: {this.state.quantity[18]}</li>
        <li>Type:{this.state.type[1]}</li>
        <li>Ksh {this.state.price[18]}</li>
      </ul>
        
        
      </div>

      <div class="six">
     <img src={this.state.images[19]}></img>
     <ul>
        <li> {this.state.products[19]}</li>
        <li>Available: {this.state.quantity[19]}</li>
        <li>Type:{this.state.type[2]}</li>
        <li>Ksh {this.state.price[19]}</li>
      </ul>
       </div>
       
      
     </fragment>
    );
  }
}

