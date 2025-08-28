import React, { useReducer } from 'react'

function reducer (state, action){
    switch(action.type){
        case 'increase':
            return{count: state.count +1}
        
        case 'decrease':
            return{count: state.count -1} 

        case 'increaseBy10':
            return{count: state.count +10}

        case 'decreaseBy10':
            return { count: state.count -10}

    }
}

function Counter(){
    const [count, dispatch] = useReducer(reducer, {count:0})
  return (
    <div>
        <h1>Count {state.count}</h1>
        <button onClick={() => dispatch({type: increase})}>Increase count</button> 
        <button>Decrease count</button>
        <button></button>
    </div>
  )
}

export default Counter