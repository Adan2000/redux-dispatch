let state = {count: 0};

function changeState(state, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function render(){
    document.body.textContent = state.count
}

function dispatch(action){
  state = changeState(state, action)
  render()
}

render() 

//we make our state equal to 0 
//we define our action type 
//we use a function that takes in the action 
// that function has state equal to it calling the changeState function
//and passing it in the current state plus the action
//now it will return the result of that which is state +1 
//now when we call it again it will pass in the current state which will be 1 and then it will ccall the changeState function and add 1 to the state 


//here we simply use a render function to render the state
//we call that function inside the dispatch function
//at the end we call render again. 