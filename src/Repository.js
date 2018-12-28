import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import getModuleMetadata from './code/get-module-metadata';
import fetchModulesFromGithub from './code/fetch-modules-from-github';
import russianLocale from './locale/russian';
import './Repository.css';

const ModuleType = {
  All: 'All',
  Bible: 'Bible',
  Commentary: 'Commentary',
  Dictionary: 'Dictionary',
  Book: 'Book',
};

class Repository extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.dropdownClick = this.dropdownClick.bind(this);
    this.downloadModuleClick = this.downloadModuleClick.bind(this);

    this.state = {
      modules: [],
      loaded: false,
      queryText: '',
      queryModuleType: ModuleType.All,
    };

    ReactGA.pageview('/repository');
  }

  handleChange(event) {
    this.setState({ queryText: event.target.value });
  }

  downloadModuleClick(moduleId) {
    ReactGA.event({
      category: 'Module',
      action: 'Download',
      label: moduleId,
    });
  }

  dropdownClick(moduleType) {
    this.setState({ queryModuleType: ModuleType[moduleType] });
  }

  componentWillMount() {
    fetchModulesFromGithub()
      .then(modules => {
        this.setState({ modules, loaded: true });
      });
  }

  getModulesList(filteredModules) {
    const moduleType = russianLocale['module']['type'];
    const moduleLanguage = russianLocale['module']['language'];

    return (
      <div className="repository-list">
        <div className="modules-search-input">
          <div className="input-group">
            <input type="text" className="form-control" onChange={this.handleChange}
              placeholder="Поиск модулей..." aria-describedby="basic-addon" />
            <span className="input-group-addon" id="basic-addon">
              {filteredModules.length}
            </span>
            <div className="input-group-btn">
              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {moduleType[this.state.queryModuleType]} <span className="caret" />
              </button>
              { /* eslint-disable jsx-a11y/anchor-is-valid */ }
              <ul className="dropdown-menu dropdown-menu-right">
                <li>
                  <a href="#" onClick={() => { this.dropdownClick(ModuleType.All)} }>Все модули</a>
                </li>
                <li>
                  <a href="#" onClick={() => { this.dropdownClick(ModuleType.Bible)} }>Библия</a>
                </li>
                <li>
                  <a href="#" onClick={() => { this.dropdownClick(ModuleType.Commentary)} }>Комментарий</a>
                </li>
                <li>
                  <a href="#" onClick={() => { this.dropdownClick(ModuleType.Dictionary)} }>Словарь</a>
                </li>
                <li>
                  <a href="#" onClick={() => { this.dropdownClick(ModuleType.Book)} }>Книга</a>
                </li>
              </ul>
              { /* eslint-enable jsx-a11y/anchor-is-valid */ }
            </div>
          </div>
        </div>
        <ul className="modules-list">
          {
            filteredModules.map(module => (
              <li key={module.id}>
                <img alt={module.id} src={`https://raw.githubusercontent.com/BibleQuote/BibleQuote-Modules/master/assets/${module.id}.jpg`} />
                <p><strong>{module.name}</strong></p>
                <p>Автор: {module.author}</p>
                <p>Тип: {moduleType[getModuleMetadata(module.id).type]}</p>
                <p>Язык: {moduleLanguage[getModuleMetadata(module.id).language]}</p>
                <p>Версия: {getModuleMetadata(module.id).version}</p>
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
        {
          filteredModules.length === 0 &&
          <div>Таких модулей в нашем репозитории нет.</div>
        }
      </div>
    );
  }

  render() {
    const { modules } = this.state;
    let filteredModules = [ ...modules ];

    // filter by query text
    if (this.state.queryText) {
      filteredModules = [];
      modules.forEach(module => {
        const queryText = this.state.queryText.toLowerCase();
        const name = module.name.toLowerCase();
        const author = module.author.toLowerCase();
        if (name.includes(queryText) || author.includes(queryText)) {
          filteredModules.push(module);
        }
      });
    }

    // filter by query module type
    if (this.state.queryModuleType !== ModuleType.All) {
      const queryModuleType = this.state.queryModuleType;

      filteredModules = filteredModules.filter(module => (
        getModuleMetadata(module.id).type === queryModuleType
      ));
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
