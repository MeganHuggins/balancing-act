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

//target the outter and inner main elements
var inner = document.querySelector ('.inner');
var outer = document.querySelector ('.outer')
//create addEventListener for wallet and clipboard button
wallet.addEventListener('click', switchPage)
clipboard.addEventListener ('click', switchPageBack)
//create function to switch switchPage and switchPageBack
function switchPage() {
  outer.hidden = true
  inner.hidden = false
}
function switchPageBack() {
  outer.hidden = false
  inner.hidden = true
}
