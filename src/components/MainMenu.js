import '../styles/MainMenu.css'
import Link from "./Link.js"


const MainMenu = () => 
  
  <div className="MainMenu App-link">
    <div className='perspective'>
      <div className="BareInfo"></div>
      <div className='Row'>
        <Link 
          url="Accademy"
          image=""
          css="home_link banner"
          text="Accademie"
        />
      </div>
      <div className='Row'>
        <Link 
          url="Covens"
          image=""
          css="home_link simple"
          text='Covens'
        />
        <Link 
          url="Dortoire"
          image=""
          css="home_link simple"
          text="Dortoire"
        />
      </div>
      <div className='Row'>
        <Link 
          url="Grimmoire"
          image=""
          css="home_link wide"
          text='Grimmoire'
        />
      </div>
      <div className='Row'>
        <Link 
          url=""
          image=""
          css="home_link simple"
          text="Missions"
        />
        <Link 
          url=""
          image=""
          css="home_link add"
          text="Clan"
        />
      </div>
    </div>

  </div>

export default MainMenu
