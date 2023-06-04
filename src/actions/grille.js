function RNG(max) { return Math.floor(Math.random() * Math.floor(max)); }

// const _distance=(depart, arrivee)=>{
  // return Math.abs(depart.x - arrivee.x) + Math.abs(depart.y - arrivee.y)
// }
const _Game = {
  colone_max: 0,
  ligne_max: 0,
  caseActive : '',
  coordonnees_aleatoires() { 
    return { 
      x : RNG(this.colone_max-1)+1, 
      y : RNG(this.ligne_max-1 )+1 
    } 
  },
  setActive(coord) {
    this.caseActive = this.grille[coord]
  }
}
_Game.grille = {}

//------ informations du plateau ------
_Game.coordonnees_to_querySelector =(coordonnees)=> {
  return `.x${coordonnees.x}.y${coordonnees.y}`
}
_Game.coordonnees_from_classes =(classes)=> {
  return { 
    x: Number(classes[1].split('x')[1]),
    y: Number(classes[2].split('y')[1]) 
  }
}
_Game.coordonnees_to_key = (coord) => {
  return `x${coord.x}y${coord.y}`
}

// origin est un objet Case aire est un objet contenant une forme et un chiffre
// aire = { type: string, portee: num, vue: bool}
const getArea = (origin, aire)=> {
  let area = [origin]
  let horizontal =(i)=> { return [ { x: i.x+1, y: i.y }, { x: i.x-1, y: i.y } ]}
  let vertical   =(i)=> { return [ { x: i.x, y: i.y+1 }, { x: i.x, y: i.y-1 } ]}
  let cardinal   =(i)=> { return horizontal(i).concat(vertical(i))}

  switch(aire.type){
    case 'cercle':
      for (let j=0; j<aire.portee; j++){
        let foo = area.length
        for (let i = 0; i<foo; i++){
          let directions = cardinal(_Game.grille[area[i]])
          for (let k = 0; k < directions.length; k++) {
            let element = directions[k];
            element = _Game.coordonnees_to_key(element) 
            if (_Game.grille.hasOwnProperty(element)){
              if(!aire.vue)
                area.push(element)
              else if(aire.vue && document.querySelectorAll(_Game.coordonnees_to_querySelector(element)).html() === "")
                area.push(element)
            }
          }
          area = Array.from(new Set(area))
        }
      }
      break;
    case 'ligne':
      area = area.concat(cardinal(origin))
      for (let j= 0; j<aire.portee-1; j++){
        let foo = area.length
        for (let i = 0; i<foo; i++){
          if (area[i].y === origin.y){ area = area.concat(horizontal(area[i])) }
          else  { area = area.concat(vertical(area[i])) }
        }
        area = Array.from(new Set(area))
      }
      break;
    case '':
      break;
    default: 
      break;
  }
  return area
  
}
_Game.clearBoard = () => {
  const all = document.getElementsByClassName('Case')
  for (let i = 0; i < all.length; i++) {
    const _case = all[i];
    _case.classList.remove('attack')
    _case.classList.remove('movement')
    _case.classList.remove('active')
  }
}
_Game.drawArea =(classe, aire)=>{
  _Game.clearBoard()

  let portee = []
  if (classe === 'attack'){
   portee = getArea(_Game.caseActive.coord, aire)
  }
  else {
    portee = getArea(_Game.caseActive.coord, aire)
  }
  for (let i of portee){
    document.getElementById(i).classList.add(classe)
  }
}

export default _Game
