import React, { Component } from 'react';
import formatBytes from './code/format-bytes';
import parseIniData from './code/parse-ini-data';
import getModuleMetadata from './code/get-module-metadata';
import convertModulesdataToList from './code/convert-modulesdata-to-list';
import './Repository.css';

class Repository extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      modules: {},
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  fetchRepoContent() {
    const repoContentUrl = 'https://api.github.com/repos/BibleQuote/BibleQuote-Modules/contents/modules';

    return fetch(repoContentUrl)
      .then(repoContent => {
        return repoContent.json();
      })
      .then(repoData => {
          return repoData;
      });
  }

  fetchModulesContent() {
    const modulesContentUrl = 'https://raw.githubusercontent.com/BibleQuote/BibleQuote-Modules/master/modules.ini';

    return fetch(modulesContentUrl)
      .then(modulesContent => {
        return modulesContent.text();
      })
      .then(modulesData => {
          return modulesData;
      });
  }

  fetchModulesFromGithub() {
    Promise.all([this.fetchRepoContent(), this.fetchModulesContent()])
      .then(([repoData, modulesData]) => {
        const parsedModulesData = parseIniData(modulesData);
        const modulesList = convertModulesdataToList(parsedModulesData);

        const modules = modulesList.map(module => {
          const repoFile = repoData.find(file =>
            (file.name.replace('.7z', '') === module.id)
          );

          if (repoFile) {
            return { ...module, size: formatBytes(repoFile.size) };
          }
          else {
            console.error(`Deprecated module: ${module}`);
            return module;
          }
        });

        this.setState({ modules });
      });
  }

  componentWillMount() {
    this.fetchModulesFromGithub();
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
            <header className="Repository-header">
              <h1 className="Repository-title">Репозиторий модулей BibleQuote</h1>
            </header>
            <div>
              <input className="module-search" onChange={this.handleChange} />
              <span>&nbsp;</span>
              <span className="module-search-number">{filteredModules.length}</span>
            </div>
            <div className="modules-list">
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
        </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Repository;
