import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //call the action
    this.props.getSmurfs();
  }

  render() {
    if (this.props.fetchingSmurfs) {
      return <h3>finding your smurfs...</h3>
    }
    return (
      <div className="App">
        <div className='Smurf-List'>
        {this.props.smurfs.map(smurf => {
          return (
          <ul>
            <strong>{smurf.name} Smurf</strong>
            <div><em>{smurf.age} years old</em></div>
            <div>{smurf.height}</div>
          </ul>
          )
        })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfReducer.smurfs,
    fetchingSmurfs: state.smurfReducer.fetchingSmurfs,
    error: state.smurfReducer.error,
  }
}

export default connect (
  mapStateToProps,
  {
    getSmurfs
  } 
)(App);
