// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//Write this into the generateMarkdown
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//This will generate the string to be written to README
function generateMarkdown(data) {
  return `# ${data.title}
## Description:\n > ${data.description}
## Table of Contents:\n
## Installation:\n > ${data.installation}
## Usage:\n > ${data.usage}
## Contributors:\n > [${data.contributors}](${data.contributors})
## Tests:\n > ${data.tests}
## Questions:\n ${data.userName} \n [${data.repo}](${data.repo}) \n
Feel free to get in touch! \n [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
