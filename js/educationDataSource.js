function EducationDataModel(
  universityName,
  degreeType,
  specilization,
  cgpa,
  date
) {
  this.universityName = universityName;
  this.degreeType = degreeType;
  this.specilization = specilization;
  this.cgpa = cgpa;
  this.date = date;
}
function generateEducationData() {
  const data = [
    new EducationDataModel(
      "Kannur University",
      "Bachelor of Technology",
      "Computer Science",
      "7.5",
      "June 2014 - May 2018"
    ),
    new EducationDataModel(
      "St. George's HSS Muthalakodam",
      "Kerala State Board",
      "Computer Science",
      "7.5",
      "June 2011 - May 2013"
    ),
  ];

  var element = document.getElementById("educationDetails");
  data.forEach((item) => {
    element.innerHTML += `<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">${item.universityName}</h3>
            <div class="subheading mb-3">${item.degreeType}</div>
            <div>Field Of Study: ${item.specilization}</div>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">${item.date}</span>
          </div>
        </div>`;
  });
}
generateEducationData();
