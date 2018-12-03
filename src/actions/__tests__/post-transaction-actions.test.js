import {
    postTransactionBegin,
    postTransactionSuccess,
    postTransactionError,
    postTransactionCloseSnack
} from '../post-transaction-actions';
import * as types from '../types';

describe('the post transaction action creators', () => {
    it('should create an action to begin posting the transaction', () => {
        const expectedAction = {
            type: types.POST_TRANSACTION_BEGIN,
        };
        expect(postTransactionBegin()).toEqual(expectedAction);
    });
    it('should create an action to indicate success', () => {
        const payload = "success";
        const expectedAction = {
            type: types.POST_TRANSACTION_SUCCESS,
            payload,
        };
        expect(postTransactionSuccess(payload)).toEqual(expectedAction);
    });
    it('should create an action to indicate error', () => {
        const payload = "error";
        const expectedAction = {
            type: types.POST_TRANSACTION_ERROR,
            payload,
        };
        expect(postTransactionError(payload)).toEqual(expectedAction);
    });
    it('should create an action to close the snack', () => {
        const expectedAction = {
            type: types.POST_TRANSACTION_CLOSE_SNACK,
        };
        expect(postTransactionCloseSnack()).toEqual(expectedAction);
    });
})