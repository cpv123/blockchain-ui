import axios from 'axios';
import buildUrl from '../utils/buildUrl';
import { 
    GET_CHAIN_BEGIN,
    GET_CHAIN_SUCCESS,
    GET_CHAIN_ERROR,
    GET_CHAIN_CLOSE_SNACK,
} from './types';

export const getChainBegin = () => ({
    type: GET_CHAIN_BEGIN,
});

export const getChainSuccess = (response) => ({
    type: GET_CHAIN_SUCCESS,
    payload: response,
});

export const getChainError = (error) => ({
    type: GET_CHAIN_ERROR,
    payload: error,
});

export const getChainCloseSnack = () => ({
    type: GET_CHAIN_CLOSE_SNACK,
});

export default function getChain() {
    return (dispatch) => {

        dispatch(getChainBegin());

        return axios.get(buildUrl('full-chain'))
            .then(response => {
                if (response.status === 200) {
                    dispatch(getChainSuccess(response.data));
                }
            },
            (error) => {
                dispatch(getChainError(error));
                setTimeout(() => dispatch(getChainCloseSnack()), 5000);
            });
    }
}