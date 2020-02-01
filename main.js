// find the x button
// click the button
// make banner dissapear


function removeBanner() {
  var banner = document.getElementById('remove-me');
  banner.style.display = "none";
}




  //target dashboard border, wallet, profile
  var clipboard = document.querySelector('.clipboard');
  var wallet = document.querySelector('.wallet');
  console.log(wallet);
  var profile = document.querySelector('.profile');
  //add event listener
  wallet.addEventListener('click', walletLight)
  clipboard.addEventListener('click', clipboardLight)
  profile.addEventListener('click', profileLight)
  //if selcted element on; if not selected element off

function walletLight() {
  clipboard.classList.remove('selected')
  wallet.classList.add('selected')
  profile.classList.remove('selected')

}
function clipboardLight() {
  clipboard.classList.add('selected')
  wallet.classList.remove('selected')
  profile.classList.remove('selected')
}
function profileLight() {
  clipboard.classList.remove('selected')
  wallet.classList.remove('selected')
  profile.classList.add('selected')
}


  // if(clipboard === )
  // e.preventDefault()
  // e.target
  // console.log(e.target)
//.classList.remove look up
//
