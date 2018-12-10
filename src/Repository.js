import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import getModuleMetadata from './code/get-module-metadata';
import fetchModulesFromGithub from './code/fetch-modules-from-github';
import './Repository.css';

class Repository extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // query: this.props.query,
      modules: {},
    };

    // this.handleChange = this.handleChange.bind(this);

    // console.log('Repository constructor----', props);
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('Repository componentWillReceiveProps----', nextProps);
  // }

  // handleChange(event) {
  //   this.setState({ query: event.target.value });
  // }

  componentWillMount() {
    fetchModulesFromGithub()
      .then(modules => {
        this.setState({ modules });
      });
  }

  getModulesList(filteredModules) {
    return (<div className="modules-list">
      <ul>
        {
          filteredModules.map(module => (
            <li key={module.id}>
              <img alt={module.id} src={`https://raw.githubusercontent.com/BibleQuote/BibleQuote-Modules/master/assets/${module.id}.jpg`} />
              <p><strong>{module.name}</strong></p>
              <p>{module.author}</p>
              <p>{getModuleMetadata(module.id).type}</p>
              <p>{getModuleMetadata(module.id).language}</p>
              <p>{getModuleMetadata(module.id).version}</p>
              <p>
                <a href={`https://raw.githubusercontent.com/BibleQuote/BibleQuote-Modules/master/modules/${module.id}.7z`} >
                  Загрузить ({module.size})
                </a>
              </p>
            </li>
          ))
        }
      </ul>
    </div>);
  }

  render() {
    const { modules } = this.state;
    let filteredModules = [ ...modules ];

    if (this.props.query) {
      filteredModules = [];
      modules.forEach(module => {
        const query = this.props.query.toLowerCase();
        const name = module.name.toLowerCase();
        const author = module.author.toLowerCase();
        if (name.includes(query) || author.includes(query)) {
          filteredModules.push(module);
        }
      });
    }

    return (
      <div className="Repository">
        <div className="parallax-small filter-gradient blue" data-color="blue">
        </div>
        <div className="section section-clients">
          <div className="container text-center">
            {/* <div>
              <input className="module-search" onChange={this.handleChange} />
              <span>&nbsp;</span>
              <span className="module-search-number">{filteredModules.length}</span>
            </div> */}
            {
              filteredModules.length === 0
              ? <Loader type="Oval" color="#6994A2" width="70" />
              : this.getModulesList(filteredModules)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Repository;
