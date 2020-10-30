import React from 'react';

function Header(props) {

    let prd = (e) => {
        e.preventDefaul();
    }

    return (
        <>
            <div className="col-2 logo-text">
                <img src={props.logo} className="logo"></img>
                <h3>YouTube</h3>
            </div>
            <div className="col-2"></div>
            <form onSubmit={prd} className="col-6 search-form">
                <input className="search-area" type="text"></input>
                <button className="search-button">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                    </svg>
                </button>
            </form>
            <div className="col-2"></div>
        </>
    )
}

export default Header;

