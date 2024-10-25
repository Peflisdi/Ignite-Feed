import './Header.css'
import igniteLogo from '../../assets/ignite-logo.svg'

export default function Header() {
  return (
    <header className="header">
      <img src={igniteLogo} alt="logo da ingnite" />
    </header>
  )
}
