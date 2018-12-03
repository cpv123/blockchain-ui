import { createSelector } from 'reselect';

const getChain = state => state.main.chain.chainData.chain;

export const getTotalBlocks = createSelector(
    getChain,
    chain => chain.length
);

export const getTotalTransactions = createSelector(
    getChain,
    chain => {
        let totalTransactions = 0;
        for (let block of chain) {
            totalTransactions += block.transactions.length;
        }
        return totalTransactions;
    }
);

export const getTotalAmountSent = createSelector(
    getChain,
    chain => {
        let totalAmountSent = 0;
        for (let block of chain) {
            for (let transaction of block.transactions) {
                totalAmountSent += transaction.amount
            }
        }
        return totalAmountSent;
    }
);
