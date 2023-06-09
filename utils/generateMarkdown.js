// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {if ((data.license) === 'MIT'){return
  "https://img.shields.io/badge/licence-MIT-red";
} else {
  return "   "
}
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ((data.license) === MIT){
    return "https://drewdevault.com/2022/02/07/Free-software-licenses-MIT.html"
  } else{
    console.log('empty string')
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
    
        
        ## Description 
          ${data.description}
        
        
        
        
        ## Installation instructions ${data.installation}

        
        
        
        ## Usage ${data.usage}

        
        
        ## License ${data.license}
       
        ## Special thanks to these contributors ${data.contriubting}

        
        
        
        ## Tests ${data.tests}

        ## Questions ? My Github: github.com / ${data.github}
                                 ${data.email}
        `
 };
            
        // module.exports = {
        //     fileName,
        //     data,
        // };
        // console.log(fileName);
        // console.log(data);
    

    // template(answers);


;


module.exports = generateMarkdown;

// https://img.shields.io/badge/licence-MIT-red

