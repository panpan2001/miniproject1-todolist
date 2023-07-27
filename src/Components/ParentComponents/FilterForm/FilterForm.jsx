import React from 'react'
import { Link } from 'react-router-dom'

function FilterForm() {
    return (
        <nav className="panel p-2">
            <p className="is-size-5 panel-heading">
                Filter
            </p>
           
            <Link to='#' className="panel-block is-active">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                bulma
            </Link>
            <Link to='#' className="panel-block">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                marksheet
            </Link>
            <Link to='#' className="panel-block">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                minireset.css
            </Link>
            <Link to='#' className="panel-block">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                jgthms.github.io
            </Link>
            <Link to='#' className="panel-block">
                <span className="panel-icon">
                    <i className="fas fa-code-branch" aria-hidden="true"></i>
                </span>
                daniellowtw/infboard
            </Link>
            <Link to='#' className="panel-block">
                <span className="panel-icon">
                    <i className="fas fa-code-branch" aria-hidden="true"></i>
                </span>
                mojs
            </Link>
            <div className="panel-block">
                <button className="button is-link is-outlined is-fullwidth">
                    Reset all filters
                </button>
            </div>
        </nav>
    )
}

export default FilterForm

// source bulma : https://bulma.io/documentation/components/panel/