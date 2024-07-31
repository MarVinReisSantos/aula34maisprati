import './style.css'

function Header() {
  return (
    <nav className='header'>
     <div className='logo-image'>Logo</div>
      <div className="navContainer">
        <a className="navItem">Empresa</a>
        <a className="navItem">Contato</a>
        <a className="navItem">Serviços</a>
        <a className="navItem">Vagas</a>
      </div>
    </nav>
  )
}

export default Header
