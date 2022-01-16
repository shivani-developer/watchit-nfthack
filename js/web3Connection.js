const serverUrl = "https://nqtcnz4qkeij.usemoralis.com:2053/server";
const appId = "TWbwVsRVxw7N92uQucUfvJzV5mee6UYxDDyhFlMO";
Moralis.start({ serverUrl, appId });

// add from here down
  async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate();
  }
  console.log("logged in user:", user);
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}


document.getElementById("btn-login").onclick = login;