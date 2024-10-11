import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
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

const Repository = () => {
  const [modules, setModules] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [queryText, setQueryText] = useState('');
  const [queryModuleType, setQueryModuleType] = useState(ModuleType.All);

  useEffect(() => {
    ReactGA.pageview('/repository');
  }, []);

  useEffect(() => {
    fetchModulesFromGithub()
      .then(fetchedModules => {
        setModules(fetchedModules);
        setLoaded(true);
      });
  }, []);

  const downloadModuleClick = moduleId => {
    ReactGA.event({ category: 'Module', action: 'Download', label: moduleId });
  };

  const dropdownClick = moduleType => setQueryModuleType(ModuleType[moduleType]);

  const getModulesList = filteredModules => {
    const moduleType = russianLocale['module']['type'];
    const moduleLanguage = russianLocale['module']['language'];

    return (
      <div className="repository-list">
        <div className="modules-search-input">
          <div className="input-group">
            <input type="text" className="form-control" onChange={event => setQueryText(event.target.value)}
              placeholder="Поиск модулей..." aria-describedby="basic-addon" />
            <span className="input-group-addon" id="basic-addon">
              {filteredModules.length}
            </span>
            <div className="input-group-btn">
              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {moduleType[queryModuleType]} <span className="caret" />
              </button>
              <ul className="dropdown-menu dropdown-menu-right">
                <li>
                  <a href="#" onClick={() => { dropdownClick(ModuleType.All)} }>Все модули</a>
                </li>
                <li>
                  <a href="#" onClick={() => { dropdownClick(ModuleType.Bible)} }>Библия</a>
                </li>
                <li>
                  <a href="#" onClick={() => { dropdownClick(ModuleType.Commentary)} }>Комментарий</a>
                </li>
                <li>
                  <a href="#" onClick={() => { dropdownClick(ModuleType.Dictionary)} }>Словарь</a>
                </li>
                <li>
                  <a href="#" onClick={() => { dropdownClick(ModuleType.Book)} }>Книга</a>
                </li>
              </ul>
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
                    onClick={() => { downloadModuleClick(module.id)} } >
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
  };

  let filteredModules = [ ...modules ];

  // filter by query text
  if (queryText) {
    filteredModules = [];
    modules.forEach(module => {
      const currentQueryText = queryText.toLowerCase();
      const name = module.name.toLowerCase();
      const author = module.author.toLowerCase();
      if (name.includes(currentQueryText) || author.includes(currentQueryText)) {
        filteredModules.push(module);
      }
    });
  }

  // filter by query module type
  if (queryModuleType !== ModuleType.All) {
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
            loaded
              ? getModulesList(filteredModules)
              : <Loader type="Oval" color="#6994A2" width="70" />
          }
        </div>
      </div>
    </div>
  );
}

export default Repository;
