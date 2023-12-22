function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Function with a default value for language
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Function with the option to override the default value for language
  function introductionWithLanguageOptionalOverride(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }