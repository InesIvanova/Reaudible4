import React, {Component} from 'react';

class Protected extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <h1> Protected</h1>
        )
    }
}

export default Protected