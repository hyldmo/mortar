import React, { Component, PropTypes } from 'react'

import Pagination from './Pagination'
import PaginationButton from './PaginationButton'

class PageList extends Component {

    render() {
        const{ current, total, swapPage } = this.props;

        if (total < 2) return <div/>;

        const limit = 10;

        let min = Math.max(2, current - 4);
        let max = Math.min(min + (limit - 2), total);

        min = Math.max(2, max - (limit - 2));

        const pageList = [];
        for (let i = min; i < max; i++) {
            if ((i == min && i != 2) || (i == max - 1 && max != total)) {
                pageList.push(
                    <li className="disabled" key={i}>
                        <a role="button">...</a>
                    </li>
                )
            }
            else {
                pageList.push(
                    <Pagination active={current == i} value={i} onClick={swapPage} key={i}/>
                )
            }
        }


        return (
            <ul className="pagination">
                <PaginationButton active={current > 1} label="Previous" value="&laquo;" onClick={() => swapPage(current - 1)} />
                <Pagination active={current == 1} value={1} onClick={swapPage} />

                {pageList}

                <Pagination active={current == total} value={total} onClick={swapPage} />
                <PaginationButton active={current < total} label="Next" value="&raquo;" onClick={() => swapPage(current + 1)} />
            </ul>
        )
    }
}

PageList.propTypes = {
    total: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    swapPage: PropTypes.func.isRequired
};

export default PageList

/*
var Pages = React.createClass({
    getInitialState: function () {
        return { items: [] };
    },

    componentWillReceiveProps: function (nextProps) {
        var nextItems = this.state.items;
        var diff = nextProps.pages - this.props.pages;

        if (diff > 0)
            for (let i = 0; i <= diff; i++)
                nextItems.push({ btnState: '' });

        else if (diff < 0)
            for (let i = diff; i < 0; i++)
                nextItems.pop();

        nextItems[this.props.currentPage - 1].btnState = '';
        nextItems[nextProps.currentPage - 1].btnState = 'active';

        this.setState({
            items: nextItems
        });
    },

    render: function () {
        var _this = this;
        return (
            <ul className="pagination">
            <li onClick={_this.props.onSwapPage.bind(null, _this.props.currentPage - 1)}>
        <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
        </a>
        </li>

        {this.state.items.map(function (props, i) {
            return (
                <li onClick={_this.props.onSwapPage.bind(null, i + 1)} className={props.btnState} key={i}>
                <a href="#">{i+1}</a>
                </li>
            );
        })}

        <li onClick={_this.props.onSwapPage.bind(null, _this.props.currentPage + 1)}>
        <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
        </a>
        </li>
        </ul>
        );
    }
});
*/