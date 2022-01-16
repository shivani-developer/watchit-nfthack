async function deployNFTContract() {
    var name = "nfthack-gold-test";
    var symbol = "GT";
    var address = "0xd35116ec863e37cfa36aa860955A2D42fFFa7F03";
  
  
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "a1b2c3");
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "chain": "polygon",
      "name": "nfthack-gold-test",
      "symbol": "GT",
      "owner_address": "0xd35116ec863e37cfa36aa860955A2D42fFFa7F03"
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch("https://api.nftport.xyz/v0/contracts", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    // const request = `https://api.opensea.io/api/v1/assets?owner=${address}`;
    // const response = await fetch(request);
  
    // const myJson = await response.json();
    // App.assets = myJson.assets; // make a k/v mapping?
    // console.log(App.assets)
  
    // // console.log(myJson.assets)
    // if (myJson.assets.length == 0) {
    //     // case when no NFTs yet
    //     // link to some places to buy NFTs
    // }
  
    // App.processAssets(App.assets);
    // console.log("logged in user:", user);
  }
  
  async function mintNFT() {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "a1b2c3");
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "chain": "polygon",
        "contract_address": "0xA04a464bc4a5D12B41D6aFd9b37452EA7d4e292F",
        "metadata_uri": "ipfs://bafkreihftykhfmcbs25prxau7n6d64xqosfddbi6yzoayrqhinjlzafu2q",
        "mint_to_address": "0xd35116ec863e37cfa36aa860955A2D42fFFa7F03"
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("https://api.nftport.xyz/v0/mints/customizable", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
  
    async function uploadMetadata() {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "a1b2c3");
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "name": "My Art",
        "description": "This is my custom art piece",
        "file_url": "https://ipfs.io/ipfs/QmRModSr9gQTSZrbfbLis6mw21HycZyqMA3j8YMRD11nAQ"
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("https://api.nftport.xyz/v0/metadata", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
  
    async function retrieveDeployedContract() {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "a1b2c3");
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch("https://api.nftport.xyz/v0/contracts/0xb9b97e135decbe6ae8405670191beafb184975b93d86bee9e0247c1729d71653?chain=polygon", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
  
    async function retrieveMintedNFTStatus() {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "a1b2c3");
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch("https://api.nftport.xyz/v0/mints/0x3d7861fd473f3f2fd9276b6bb899ceb249860a096e1d05327f72bf15ea1684a5?chain=polygon", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
  
    async function retrieveMintedNFTFromAddress() {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "a1b2c3");
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch("https://api.nftport.xyz/v0/accounts/0xd35116ec863e37cfa36aa860955A2D42fFFa7F03?chain=polygon", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    document.getElementById("w-node-_869665eb-7f20-e6dd-da37-faf50893abd3-19474dff").onclick = mintNFT;
    document.getElementById("w-node-_3fa41b9b-010e-182c-9c3b-b6fe3f87376e-19474dff").onclick = deployNFTContract;