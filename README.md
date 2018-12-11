# What does a blockchain look like in React?

A project to learn the basics of Redux, whilst also learning a bit about how blockchains work. <br />

Credit goes to [@dvf](https://github.com/dvf) for the awesome [Python blockchain](https://github.com/dvf/blockchain), here used (with slight modification) to allow:

  1. Adding new transactions to the next block <br />
  2. Mining a new block giving a reward transaction <br />
  3. Viewing the entire blockchain - each block, with details and transactions <br />

<img src="https://media.giphy.com/media/1nc2L95WOfL2scaVtT/giphy.gif" />

## Requirements
1.  [Node v8](https://www.nodejs.org/en/download//) or above
2.  [Python 3.6](https://www.python.org/downloads/) or above 

## To get up and running

1.  Check above requirements and clone this repo <br />
2.  In the `server` folder: install dependencies with `pip3 install -r requirements.txt` and run the blockchain at `http://localhost:5000` with `python3 blockchain.py`
3.  In the root directory: install frontend dependencies with `npm install` and once finished, run `npm start` to see the app at `http://localhost:3000`