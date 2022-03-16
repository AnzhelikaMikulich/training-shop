const initalState = {
  items:[],
  isLoaded: false,
}

const card = (state = { value: 0 }, action)=>{
  
    switch (action.type) {
      case 'counter/incremented':
        return { value: state.value + 1 }
      case 'counter/decremented':
        return { value: state.value - 1 }
      default:
        return state
    
  }
}
export default card