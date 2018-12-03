import axios from 'axios';
import buildUrl from '../utils/buildUrl';
import { 
    MINE_BLOCK_BEGIN,
    MINE_BLOCK_SUCCESS,
    MINE_BLOCK_ERROR,
    MINE_BLOCK_CLOSE_SNACK,
} from './types';

export const mineBlockBegin = () => ({
    type: MINE_BLOCK_BEGIN,
});

export const mineBlockSuccess = (response) => ({
    type: MINE_BLOCK_SUCCESS,
    payload: response,
});

export const mineBlockError = (error) => ({
    type: MINE_BLOCK_ERROR,
    payload: error,
});

export const mineBlockCloseSnack = () => ({
    type: MINE_BLOCK_CLOSE_SNACK,
});


export default function mineBlock() {
    return (dispatch) => {

        dispatch(mineBlockBegin());

        return axios.get(buildUrl('mine'))
            .then(response => {
                if (response.status === 200) {
                    dispatch(mineBlockSuccess(response));
                    setTimeout(() => dispatch(mineBlockCloseSnack()), 5000);
                }
            },
            (error) => {
                dispatch(mineBlockError(error));
                setTimeout(() => dispatch(mineBlockCloseSnack()), 5000);
            });
    }
}