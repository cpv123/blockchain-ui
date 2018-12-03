import {
    mineBlockBegin,
    mineBlockSuccess,
    mineBlockError,
    mineBlockCloseSnack,
} from '../mine-block-actions';
import * as types from '../types';

describe('the mine block action creators', () => {
    it('should create an action to begin mining the block', () => {
        const expectedAction = {
            type: types.MINE_BLOCK_BEGIN,
        };
        expect(mineBlockBegin()).toEqual(expectedAction);
    });
    it('should create an action to indicate success', () => {
        const payload = "success";
        const expectedAction = {
            type: types.MINE_BLOCK_SUCCESS,
            payload,
        };
        expect(mineBlockSuccess(payload)).toEqual(expectedAction);
    });
    it('should create an action to indicate error', () => {
        const payload = "error";
        const expectedAction = {
            type: types.MINE_BLOCK_ERROR,
            payload,
        };
        expect(mineBlockError(payload)).toEqual(expectedAction);
    });
    it('should create an action to close the snack', () => {
        const expectedAction = {
            type: types.MINE_BLOCK_CLOSE_SNACK,
        };
        expect(mineBlockCloseSnack()).toEqual(expectedAction);
    });
})
