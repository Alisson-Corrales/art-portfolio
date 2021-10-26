import React from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'


export const Navbar = () => {
    library.add()
    return (
        <nav>
            <img src="" alt="logo" />
            <ul className="other-types">
                <li>Digital Art</li>
                <li>Traditional Art</li>
                <li>Ceramics</li>
                <li>Sewing Projects</li>
            </ul>
            <ul className="social-media">
                {/* <FontAwesomeIcon icon="youtube" /> */}
            </ul>
        </nav>
    )
}

export default Navbar