import '../styles/Dortoire.css'
import closeNav from '../actions/closeNav.js'
import NavBar from "../components/NavBar.js"
import { Get } from '../actions/airtable.js'
import { useState } from 'react'

// const characters = [
//   {
//     name: "Syla",
    // elements: ['Terre'],
//     clan: "Accademy"
//   },
//   {
//     name: "Tamara",
//     elements: ["Feu", "Terre"],
//     clan: "Accademy"
//   },
//   {
//     name: "Cendremiaire",
//     elements: ["Order"],
//     clan: "Accademy"
//   },
//   {
//     name: "Alice",
//     elements: ["Feu"],
//     clan: "Misfits"
//   },
//   {
//     name: "Alec",
//     elements: ['Feu', 'Eau', 'Terre', 'Order', 'Chaos'],
//     clan: "Misfits"
//   },
//   {
//     name: "Eliott",
//     elements: ['Eau'],
//     clan: "Misfits"
//   },
//   {
//     name: "Ashe",
//     elements: ['Terre', 'Feu'],
//     clan: "Accademy"
//   },
//   {
//     name: "Paticerise",
//     elements: ['Terre'],
//     clan: "Croissants"
//   },
//   {
//     name: "Phillipa",
//     elements: ['Feu'],
//     clan: "Croissants"
//   },
//   {
//     name: "Malika",
//     elements: ["Eau", 'Feu'],
//     clan: "Songbirds"
//   },
//   {
//     name: "Natasha",
//     elements: ['Eau'],
//     clan: "Songbirds"
//   },
//   {
//     name: "Alexander",
//     elements: ['Feu'],
//     clan: "Ashen"
//   },
//   {
//     name: "Elise",
//     elements: ['Terre'],
//     clan: "Corp."
//   },
//   {
//     name: "Mephir",
//     elements: ['Feu'],
//     clan: "Misfits"
//   },
// ]

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
  .then(x => {
    setCharacters(x)
  })

  return <div className='Dortoire' onClick={closeNav}>
    <div className="charDisplay">
      {
        characters.map(perso => {
          console.log(perso.Element)
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
