import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import getModuleMetadata from './code/get-module-metadata';
import fetchModulesFromGithub from './code/fetch-modules-from-github';
import './Repository.css';

class Repository extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.downloadModuleClick = this.downloadModuleClick.bind();

    this.state = {
      query: '',
      modules: [],
      loaded: false,
    };

    ReactGA.pageview('/repository');
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  downloadModuleClick(moduleId) {
    ReactGA.event({
      category: 'Module',
      action: 'Download',
      label: moduleId,
    });
  }

  componentWillMount() {
    fetchModulesFromGithub()
      .then(modules => {
        this.setState({ modules, loaded: true });
      });
  }

  getModulesList(filteredModules) {
    return (
      <div className="modules-list">
        <div className="modules-search-input">
          <div className="input-group">
            <input type="text" className="form-control" onChange={this.handleChange}
              placeholder="Поиск модулей..." aria-describedby="basic-addon" />
            <span className="input-group-addon" id="basic-addon">{filteredModules.length}</span>
          </div>
        </div>
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
                  <a href={`https://raw.githubusercontent.com/BibleQuote/BibleQuote-Modules/master/modules/${module.id}.zip`}
                    onClick={() => { this.downloadModuleClick(module.id)} } >
                    Загрузить ({module.size})
                  </a>
                </p>
              </li>
            ))
          }
        </ul>
        { filteredModules.length === 0 &&
          <div>Таких модулей в нашем репозитории нет.</div>
        }
      </div>
    );
  }

  render() {
    const { modules } = this.state;
    let filteredModules = [ ...modules ];

    if (this.state.query) {
      filteredModules = [];
      modules.forEach(module => {
        const query = this.state.query.toLowerCase();
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
            {
              this.state.loaded
              ? this.getModulesList(filteredModules)
              : <Loader type="Oval" color="#6994A2" width="70" />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Repository;
