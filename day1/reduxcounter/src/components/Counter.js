import React from 'react'
import { connect } from 'react-redux'

function Counter(props) {

    const handleIncrementClick = () => {
        props.onIncrement()
    }

    return (
        <div>
        <h1>{props.ctr}</h1>
        <button onClick={handleIncrementClick}>Increment</button>
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
        onIncrement: () => dispatch({type: 'INCREMENT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)