import React, {Component} from 'react';

import './style.scss';

const jsonArray = [
  {
    name : 'Pedro'
  },
  {
    name : 'Marie'
  }
]

// Les components ce sont des prototypes defini par une class en ES6
// Ils ont donc tous un contructor

// LE LIFECYCLE
// Etapes de base pour chaque component APPELE UNE SEUL ET UNIQUE FOIS
// componentWillMount
// componentDidMount 
// render -> la methode qui permet d'afficher le contenu HTML du compoennt

// Etapes declenchées par le setState A CHAQUE FOIS
// componentWillUpdate
// componentDidUpdate
// render -> la methode qui permet d'afficher le contenu HTML du compoennt

class App extends Component {

  constructor () {
    super ();

    this.state = {
      salutations : 'Bonjour',
      peoples : jsonArray
    }
  }

  componentDidMount() {
    this.setState({salutations : 'Hello'})
  }

  render () {
    const that = this;
    return (
      <div id="app">

        {
          this.state.peoples.map( function (person, i) {
            return (
              <div className="saluations" key={i}>
                {that.state.salutations} {person.name}

                 <div className="alert">alert</div>
                 <div className="important">important</div>
                 <div className="vip-alert">vip-alert</div>
                 <div className="small-margin">Je suis une mixin</div>
                 <div className="medium-margin">Je suis une mixin</div>
                 <div className="large-margin">Je suis une mixin</div>

              </div>
            )
          })
        }

      </div>
    )
  }
 
}

export default App;














