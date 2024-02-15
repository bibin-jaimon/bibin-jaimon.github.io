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

// const getX = () => {
//   const position = ""
//   const company = ""
//   const startDate = ""
//   const endDate = ""
//   const website = ""
//   const description = ""
//   return {
//       position,
//       company,
//       date: `${startDate} - ${endDate}`,
//       description,
//       companyWebsiteLink: website
//     }
// }

const getQburst = () => {
  const position = "Senior Engineer";
  const company = "Qburst Technologies Pvt. Ltd.";
  const startDate = "May 2018";
  const endDate = "Sep 2021";
  const website = "https://www.qburst.com/";
  const description = "";
  return {
    position,
    company,
    date: `${startDate} - ${endDate}`,
    description,
    companyWebsiteLink: website,
  };
};

const getVymo = () => {
  const position = "Member Of Technical Staff";
  const company = "Vymo Technologies Pvt. Ltd.";
  const startDate = "Sep 2021";
  const endDate = "Mar 2022";
  const website = "https://vymo.com/";
  const description = "";
  return {
    position,
    company,
    date: `${startDate} - ${endDate}`,
    description,
    companyWebsiteLink: website,
  };
};

const getDeloitte = () => {
  const position = "Consultant";
  const company = "Deloitte US - India offices";
  const startDate = "Mar 2021";
  const endDate = "Feb 2024";
  const website = "https://www2.deloitte.com/ui/en.html";
  const description = "";
  return {
    position,
    company,
    date: `${startDate} - ${endDate}`,
    description,
    companyWebsiteLink: website,
  };
};

const getFox = () => {
  const position = "SDE II (L2)";
  const company = "Fox Corporation";
  const startDate = "Feb 2024";
  const endDate = "Present";
  const website = "https://www.foxcorporation.com/";
  const description = "";
  return {
    position,
    company,
    date: `${startDate} - ${endDate}`,
    description,
    companyWebsiteLink: website,
  };
};

function generateExperience() {
  var data = [getFox(), getDeloitte(), getVymo(), getQburst()];

  console.log({ data });
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
