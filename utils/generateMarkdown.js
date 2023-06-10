
function renderLicenseBadge(license) {if ((license.license) == 'MIT'){return "![Github license](https://img.shields.io/badge/licence-MIT-red.svg)";
} else {
  return ''   
};
};

function renderLicenseLink(license) {
  if (license == "MIT"){
    return "https://drewdevault.com/2022/02/07/Free-software-licenses-MIT.html"
  } else{
    return '';
  };
  
}


function renderLicenseSection(license) {
 return renderLicenseBadge(license) +
  renderLicenseLink(license);
}


function generateMarkdown(data) {
  return `# ${data.name}
    
  ${renderLicenseSection(data.license)}
          
  
        ## Description 
          ${data.description}
        
        ## Installation instructions ${data.installation}

        ## Usage ${data.usage}

        ## License ${data.license}
       
        ## Special thanks to these contributors ${data.contriubting}

        ## Tests ${data.tests}

        ## Questions ? My Github:[${data.github}] (https:github.com/${data.github})
                     [${data.email}](mailto:${data.email})  `
 };
            
       




module.exports = generateMarkdown;

