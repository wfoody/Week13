
const initialState = {
    counter: 0
}



const reducer = (state = initialState, action) => {

if(action.type === 'INCREMENT') {
    return {
        ...state,
        counter: state.counter + 1
    }
}else if(action.type === 'DECREMENT') {
    return {
        ...state,
        counter: state.counter - 1
    }
}
// else if(action.type === 'ADD') {
//     return {
        
        
//     }
// }else if(action.type === 'SUBTRACT') {
//     return {
      
//     }
// }

    return state
} 


export default reducer