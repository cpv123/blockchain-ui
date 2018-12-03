import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import getChain, {
    getChainBegin,
    getChainSuccess,
    getChainError,
    getChainCloseSnack
} from '../chain-data-actions';
import * as types from '../types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('the async actions creator to get the chain', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    it('creates a success action when fetching has been done', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: getChainMock,
            });
        });

        const expectedActions = [
            { type: types.GET_CHAIN_BEGIN },
            { type: types.GET_CHAIN_SUCCESS, payload: getChainMock },
        ];

        const store = mockStore({ chain: {} });

        return store.dispatch(getChain()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates an error action when fetching has been failed', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.reject(getChainErrorMock);
        });

        const expectedActions = [
            { type: types.GET_CHAIN_BEGIN },
            { type: types.GET_CHAIN_ERROR, payload: getChainErrorMock },
        ];

        const store = mockStore({ chain: {} });

        return store.dispatch(getChain()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    });
})

describe('the chain data action creators', () => {
    it('should create an action to begin getting the chain data', () => {
        const expectedAction = {
            type: types.GET_CHAIN_BEGIN,
        };
        expect(getChainBegin()).toEqual(expectedAction);
    });
    it('should create an action to indicate success', () => {
        const payload = "success";
        const expectedAction = {
            type: types.GET_CHAIN_SUCCESS,
            payload,
        };
        expect(getChainSuccess(payload)).toEqual(expectedAction);
    });
    it('should create an action to indicate error', () => {
        const payload = "error";
        const expectedAction = {
            type: types.GET_CHAIN_ERROR,
            payload,
        };
        expect(getChainError(payload)).toEqual(expectedAction);
    });
    it('should create an action to close the snack', () => {
        const expectedAction = {
            type: types.GET_CHAIN_CLOSE_SNACK,
        };
        expect(getChainCloseSnack()).toEqual(expectedAction);
    });
})

const getChainMock = {
    "chain": [{
        "index":1,
        "previous_hash":"1",
        "proof":100,
        "timestamp":1542750336.5598662,
        "transactions":[]
    }],
    "length":1
};

const getChainErrorMock = {
    status: 500,
    response: { message: 'Error'} 
};