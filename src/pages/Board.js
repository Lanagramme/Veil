import '../styles/Board.css'
import _Game from '../actions/grille.js'
import NavBar from "../components/NavBar.js"

const grille = _Game.grille
_Game.colone_max = 10
_Game.ligne_max = 7
const grid= [
  {coord:'x2y2', char:'Manequin1'},
  {coord:'x4y5', char:'Manequin2'},
  {coord:'x6y6', char:'Manequin3'}
]
const temp = []
for (let cc of grid) {
  let i = 0  
  do {
    i = _Game.coordonnees_aleatoires()
  } while (temp.includes(i))
  temp.push(i)
  cc.coord = _Game.coordonnees_to_key(i)
}
console.log(temp)


const Plateau = ({colones, lignes, pion }) => {
  const move =()=>{
    const aire = {portee: "4", type: 'cercle', vue: false}
    setTimeout(function(){
    _Game.drawArea('movement',aire)
    }, 100);
  }
  const Pion =({charname})=> <div className={'pion '+ charname} onClick={move}></div>

  const getPion=(coord)=>{
    const character = grid.find(x => x.coord === coord)
    grille[coord].char = character.char 
    grille[coord].coord = coord
    return <Pion charname={character.char} />
  }

  const Case =({x,y})=> {
    grille[`x${x}y${y}`] = {x, y, char : 0 } 
    const activate = ()=> {
      _Game.clearBoard()
      document.querySelector(`#x${x}y${y}`).classList.toggle('active')
      _Game.setActive(`x${x}y${y}`)
    }

    return <div className='Case' id={`x${x}y${y}`} onClick={activate}>
      { pion.includes(`x${x}y${y}`) && getPion(`x${x}y${y}`)}
    </div>
   }

  const Ligne  =({x,y,i})=> <div className='Ligne'>
    {[...Array(x)].map((e, j)=> <Case key={j} y={i} x={j}/>)}
  </div>

  return <div className='Plateau'>
    {[...Array(lignes)].map((e, i) => <Ligne i={i} y={lignes} x={colones} key={i}/>)}
  </div>
}

const Page = () => {

  return <div className='GameBoard'>
    <div className='boardPerspective'>
      <Plateau colones={11} lignes={7} pion={grid.map(x => x.coord)}/>
    </div>
  </div>
}

const Board = () => <>
  <NavBar />
  <Page />
</>

export default Board
