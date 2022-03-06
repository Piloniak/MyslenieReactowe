import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
      games: []
    }
  }

  nazwyGier(month){
    const gry=[{name:"Beholder",month:"marzec",id:0},{name:"Minecraft",month:"styczen",id:1},{name:"Monopoly",month:"pazdziernik",id:2},{name:"Losowa",month:"listopad",id:3},{name:"Gra",month:"sierpien",id:4},{name:"Planszowa",month:"czerwiec",id:5},{name:"Na",month:"maj",id:6},{name:"Planszeo",month:"maj",id:7}];
    
    return(
    
    gry.map((gra, index)=>{
      <h1 key={index+gra.name}>{gra.month}</h1>
      if(gra.month==month)
        return <Game name={gra.name} key={gra.name}/> })
     
    )}

  render(){
    const miesiace=["styczen","luty","marzec","kwiecien","maj","czerwiec","lipiec","sierpien","wrzesien","pazdziernik","listopad","grudzien"];
    return(
      <div>
        {Nav}
        <SortingButtons/>
        {miesiace.map((miesiac)=>
        this.nazwyGier(miesiac))}       
      </div>
    );
  }
}



class SortingButtons extends React.Component{
  render(){
    const miesiace=["styczen","luty","marzec","kwiecien","maj","czerwiec","lipiec","sierpien","wrzesien","pazdziernik","listopad","grudzien"];
    return(
      <div className='sortingButtons'>
       {miesiace.map((miesiac)=>
        <Button month={miesiac} key={miesiac}/>
       )}
      </div>
    );
  }
}


class Button extends React.Component{
  render(){
    return(
      <button>{this.props.month}</button>
    )
  }
}

class Game extends React.Component{
  render(){
    return(
      <h3>{this.props.name}</h3>
      
    )
  }
}

const Nav = <h1>Planszeo</h1>;

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
