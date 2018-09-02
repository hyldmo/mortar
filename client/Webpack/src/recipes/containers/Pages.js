import { connect } from 'react-redux'
import PageList from '../components/PageList'
import { swapPage } from '../actions/app'

const mapStateToProps = (state) => {
    return {
        current: (state.pages.current),
        total: (state.pages.total)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        swapPage: (page) => {
            dispatch(swapPage(page));
        }
    }
};

const Pages = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageList);

export default Pages