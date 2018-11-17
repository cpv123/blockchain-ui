import { createSelector } from 'reselect';

const chainSelector = state => state.main.chain.chainData.data.chain;

export const totalBlocksSelector = createSelector(
    chainSelector,
    chain => chain.length
);

export const totalTransactionsSelector = createSelector(
    chainSelector,
    chain => {
        let totalTransactions = 0;
        for (let block of chain) {
            totalTransactions += block.transactions.length;
        }
        return totalTransactions;
    }
);

export const totalAmountSentSelector = createSelector(
    chainSelector,
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