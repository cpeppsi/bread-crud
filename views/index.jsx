const React = require('react')
const Default = require('./layouts/default')

//destructuring { breads }
function Index({ breads }) {
  const display = breads.map((bread, i) => {
    return(
      <li key={i}>
        <a href={`/breads/${i}`}>{bread.name}</a>
      </li>)
  })

  return(
    <Default>
      <h2>Index Page</h2>
      <ul>
        {display}
      </ul>
    </Default>
  )
}

module.exports = Index




//example
  // const people = ['casey', 'nick', 'james']
  // const display = people.map(person => <p>{person}</p>)