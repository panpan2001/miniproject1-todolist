import React from 'react'

function Searchbar() {
    return (
        <div className="field has-addons">
            <div className="control">
                <input className="input" type="text" placeholder="Find a repository" />
            </div>
            <div className="control">
                <button className="button is-info is-light  is-outlined">
                    Search
                </button>
            </div>
        </div>
    )
}

export default Searchbar