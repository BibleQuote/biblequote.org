export default moduleId => {
  const [type, language, shortName, version] = moduleId.split('_');
  return {
    type,
    language,
    shortName,
    version,
  };
}