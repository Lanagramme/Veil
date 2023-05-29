import '../styles/Dortoire.css'
import closeNav from '../actions/closeNav.js'
import NavBar from "../components/NavBar.js"
import { Get, Set} from '../actions/airtable.js'

// console.log(Get)
// console.log(Set)
Get.Element()
.then(x => console.log(x))


const characters = [
  {
    name: "Syla",
    elements: ['Terre'],
    clan: "Accademy"
  },
  {
    name: "Tamara",
    elements: ["Feu", "Terre"],
    clan: "Accademy"
  },
  {
    name: "Cendremiaire",
    elements: ["Order"],
    clan: "Accademy"
  },
  {
    name: "Alice",
    elements: ["Feu"],
    clan: "Misfits"
  },
  {
    name: "Alec",
    elements: ['Feu', 'Eau', 'Terre', 'Order', 'Chaos'],
    clan: "Misfits"
  },
  {
    name: "Eliott",
    elements: ['Eau'],
    clan: "Misfits"
  },
  {
    name: "Ashe",
    elements: ['Terre', 'Feu'],
    clan: "Accademy"
  },
  {
    name: "Paticerise",
    elements: ['Terre'],
    clan: "Croissants"
  },
  {
    name: "Phillipa",
    elements: ['Feu'],
    clan: "Croissants"
  },
  {
    name: "Malika",
    elements: ["Eau", 'Feu'],
    clan: "Songbirds"
  },
  {
    name: "Natasha",
    elements: ['Eau'],
    clan: "Songbirds"
  },
  {
    name: "Alexander",
    elements: ['Feu'],
    clan: "Ashen"
  },
  {
    name: "Elise",
    elements: ['Terre'],
    clan: "Corp."
  },
  {
    name: "Mephir",
    elements: ['Feu'],
    clan: "Misfits"
  },
]

const elemntor = ( lmt )=> {
  switch(lmt) {
    case 'Air': 
      return "💨";
    case 'Eau': 
      return "💧";
    case 'Terre': 
      return "🌱";
    case 'Feu': 
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
    {  perso.elements.map( (lmt, i) => <div key={i} className={`lmt ${lmt}`}>{ elemntor(lmt) }</div> )}
  </div>
  <div className="charInfo">
    <p>{ perso.name }</p>
    <p>{ perso.clan }</p>
  </div>
</div>

const Page = () => <div className='Dortoire' onClick={closeNav}>
  <div className="charDisplay">
    {
      characters.map(perso => <Character perso={perso} key={perso.name}/>)
    }
  </div>

</div>

const Dortoire = () => <>
  <NavBar />
  <Page />
</>

export default Dortoire
