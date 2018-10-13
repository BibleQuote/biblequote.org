export default moduleId => {
  const [type, ont, language, shortName, version] = moduleId.split('_');
  return {
    type,
    ont,
    language,
    shortName,
    version,
  };
}