import {
    MINE_BLOCK_BEGIN,
    MINE_BLOCK_SUCCESS,
    MINE_BLOCK_ERROR,
    MINE_BLOCK_CLOSE_SNACK,
    GET_CHAIN_BEGIN,
    GET_CHAIN_SUCCESS,
    GET_CHAIN_ERROR,
    POST_TRANSACTION_BEGIN,
    POST_TRANSACTION_SUCCESS,
    POST_TRANSACTION_ERROR,
    POST_TRANSACTION_CLOSE_SNACK,
} from '../actions/types';

const defaultState = {
    transactions: {
        isLoading: false,
        isError: false,
        isSnackOpen: false,
        snackMessage: "",
    },
    chain: {
        isLoading: false,
        isError: false,
        chainData: {},
    },
    mineBlock: {
        isLoading: false,
        isError: false,
        isSnackOpen: false,
        snackMessage: "",
    },
};

const actionHandlers = {

/*
* action handlers for posting a new transaction
*/
    [POST_TRANSACTION_BEGIN]: (state) => ({
        ...state,
        transactions: {
            ...state.transactions,
            isLoading: true,
        },
    }),

    [POST_TRANSACTION_SUCCESS]: (state, action) => ({
        ...state,
        transactions: {
            ...state.transactions,
            isLoading: false,
            isSnackOpen: true,
            snackMessage: action.payload.data.message,
        },
    }),

    [POST_TRANSACTION_ERROR]: (state, action) => ({
        ...state,
        transactions: {
            ...state.transactions,
            isLoading: false,
            isSnackOpen: true,
            error: action.payload,
        },
    }),

    [POST_TRANSACTION_CLOSE_SNACK]: (state) => ({
        ...state,
        transactions: {
            ...state.transactions,
            isSnackOpen: false,
            snackMessage: "",
        },
    }),

/*
* action handlers for getting the chain data
*/
    [GET_CHAIN_BEGIN]: (state) => ({
        ...state,
        chain: {
            ...state.chain,
            isLoading: true,
        },
    }),

    [GET_CHAIN_SUCCESS]: (state, action) => ({
        ...state,
        chain: {
            ...state.chain,
            isLoading: false,
            chainData: action.payload,
        },
    }),

    [GET_CHAIN_ERROR]: (state, action) => ({
        ...state,
        chain: {
            ...state.chain,
            isLoading: false,
            isError: action.error,
        },
    }),

/*
* action handlers for mining a new block
*/
    [MINE_BLOCK_BEGIN]: (state) => ({
        ...state,
        mineBlock: {
            ...state.mineBlock,
            isLoading: true,
        }
    }),

    [MINE_BLOCK_SUCCESS]: (state, action) => ({
        ...state,
        mineBlock: {
            ...state.mineBlock,
            isLoading: false,
            isSnackOpen: true,
            snackMessage: action.payload.data.message,
        }
    }),

    [MINE_BLOCK_ERROR]: (state, action) => ({
        ...state,
        mineBlock: {
            ...state.mineBlock,
            isLoading: false,
            isSnackOpen: true,
            error: action.error,
        }
    }),

    [MINE_BLOCK_CLOSE_SNACK]: (state) => ({
        ...state,
        mineBlock: {
            ...state.mineBlock,
            isSnackOpen: false,
            snackMessage: "",
        },
    }),
};

export default (state = defaultState, action) => {
    return actionHandlers[action.type] ? 
        actionHandlers[action.type](state, action) : state
}