import axios from 'axios';
import { buildUrl } from '../utils/buildUrl';
import { 
    GET_CHAIN_BEGIN,
    GET_CHAIN_SUCCESS,
    GET_CHAIN_ERROR,
} from './types';

const getChainBegin = () => ({
    type: GET_CHAIN_BEGIN,
});

const getChainSuccess = (response) => ({
    type: GET_CHAIN_SUCCESS,
    payload: response,
});

const getChainError = (error) => ({
    type: GET_CHAIN_ERROR,
    payload: error,
});

export default function getChain() {
    return (dispatch) => {

        dispatch(getChainBegin());

        return axios.get(buildUrl('full-chain'))
            .then(response => {
                if (response.status === 200) {
                    dispatch(getChainSuccess(response));
                }
            },
            (error) => {
                dispatch(getChainError(error))
            });
    }
}