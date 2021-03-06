// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.Title}
[![License](https://img.shields.io/badge/License-${data.License}-blue.svg)](https://opensource.org/licenses/${data.License})
## Table of Contents
 - [Description](#Description)
 - [Keywords](#Keywords)
 - [Contributors](#Contributors)
 - [Usage](#Usage)
 - [Installation](#Installation)
 - [Test](#Testing)
 - [License](#License)
 - [Deployment](#Deployment)
 - [Questions](#Questions)

## Description
${data.Description}

## Keywords
*${data.Keywords}*

## Contributors
${data.Contributors}

## Usage 
${data.Usage}

## Installation
*${data.Install}*

## Test
${data.Test}

## License
${data.License}

## Deployment
Live Recording?: ${data.Recording}  

Screenshot?: ${data.Screenshot}
![](pic/Deployed.png)

### Questions
If you have any further questions about the application:
Email: ${data.Email}

GitHub: www.github.com/${data.Username}
`}

module.exports = generateMarkdown;