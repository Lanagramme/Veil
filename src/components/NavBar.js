import "../styles/NavBar.css"
// import Link from '../components/Link.js'
import {useNavigate} from 'react-router-dom'
import { Compas, BackArrow } from '../components/SVG.js'

const NavBar =()=>{
  function handleClick() {
    document.querySelector('.Nav').classList.toggle('actif')
  }
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
    return <>
      <div className="Nav">
        <div className="buttons">
          <div 
            onClick={goBack}
            className="retour NavButton"
          ><BackArrow/></div>
          <div 
            onClick={handleClick}
            className="NavButton navMap "
          ><Compas/></div>
        </div>
      </div>
    </>
} 
export default NavBar
