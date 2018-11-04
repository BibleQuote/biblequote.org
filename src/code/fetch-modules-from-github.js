import formatBytes from './format-bytes';
import parseIniData from './parse-ini-data';
import convertModulesdataToList from './convert-modulesdata-to-list';

export const fetchRepoContent = () => {
  const repoContentUrl = 'https://api.github.com/repos/BibleQuote/BibleQuote-Modules/contents/modules';

  return fetch(repoContentUrl)
    .then(repoContent => {
      return repoContent.json();
    })
    .then(repoData => {
        return repoData;
    });
};

export const fetchModulesContent = () => {
  const modulesContentUrl = 'https://raw.githubusercontent.com/BibleQuote/BibleQuote-Modules/master/modules.ini';

  return fetch(modulesContentUrl)
    .then(modulesContent => {
      return modulesContent.text();
    })
    .then(modulesData => {
        return modulesData;
    });
};

export default () => {
  return Promise.all([fetchRepoContent(), fetchModulesContent()])
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

      return modules;
    });
};
