import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function App() {
  const [counter,setCounter]=useState(0);

  const increment = () =>{
    setCounter(counter+1)
  }
  const decrement = () =>{

    setCounter(counter-1)
  }
  const reset = () =>{
    setCounter(0)
  }
  return (
    <div>
      <Container className= 'mt-5 pt-5 text-center' >
        <h1 className="text-center"> Counter App</h1>
        <div className="border border-success-subtle py-5 mx-5 d-inline-block shadow">
  <h1 style={{padding : "auto"}}>{counter}</h1>
  <div className='d-flex justify-content-between my-5'>  
    <Button  className='mx-2 px-5' variant="success" size="lg" onClick={increment}>+</Button>
    <Button  className='mx-2 px-5' variant="danger" size="lg" onClick={decrement}>-</Button>
    <Button  className='mx-2 px-5' variant="primary" size="lg" onClick={reset}>Reset</Button>

</div>
</div>
      </Container>
    </div>
  )
}
