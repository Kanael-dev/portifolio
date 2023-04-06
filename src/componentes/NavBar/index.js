import './NavBar.css'

const NavBar = () =>{
    return(
        <header className='menu-inicio'>
            <h4>Kanael Kenny de Aquino</h4>
            <ul className='lista'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#sobre'>Sobre mim</a></li>
                <li><a href='#projetos'>Projetos</a></li>
                <li><a href='#contato'>contato</a></li>
            </ul>
        </header>
    )
}

export default NavBar