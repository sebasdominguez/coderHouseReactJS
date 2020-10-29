import React from 'react'
import CountContainer from '../../Containers/CountContainer'

export default function Home({greeting, name}) {

    return (
        <div className="App">
            <header className="App-header">
                <p>{greeting} {name}</p>
                <CountContainer min='0' max='10'/>
            </header>
        </div>
    )
}
