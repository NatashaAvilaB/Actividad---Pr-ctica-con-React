import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/count">Contador</Link>
            <Link to="/profile">Perfil</Link>
        </nav>
    )
}
export default Nav