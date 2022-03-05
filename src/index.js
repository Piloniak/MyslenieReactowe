import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class Main extends React.Component{
  render(){
    const gry=["Beholder","Minecraft","Monopoly","Losowa","Gra","Planszowa","Na","Planszeo"]
    return(
      <div>
        {Nav}
        <SortingButtons/>
        {gry.map((gra)=>
        <Game name={gra} key={gra}/>)}
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
