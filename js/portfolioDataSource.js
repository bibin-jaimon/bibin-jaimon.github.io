

function PortfolioDataModel(projectName, date, description) {
    this.projectName = projectName
    this.date = date
    this. description = description
}

function generatePortfolio() {
    var data = [
        new PortfolioDataModel("Fitness Application", "Dec 2018 - Present", "It is a mobile ﬁtness application, the target audience being people with Military service. The application is deployment speciﬁc, and the target audience would change per deployment.This project is structured with scrum agile methodology."),
        new PortfolioDataModel("Virtual Coach Application", "June 2018 - Nov 2018", "manage participant recovery over a 7-week period.For patients undergoing head and neck cancer treatment. Follow a customized therapy regimen designed to improve swallow outcomes through videos and tutorials focused on jaw and swallow exercises, nutrition, empowerment, and connection with your support system."),
        new PortfolioDataModel("Shopping Cart App", "May 2018 - July 2018", "Application that allows user to buy cloths online") 
    ]
    var element = document.getElementById("portfolioDetails")

    data.forEach((item) => {
        element.innerHTML += `<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">${item.projectName}</h3>
          <p>${item.description}</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">${item.date}</span>
        </div>
      </div>`;
    })
}
generatePortfolio()