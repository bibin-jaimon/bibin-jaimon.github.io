function EducationDataModel(universityName, degreeType, specilization, cgpa, date) {
    this.universityName = universityName
    this.degreeType = degreeType
    this.specilization = specilization
    this.cgpa = cgpa
    this.date = date
}
function generateEducationData() {
    const data = [new EducationDataModel("Govt. Engg College Kannur",
        "B.Tech", 
        "Computer Science",
        "7.5",
        "June 2014 - May 2018")];
    var element = document.getElementById("educationDetails")
    data.forEach((item) => {
       element.innerHTML += `<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">${item.universityName}</h3>
            <div class="subheading mb-3">${item.degreeType}</div>
            <div>${item.specilization}</div>
            <p>GPA: ${item.cgpa}</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">${item.date}</span>
          </div>
        </div>`;
    })
}
generateEducationData()