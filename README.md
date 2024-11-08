### HANAFUDA NETWORK BOT

![hana](assets/hana.jpeg)

Hanafuda Bot is a powerful tool designed for you to automate hanafuda retroactive airdrop.

---

## BOT FEATURE

- Multi Account 
- Support PK & SEED
- Support ARB or BASE Network
- Auto Deposit
- Auto Grow
- Auto Draw Hanafuda (If you have 10 Draw)


## HANAFUDA RETROACTIVE

New Retroactive: Hana Network

➡️ Connect: https://hanafuda.hana.network/dashboard
- Login With Google
- Connect Metamask 
- Add Any Amount Of ETH Recomend Use ARB or Base eth (Low fee) i recomend add 0.00001 ETH because hanafuda withdrawal is not open yet, it will open on Q1 2025
- Go to Dasboard 
- Click Grow or Draw Hanafuda
- Done LFG

📖 Hana Backed By : https://crypto-fundraising.info/projects/hana-network/

---

## SETUP & CONFIGURE BOT

### LINUX
1. Clone project repo
   ```
   git clone https://github.com/Rambeboy/HANAFUDA.git && cd HANAFUDA
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
   
---

### WINDOWS
1. Open your `Command Prompt` or `Power Shell`.
2. Clone project repo
   ```
   git clone https://github.com/Rambeboy/HANAFUDA.git && cd HANAFUDA
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
    npm start
    ```

---

## UPDATE BOT

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


---

## NOTE

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


---
