async function connect() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      console.log('Connected....')
    } catch (error) {
      console.log(error)
    }
    document.getElementById('connectButton').innerHTML = 'Connected'
    const accounts = await ethereum.request({ method: 'eth_accounts' })
    console.log(accounts)
  } else {
    document.getElementById('connectButton').innerHTML =
      'Please install MetaMask'
  }
}
