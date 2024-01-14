import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/drop.css'
import '../Assets/style.css'


export default function Home() {
    return (
        <div className='container'>
 
            <h2><Link to='/experience' className='drop'>Add Experiences</Link></h2>

            <h2><Link to='/basicInfo' className='drop'>Add Basic Info</Link></h2>
 
            <h2><Link to='/project' className='drop'>Add Projects</Link></h2>
 
            <h2><Link to='/skill' className='drop'>Add Skills</Link></h2>

        </div>
    )
}
