function filterByCompanyName(companyName) {
    // Filter the timelineData array to include only items with the specified company name
    const filteredData = timelineData.filter(item => item.companyName === companyName);
  
    // Remove all existing timeline items from the container
    const timelineContainer = document.getElementById("timeline-container");
    timelineContainer.innerHTML = "";
  
    // Loop through the filtered data and generate HTML for each item
    filteredData.forEach(item => {
      // ... generate HTML for timeline item ...
      timelineContainer.appendChild(timelineItem);
    });
  }
  
  function searchTimeline(query) {
    // Filter the timelineData array to include only items with a description or responsibility that includes the query
    const filteredData = timelineData.filter(item => {
      const lowerCaseQuery = query.toLowerCase();
      return item.description.toLowerCase().includes(lowerCaseQuery) || item.responsibilities.some(responsibility => responsibility.toLowerCase().includes(lowerCaseQuery));
    });
  
    // Remove all existing timeline items from the container
    const timelineContainer = document.getElementById("timeline-container");
    timelineContainer.innerHTML = "";
  
    // Loop through the filtered data and generate HTML for each item
    filteredData.forEach(item => {
      // ... generate HTML for timeline item ...
      timelineContainer.appendChild(timelineItem);
    });
  }
    
  // Event listener for company name filter
  document.getElementById("company-name-filter").addEventListener("change", function() {
    filterByCompanyName(this.value);
  });
  
  // Event listener for search input
  document.getElementById("search-input").addEventListener("input", function() {
    searchTimeline(this.value);
  });

  const timelineData = [
    {
      companyLogo: "company_logo1.png",
      companyName: "Company Name 1",
      startDate: "Start Date 1",
      endDate: "End Date 1",
      description: "Job Description and Responsibilities 1",
      responsibilities: [
        "Responsibility 1",
        "Responsibility 2",
        "Responsibility 3"
      ]
    },
    {
      companyLogo: "company_logo2.png",
      companyName: "Company Name 2",
      startDate: "Start Date 2",
      endDate: "End Date 2",
      description: "Job Description and Responsibilities 2",
      responsibilities: [
        "Responsibility 1",
        "Responsibility 2",
        "Responsibility 3"
      ]
    },
    // add more items as needed
  ];

  // Get the timeline container element
const timelineContainer = document.getElementById("timeline-container");

// Loop through the timeline data and generate HTML for each item
timelineData.forEach(item => {
  creeateItem(item[i]);
});
  
function creeateItem(item){
    // Create the timeline item element
  const timelineItem = document.createElement("div");
  timelineItem.classList.add("timeline-item");

  // Create the timeline header element
  const timelineHeader = document.createElement("div");
  timelineHeader.classList.add("timeline-header");

  // Create the company logo element
  const logoImg = document.createElement("img");
  logoImg.setAttribute("src", item.companyLogo);
  logoImg.setAttribute("alt", "Company Logo");
  timelineHeader.appendChild(logoImg);

  // Create the company name element
  const companyName = document.createElement("h2");
  companyName.textContent = item.companyName;
  timelineHeader.appendChild(companyName);

  // Create the date element
  const date = document.createElement("p");
  date.classList.add("timeline-date");
  date.textContent = `${item.startDate} - ${item.endDate}`;
  timelineHeader.appendChild(date);

  // Create the timeline content element
  const timelineContent = document.createElement("div");
  timelineContent.classList.add("timeline-content");

  // Create the job description element
  const jobDescription = document.createElement("p");
  jobDescription.textContent = item.description;
  timelineContent.appendChild(jobDescription);

  // Create the responsibilities list element
  const responsibilitiesList = document.createElement("ul");
  item.responsibilities.forEach(responsibility => {
    const responsibilityItem = document.createElement("li");
    responsibilityItem.textContent = responsibility;
    responsibilitiesList.appendChild(responsibilityItem);
  });
  timelineContent.appendChild(responsibilitiesList);

  // Add the header and content elements to the timeline item
  timelineItem.appendChild(timelineHeader);
  timelineItem.appendChild(timelineContent);

  // Add the timeline item to the container
  timelineContainer.appendChild(timelineItem);
}