import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import {Sub} from '../types';

const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador a veces'
  },
  {
    nick:'Sergio_serrano',
    subMonths:7,
    avatar:'https://i.pravatar.cc/150?u=sergio_serrano'
  }
]



interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<Array<Sub>>([]); 
  const [newSubsNumber, setNewSubsNumber] = useState <AppState ["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null);
  
  useEffect(()=>{
    setSubs(INITIAL_STATE)
  }, [])

  const handlerNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }
  
  return (
    <div className="App" ref={divRef}>
      <h1>midu subs</h1>
      <List subs={subs}/>
      <Form onNewSub={handlerNewSub}/>
    </div>
  );
}

export default App;
