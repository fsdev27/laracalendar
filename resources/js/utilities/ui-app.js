// change ui App when navbar toggle
export const onNavbarToggle = (value) => {
  if (!value) {
    document.querySelector('.app').style.gridTemplateColumns = '1fr'
    document.querySelector('.navbar').style.marginLeft = 0
    document.querySelector('.container').style.marginLeft = 0
  } else {
    document.querySelector('.app').style.gridTemplateColumns = '1fr 140px'
    document.querySelector('.navbar').style.marginLeft = '140px'
    document.querySelector('.container').style.marginLeft = '140px'
  }
}
