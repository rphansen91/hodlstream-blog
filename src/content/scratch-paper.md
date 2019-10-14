---
title: Scratch Paper
publishedAt: 2019-10-06
description: Scratch Paper takes the concept of excercises from classical education and applies a reward system from staked ERC20 tokens to incentize readers to dig deeper into the project and utilize it's technology.
author: Ryan P. Hansen
urlToImage: ""
sourceName: Hodl Stream
path: /scratch-paper
---
The first thing any new Crypto Currency start up begins with is a "white paper". These are popular in the academic community but for common investors not enough to drive usage of the underlying concepts. Scratch Paper takes the concept of excercises from classical education and applies a reward system from staked ERC20 tokens to incentize readers to dig deeper into the project and utilize it's technology.

## WHY

Adoption for block chain technology is low because of the many reasons and education is at least in the Top 5. 

Education is a necesarry burrier to overcome for mass adoption and current tooling (Ethereum, Cosmos, Tendermint, Chainlink) is available to provide a more plugable learning architecture than the first generation systems provided.

Second layer solution - Tendermint, Chainlink

    - Proffesors at an online schools can validate students answers and ensure they have grasped the underlying content without forgery. 

    - Authoritative validators in specified 
    niches create cosmos hubs that provide content, and stake questions. (CNN, MSNBC, FOX all on one feed)

    - Possible source for unbiased opinion

## HOW

Double answer problem? - Signed answers
    
    - For non capital required solutions such as (textbooks, online courses, restaurant reviews) the cryptographic signature will suffice as all answers can be submitted on chain once at the end of the course.

    - Answers cannot have a (yes no) or (a, b, c, d)  
        - Capital intensive solutions, (Debate boards, order books) these answers need to be more gray area, and up for interpretation.
        - Captcha
        - Polls
        - Hilary v. Trump

Forged answer problem? 

    - On chain?
        - This means the question needs to be worth more than the gas

    - Honor system?
        - If honor system no actual value could be transacted?

    - Would anyone pay the gas fees?
    
    - This is solved by the merkle proof of the exam (all signed answers from student), forgeries on the second layer will be found when the validators notice a duplicate amongst their gossip.

    - At the end of the quarter a student would submit their merkle proof to a validator and this the fees associated with the proof.

    - Anyone can take the exams as much as they want but the need to pay a fee to get it graded and gossiped between the validators.

    - All schools remain in constant contact and are held accountable to one another the exam scores from one school.


## TENDERMINT

- How to seed validators (Tendermint needs at least 4 for BFT)

## CHAINLINK

- Once the validators come to consensus they will write to their Scratch Sheets Smart Contract the address and the result and commit this to the ethereum chain. Scratch paper delivered one mechanism to provide such a transaction in the previous section on tendermint but makes no assumptions on the mechanism used.

- The block chain becomes the source of truth and rewards or other smart contracts can be triggered as a result of the ledger entry.

## DOCKER

Docker is a language that tells machins how to run tendermint or any process on any machine. With docker templates, niches in any field can run hubs on their internal networks to test the system. The ideal use case being incentiving students to retain knowlegde by putting the underlying knowledge to use.

## CONCLUSION

Professors do not have time to spin up tendermint consensus nodes and connect them to their colleagues and write smart contracts. Scratch Sheet combines the white paper with thousands of years of teaching experience.