import '../styles/Board.css'
import NavBar from "../components/NavBar.js"


const Plateau = ({colones, lignes }) => {
  const Case =({x,y})=> <div className='Case' id={`x${x}y${y}`}></div>
  const Ligne  =({x,y})=> <div className='Ligne'>
    {[...Array(x)].map((e, i)=> <Case key={i} y={y} x={x}/>)}
  </div>

  return <div className='Plateau'>
    {[...Array(lignes)].map((e, i) => <Ligne y={lignes} x={colones} key={i}/>)}
  </div>
}

const Page = () => {

  return <div className='GameBoard'>
    <div className='boardPerspective'>
      <Plateau colones={11} lignes={7}/>
    </div>
  </div>
}

const Board = () => <>
  <NavBar />
  <Page />
</>

export default Board
