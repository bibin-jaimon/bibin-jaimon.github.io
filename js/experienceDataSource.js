function ExperienceDataModel(
  position,
  company,
  date,
  description,
  companyWebsiteLink
) {
  this.position = position;
  this.company = company;
  this.date = date;
  this.description = description;
  this.companyWebsiteLink = companyWebsiteLink;
}

function generateExperience() {
  var data = [
    new ExperienceDataModel(
      "Mobile App developer",
      "QBurst",
      "May 2018 - Present",
      `
        Working as a Mobile Application Developer for client projects<br /><br />
        Tech: Swift, Java, Kotlin, React Native, JavaScript<br />

        Platform: iOS, Android
        <p>
        - Coordinate with the Technical Lead on current project tasks<br />
        - Collaborate with other programmers to design and implement features<br />
        - Debug existing source code, polish feature sets, and optimize the current workflow<br />
        - Continuously learn and improve skills<br />
        - Carrying out all tasks with high attention to detail and making sure they meet the highest standards
        </p>
        `,
      "https://www.qburst.com/"
    ),
    new ExperienceDataModel(
      "Java Application Developer",
      "Bharat Heavy Electricals Limited",
      "Oct 2017- Oct 2017",
      "Developed file backup application using Java, Swing",
      "https://www.bhel.com/"
    ),
    new ExperienceDataModel(
      "Product Development Intern",
      "Hasura",
      "May 2017 - June 2017",
      "Build and test simple web application using Hasura platform",
      "https://hasura.io/"
    ),
  ];
  var element = document.getElementById("experienceDetails");

  data.forEach((item) => {
    element.innerHTML += `<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">${item.position}</h3>
          
          <a href=${item.companyWebsiteLink} target="_blank">
          <div class="subheading mb-3">${item.company}</div>
          </a>
          <p>${item.description}</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">${item.date}</span>
        </div>
      </div>`;
  });
}
generateExperience();
