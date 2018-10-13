export default modulesData => {
  const modules = Object.keys(modulesData)
    .reduce((list, item) => {
      list.push({
        id: item,
        name: modulesData[item].ModuleName,
        author: modulesData[item].ModuleAuthor,
      });
      return list;
    }, []);
  return modules;
}