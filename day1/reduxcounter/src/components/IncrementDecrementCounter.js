import React from 'react'
import { connect } from 'react-redux'

function IncrementDecrementCounter(props) {

    const handleIncrementClick = () => {
        props.onIncrement()
    }

    const handleDecrementClick = () => {
        props.onDecrement()
    }

    return (
        <div>
            <h1>IncrementDecrementCounter</h1>
            <button onClick={handleIncrementClick}>Increment</button>
            <button onClick={handleDecrementClick}>Decrement</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch({type: 'DECREMENT'})

    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncrementDecrementCounter)