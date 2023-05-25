import { NavLink } from 'react-router-dom'
import "../styles/Link.css"

const Link = ( { url, image, css, text, action } ) => <NavLink
  to={ url ? url : '' }
  className={ css }
  onClick={ action }
>
{ text } 
</NavLink>

export default Link
