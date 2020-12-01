import React from 'react'
import { connect } from 'react-redux'

function AddSubtractCounter(props) {

    const handleAddClick = () => {
        props.onAdd()
    }

    const handleSubtractClick = () => {
        props.onSubtract()
    }

    return (
        <div>
            <h1>AddSubtractCounter</h1>
            <input type='number'></input>
            <button onClick={handleAddClick}>Add</button>
            <button onClick={handleSubtractClick}>Subtract</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: () => dispatch({type: 'ADD'}),
        onSubtract: () => dispatch({type: 'SUBTRACT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSubtractCounter)