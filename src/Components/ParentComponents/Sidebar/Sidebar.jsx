import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar({ role }) {
    return (
        <aside className='menu p-6'>
            {role === 'admin' &&
                <>
                    <p className="menu-label">
                        General
                    </p>
                    <ul className="menu-list">
                        <li>< Link to='#'>Dashboard</Link></li>
                        <li>< Link to='#'>Customers</Link></li>
                    </ul>
                    <p className="menu-label">
                        Administration
                    </p>
                    <ul className="menu-list">
                        <li>< Link to='#'>Dashboard</Link></li>
                        <li>< Link to='#'>Customers</Link></li>
                    </ul>
                    <p className="menu-label">
                        Transactions
                    </p>
                    <ul className="menu-list">
                        <li>< Link to='#'>Dashboard</Link></li>
                        <li>< Link to='#'>Customers</Link></li>
                    </ul>
                </>

            }
            {role === 'user' &&
                <>
                    <p className="menu-label">
                        General
                    </p>
                    <ul className="menu-list">
                        <li>< Link to='#'>Dashboard</Link></li>
                        <li>< Link to='#'>Customers</Link></li>
                    </ul>
                    <p className="menu-label">
                        Administration
                    </p>
                    <ul className="menu-list">
                        <li>< Link to='#'>Dashboard</Link></li>
                        <li>< Link to='#'>Customers</Link></li>
                    </ul>
                    <p className="menu-label">
                        Transactions
                    </p>
                    <ul className="menu-list">
                        <li>< Link to='#'>Dashboard</Link></li>
                        <li>< Link to='#'>Customers</Link></li>
                    </ul>
                </>

            }

        </aside>
    )
}

export default Sidebar

