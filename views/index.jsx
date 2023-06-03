const React = require('react')
const bread = require('../models/bread')
const Default = require('./layout/default')

function Index ({breads, title}) {
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        {/*This is a JSX comment. */}
        {/*<p>I have {breads[0].name} bread!</p>*/}
        <ul>
            {
                breads.map((bread, index) =>[
                    return (
                    <li key={index}>
                        <a href={`/breads/${index}`}>
                        {bread.name}
                        </a>
                        <div className="newButton">
                            <a href="/breads/new"><button>Add a new bread</button></a>
                        </div>
                    </li>)
                ])
            }
        </ul>
      </Default>
    )
}

module.exports = Index
