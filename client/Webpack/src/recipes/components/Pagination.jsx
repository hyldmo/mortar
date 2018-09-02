import React, { Component, PropTypes } from 'react'

class Pagination extends Component {

    render() {
        const{ active, value, onClick } = this.props;

        return active ?
            (
                <li className="active">
                    <a role="button">{value}</a>
                </li>
            )
            :
            (
                <li onClick={e => onClick(value)}>
                    <a role="button">{value}</a>
                </li>
            )
    }
}

export default Pagination
