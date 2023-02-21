function swapMode(){
  const html = document.documentElement
  html.classList.toggle('ligth')

  //substituir minha fotinha no ligth mode
  //pegar tag html
  const img = document.querySelector("#profile-me img")
  if(html.classList.contains('ligth')){
  //trocar foto do ligth mode
  img.setAttribute('src','./img/me.png')
  }else{
  //sem ligth mode
  img.setAttribute('src','./img/avatar.png')
  }

  if(html.classList.contains('ligth')){
  //trocar foto do ligth mode
  img.setAttribute('alt','Minha foto no ligth mode')
  }else{
  //sem ligth mode
  img.setAttribute('alt','./img/avatar.png')
  }
}