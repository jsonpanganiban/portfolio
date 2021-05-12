import "../../global.scss"
import "./navbar.scss"
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">

        <div className="left">
          <a href="#intro" className="logo">jsoncp.</a>
          <div className="itemContainter">
            <PersonSharpIcon className="icon" />
            <span>+61 446111211</span>
          </div>
          <div className="itemContainer">
            <EmailSharpIcon className="icon" />
            <span>jsoncp@protonmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
