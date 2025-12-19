import logo from '../../assets/logo-rute-prazeres.png'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <a>
                    <img src={logo} alt="Logo Rute Prazeres" />
                </a>
            </div>
            <div className="navbar-center">
                <ul className="nav-links">
                    <li><a href="/servicos">Serviços</a></li>
                    <li><a href="/precos">Preços</a></li>
                    <li><a href="/sobre">Sobre Nós</a></li>
                    <li><a href="/contactos">Contactos</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <button>Marcar Consulta</button>
            </div>
        </nav>
    )
}