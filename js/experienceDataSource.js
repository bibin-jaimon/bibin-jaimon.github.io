function ExperienceDataModel(position, company, date, description) {
    this.position = position
    this.company = company
    this.date = date
    this. description = description
}

function generateExperience() {
    var data = [
        new ExperienceDataModel("iOS Engineer", "QBurst", "May 2018 - Present", "description")
    ]
    var element = document.getElementById("experienceDetails")

    data.forEach((item) => {
        element.innerHTML += `<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">${item.position}</h3>
          <div class="subheading mb-3">${item.company}</div>
          <p>${item.description}</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">${item.date}</span>
        </div>
      </div>`;
    })
}
generateExperience()