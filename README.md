# HANAFUDA BOT
Hanafuda Bot is a powerful tool designed for you to automate hanafuda retroactive airdrop.

## Table Of Contents
- [HANAFUDA BOT](#hanafuda-bot)
  - [Table Of Contents](#table-of-contents)
  - [Prerequisite](#prerequisite)
  - [Join My Telegram Channel](#join-my-telegram-channel)
  - [BOT FEATURE](#bot-feature)
  - [HANAFUDA RETROACTIVE](#hanafuda-retroactive)
  - [Setup \& Configure BOT](#setup--configure-bot)
    - [Linux](#linux)
    - [Windows](#windows)
  - [Update Bot](#update-bot)
  - [NOTE](#note)
  - [Where you get refresh token ?](#where-you-get-refresh-token-)
  - [CONTRIBUTE](#contribute)
  - [SUPPORT](#support)

## Prerequisite
- Git
- Node JS (v22)

## Join My Telegram Channel
```
                                                          
                      ...                                 
                     .;:.                                 
                    .;ol,.                                
                   .;ooc:'                                
            ..    .;ooccc:'.    ..                        
          .',....'cdxlccccc;.....,'.                      
         .;;..'';clolccccccc:,''..;;.                     
        ':c'..':cccccccccccccc;...'c:.                    
       ':cc,.'ccccccccccccccccc:..;cc:'                   
    ...:cc;.':cccccccccccccccccc:..:cc:...                
   .;';cc;.':;;:cccccccccccccc:;;;'.;cc,,;.               
  .cc':c:.',.....;cccccccccc;.....,..:c:'c:               
  ,x:'cc;.,'     .':cccccc:'.     ',.;cc':x'              
  lO,'cc;.;,       .;cccc:.       ,;.;cc';0l              
 .o0;.;c;.,:'......',''''''......':,.;c;.:0l.             
 .lxl,.;,..;c::::;:,.    .,:;::::c;..,;.,oxl.             
 .lkxOl..  ..'..;::'..''..'::;..'..  ..c0xkl.             
  .cKMx.        .;c:;:cc:;:c:.        .xMKc.              
    ;KX:         ;o::l:;cc;o:.        ;KK;                
     :KK:.       ,d,cd,'ol'o:       .:0K:                 
      ;0NOl:;:loo;. ... .. .;ldlc::lkN0:                  
       .lONNNKOx0Xd,;;'.,:,lKKkk0XNN0o.                   
         .','.. .lX0doooodOXd.  .','.                     
                 .,okkddxkd;.                             
                    'oxxd;.                               
   ........................................                              
   .OWo  xNd lox  xxl Ald   xoc dakkkkkxsx.              
   .OWo  o0W cXW  dM0 MMN   lNK laddKMNkso.               
   .kMKoxsNN oWX  dW0 MMMWO lWK    axM0   .                
   .OMWXNaMX dM0  kM0 MMKxNXKW0    axMk   .                 
   .OMk  dWK oWX XWdx Mxx  XMMO    akMx   .                 
   'OWo  dM0 'kNNXNNd DMD   OWk    aoWd   .                 
   ........................................

```           
                                              
                                              

Anyway i create new telegram channel just for sharing bot or airdrop, join here
[**https://t.me/skeldrophunt**](https://t.me/skeldrophunt).


## BOT FEATURE
- Multi Account 
- Support PK & SEED
- Support ARB or BASE Network
- Auto Deposit
- Auto Grow
- Auto Draw Hanafuda (If you have 10 Draw)


## HANAFUDA RETROACTIVE
#New Retroactive: Hana Network
➡️ Connect: https://hanafuda.hana.network/dashboard
- Login With Google
- Enter Code : ```8QPSG8```
- Connect Metamask 
- Add Any Amount Of ETH Recomend Use ARB or Base eth (Low fee) i recomend add 0.00001 ETH because hanafuda withdrawal is not open yet, it will open on Q1 2025
- Go to Dasboard 
- Click Grow or Draw Hanafuda
- Done LFG

📖 Hana Backed By : https://crypto-fundraising.info/projects/hana-network/

## Setup & Configure BOT

### Linux
1. Clone project repo
   ```
   git clone https://github.com/Widiskel/hanafuda-bot.git && cd hanafuda-bot
   ```
2. Run
   ```
   npm install && npm run setup
   ```
3. Configure your accounts
   ```
   nano accounts/accounts.js
   ```
4. Configure the bot config
   ```
   nano config/config.js
   ```
5. Configure the proxy
   ```
   nano config/proxy_list.js
   ```
6. Run Bot
   ```
   npm run start
   ```
   
### Windows
1. Open your `Command Prompt` or `Power Shell`.
2. Clone project repo
   ```
   git clone https://github.com/Widiskel/hanafuda-bot.git && cd hanafuda-bot
   ```
3. Run 
   ```
   npm install && npm run setup
   ```
5. Navigate to `hanafuda-bot` directory. 
6. Navigate to `accounts` folder and rename `accounts_tmp.js` to `accounts.js`.
7. Now open `acccounts.js` and setup your accounts.
8. Navigate to `config` and adjust the `config.js` as needed.
9. Also Configure proxy if you want to use proxy, by open `proxy_list.js`. (if you have 5 accounts, proxy is required)
10. Back to `hanafuda-bot` directory.
11. To start the app open your `Command Prompt` or `Power Shell`
12. Run Bot
    ```
    npm run start
    ```

## Update Bot

To update bot follow this step :
1. run
   ```
   git pull
   ```
   or
   ```
   git pull --rebase
   ```
   if error run
   ```
   git stash && git pull
   ```
2. run
   ```
   npm update
   ```
2. start the bot


## NOTE
DWYOR

the accounts writted with this format

![photo_2024-10-27_21-01-16](https://github.com/user-attachments/assets/dfeb964a-9c14-42e8-8ff5-6ccb35de0903)

## Where you get refresh token ? 
- Open hanafuda website and logout from your account.
- After that open browser developer tool / inspect element
- Go to network Tab
- Try to login again with your google accounts
- Find a XHR/Fetch request with this url `https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=`
- Click the request and open the response tab / preview tab
- You will get `refreshToken` from that, copy to the bot accounts
  ``` starts with AMf-xxxxx ```
- Make sure you've connect your wallet so your Wallet and Hanafuda account is binded
  === or ===
 Inspect -> Appication tab -> Session Storage -> http://hanafuda.hana....
![photo_2024-10-27_21-07-20](https://github.com/user-attachments/assets/2d66ace2-c330-4ee1-8829-8ecd37ffbafe)



## CONTRIBUTE

Feel free to fork and contribute adding more feature thanks.

## SUPPORT

want to support me for creating another bot ?
**star** my repo or buy me a coffee on

EVM : `0x1f0ea6e0b3590e1ab6c12ea0a24d3d0d9bf7707d`

SOLANA : `3tE3Hs7P2wuRyVxyMD7JSf8JTAmEekdNsQWqAnayE1CN`
