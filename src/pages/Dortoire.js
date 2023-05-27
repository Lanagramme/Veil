import { Client } from "@notionhq/client"
import { useState } from 'react'

import '../styles/Dortoire.css'

import closeNav from '../actions/closeNav.js'
import NavBar from "../components/NavBar.js"

const notion = new Client({ auth: process.env.NOTION_KEY })
const databaseId = process.env.NOTION_DATABASE_ID

let characters = [
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
console.log(notion)

const Page = () => {
  const [chars, setChars] = useState(characters)

  notion.databases.query({
    database_id: databaseId
  }).then(x => {
    const list = []

    for (let index = 0; index < x.results.length; index++) {
      let char = {
        affiliation:[],
        orientation:[],
        element:[],
        specialisation:[],
      }
      char.name = x.results[index].properties.Name.title[0].text.content
      char.affiliation = []
      x.results[index].properties.Affiliation.multi_select.map(x => char.affiliation.push(x.name))
      x.results[index].properties.Orientation.multi_select.map(x => char.clan.push(x.name))
      x.results[index].properties.Element.multi_select.map(x =>     char.elements.push(x.name))
      x.results[index].properties.Specialisation.multi_select.map(x => char.specialisation.push(x.name))
      list.push(char)
    }
    setChars(list)
  })



  return <div className='Dortoire' onClick={closeNav}>
  <div className="charDisplay">
    {
      chars.map(perso => <Character perso={perso} key={perso.name}/>)
    }
  </div>

</div>
}

const Dortoire = () => <>
  <NavBar />
  <Page />
</>

export default Dortoire
