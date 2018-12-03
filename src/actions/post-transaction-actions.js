import axios from 'axios';
import buildUrl from '../utils/buildUrl';
import { 
    POST_TRANSACTION_BEGIN,
    POST_TRANSACTION_SUCCESS,
    POST_TRANSACTION_ERROR,
    POST_TRANSACTION_CLOSE_SNACK,
} from './types';

export const postTransactionBegin = () => ({
    type: POST_TRANSACTION_BEGIN,
});

export const postTransactionSuccess = (response) => ({
    type: POST_TRANSACTION_SUCCESS,
    payload: response,
});

export const postTransactionError = (error) => ({
    type: POST_TRANSACTION_ERROR,
    payload: error,
});

export const postTransactionCloseSnack = () => ({
    type: POST_TRANSACTION_CLOSE_SNACK,
});

export default function postTransaction(values) {
    
    return (dispatch) => {

        dispatch(postTransactionBegin());

        return axios.post(buildUrl('transactions/new'), values)
            .then(response => {
                if (response.status === 201) {
                    dispatch(postTransactionSuccess(response));
                    setTimeout(() => dispatch(postTransactionCloseSnack()), 5000);
                }
            },
            (error) => {
                dispatch(postTransactionError(error));
                setTimeout(() => dispatch(postTransactionCloseSnack()), 5000);
            });
    }
}