import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const gry=[{name:"Beholder",month:"marzec",id:0,opis:"Opis gry"},{name:"Minecraft",month:"styczen",id:1,opis:"Opis gry"},{name:"Monopoly",month:"pazdziernik",id:2,opis:"Opis gry"},{name:"Losowa",month:"listopad",id:3,opis:"Opis gry"},{name:"Gra",month:"sierpien",id:4,opis:"Opis gry"},{name:"Planszowa",month:"czerwiec",id:5,opis:"Opis gry"},{name:"Na",month:"maj",id:6,opis:"Opis gry"},{name:"Planszeo",month:"maj",id:7,opis:"Opis gry"}];

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
      
      months: ["styczen","luty","marzec","kwiecien","maj","czerwiec","lipiec","sierpien","wrzesien","pazdziernik","listopad","grudzien"]
    }
  }

  nazwyGier(month){
    return(
    
    gry.map((gra)=>{
      <h1 key={gra.id}>{gra.month}</h1>
      if(gra.month===month)
        return <Game name={gra.name} key={gra.id} opis={gra.opis}/> } )
      
     
    )}

  

  sortClick(miesiac){
  
    let miesiace=this.state.months;
    for(let i=0;i++;i<12){
      miesiace[i]=miesiac;
    }
    
    this.setState({months: miesiace}); 
  
  }

  render(){
    const miesiace=["styczen","luty","marzec","kwiecien","maj","czerwiec","lipiec","sierpien","wrzesien","pazdziernik","listopad","grudzien"];
    
    let temporary=this.state.months;

    return(
      
      <div>
        {Nav}
        <div className='sortingButtons'>
        {miesiace.map((miesiac)=>
        <Button key={miesiac} month={miesiac} /*click={this.sortClick(miesiac).bind}*//>
        )}
        </div>
        {temporary.map((miesiac)=>
        this.nazwyGier(miesiac))}       
      </div>
    );
  }
}

class Button extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <button /*onClick={this.props.click(this.props.month)}*/ className='przycisk'>{this.props.month}</button>
    )
  }
}
//sortClick(this.props.month,this.props.months)

class Game extends React.Component{
  render(){
    return(
      <div className='gra'>
      <h3>{this.props.name}</h3>
      <p>{this.props.opis}</p>
      </div>
    )
  }
}

const Nav = <h1 className='tytul'>Planszeo</h1>;

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
