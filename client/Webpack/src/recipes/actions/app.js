export const SWAP_PAGE = 'SWAP_PAGE';

export function swapPage (page) {
    return {
        type: SWAP_PAGE,
        page
    }
}

export const QUERY_CHANGE = 'QUERY_CHANGE';
export function queryChange (query) {
    return {
        type: QUERY_CHANGE,
        query: query
    }
}