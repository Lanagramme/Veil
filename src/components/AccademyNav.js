import '../styles/AccademyNav.css'
import Link from "./Link.js"

const accademy = [
  {
    text: "Training",
    url: "/Board"
  },
  {
    text: "Team Clash",
  },
]
const AccademyNav = () => <div className="AccademyNav">
  {
    accademy.map( lien => <Link
      url={lien.url}
      text={lien.text} 
      css='lien_accademy_nav'
    />)
  }
</div>

export default AccademyNav
