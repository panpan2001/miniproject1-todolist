import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer class="footer ">
            <div className="columns has-text-centered">
                <div className="column footer-content is-3">logo</div>
                <div className="column footer-content is-3">column 1</div>
                <div className="column footer-content is-3">column 2</div>
                <div className="column footer-content is-3">column 3</div>
            </div>
            <hr className='is-dark ' style={{ width: '100%', height: '1px', color: 'black', backgroundColor: 'var(--color-border-1)' }}/>
            <div class="content has-text-centered is-dark">
                <p>
                    <strong>@ Copyright 2023 by </strong><a href="https://github.com/panpan2001">Pham Anh Nhat</a>.
                </p>
            </div>
        </footer>
    )
}

export default Footer