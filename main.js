// find the x button
// click the button
// make banner dissapear


function removeBanner() {
  var banner = document.getElementById('remove-me');
  banner.style.display = "none";
}

  //move colored border in navicons
  //target dashboard border, wallet, profile
  var clipboard = document.querySelector('.clipboard');
  var wallet = document.querySelector('.wallet');
  console.log(wallet);
  var profile = document.querySelector('.profile');
  //add event listener
  wallet.addEventListener('click', walletLight)
  clipboard.addEventListener('click', clipboardLight)
  profile.addEventListener('click', profileLight)
  //if selcted, element on; if not selected, element off

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

//switch between pages when wallet icon clicked
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

//hover and click color change page two
//target the different transaction-button-small buttons
var pageAll = document.querySelector ('.page-all')
var inflow = document.querySelector ('.inflow')
var outflow = document.querySelector ('.outflow')
//create event listeners for each button
pageAll.addEventListener ('click', selectPageAll)
inflow.addEventListener ('click', selectInflow)
outflow.addEventListener ('click', selectOutflow)
  //create functions for if selcted, id element on; if not selected, id element off
function selectPageAll() {
  pageAll.id = 'blue-button'
  inflow.id = ''
  outflow.id = ''
}
function selectInflow() {
  pageAll.id = ''
  inflow.id ='blue-button'
  outflow.id = ''
}
function selectOutflow() {
  pageAll.id = ''
  inflow.id = ''
  outflow.id ='blue-button'
}
