import React, { Component, PropTypes } from 'react'

class PaginationButton extends Component {

    render() {
        const{ active, value, label, onClick } = this.props;

        return active ?
            (
                <li onClick={e => onClick()}>
                    <a role="button" aria-label={label}>
                        <span aria-hidden="true">{value}</span>
                    </a>
                </li>
            )
            :
            (
                <li className="disabled">
                    <a role="button" aria-label={label}>
                        <span aria-hidden="true">{value}</span>
                    </a>
                </li>
            )
    }
}

export default PaginationButton
