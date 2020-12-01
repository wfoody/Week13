import React from 'react'
import { connect } from 'react-redux'

function DisplayCounter(props) {

    return (
        <div>
            <h1>DisplayCounter</h1>
            <h2>{props.ctr}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}

export default connect(mapStateToProps)(DisplayCounter)