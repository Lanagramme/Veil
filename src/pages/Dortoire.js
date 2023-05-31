import '../styles/Dortoire.css'
import NavBar from "../components/NavBar.js"
import { Get } from '../actions/airtable.js'
import { useState } from 'react'

const elemntor = ( lmt )=> {
  switch(lmt) {
    case 'Air': 
      return "💨";
    case 'Water': 
      return "💧";
    case 'Earth': 
      return "🌱";
    case 'Fire': 
      return "🔥";
    case 'Order': 
      return "🌞";
    case 'Chaos': 
      return "🌕";
    default:
      return
  }
}

const Character = ( {perso} ) => <div className="character">
  <div className="elements">
    {  perso.Element.split(',').map( (lmt, i) => <div key={i} className={`lmt ${lmt}`}>{ elemntor(lmt) }</div> )}
  </div>
  <div className="charInfo">
    <p>{ perso.Name }</p>
    <p>{ perso.Affiliation }</p>
  </div>
</div>

const Page = () => {
  const [characters, setCharacters] = useState([])
  Get.Character()
  .then(x => characters.length || setCharacters(x) )

  return <div className='Dortoire'>
    <div className="charDisplay">
      {
        characters.map(perso => {
          return <Character perso={perso} key={perso.name}/>
        })
      }
    </div>

  </div>
}

const Dortoire = () => <>
  <NavBar />
  <Page />
</>

export default Dortoire
