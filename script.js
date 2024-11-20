function openModal(projectName) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');

    // Define project details
    const projects = {
        "Movie Ticket Booking Website": {
            image: "movie.jpg",
            description: `
                ● Developed a fully functional movie ticket booking website focusing on user experience and accessibility.
                ● Gained practical experience in front-end web development, enhancing problem-solving skills.
                ● Demonstrated proficiency in HTML, CSS, and JavaScript through this portfolio-worthy project.
                ● Created an intuitive admin dashboard for easy management of movie listings and user accounts.
                ● Conducted user testing sessions, gathering feedback for continuous improvement of the website.
                ● Utilized modern JavaScript frameworks to enhance interactivity and user engagement.
            `
        },
        "COVID-19 Impact Analysis": {
            image: "covid.jpg",
            description: `
                ● Analyzed COVID-19's impact on birth and death rates, highlighting key trends.
                ● Gained proficiency in R Markdown for data analysis and report generation.
                ● Enhanced data cleaning, preprocessing, and visualization skills using R.
                ● Conducted comprehensive data analysis and effectively presented findings.
                ● Employed advanced R packages for data manipulation and analysis, improving efficiency.
                ● Conducted sensitivity analysis to assess the robustness of results under varying assumptions.
            `
        },
        "Sales Report Dashboard": {
            image: "sales.png",
            description: `
                ● Created an interactive sales report dashboard in Excel, allowing users to visualize sales data effectively.
                ● Implemented dynamic charts and pivot tables to facilitate real-time data analysis.
                ● Enhanced skills in data visualization and business analytics through this project.
                ● Analyzed historical sales data to identify patterns and support strategic decision-making.
                ● Presented dashboard insights in team meetings, fostering data-driven discussions.
                ● Conducted training sessions for team members on dashboard usage and best practices.
            `
        },
        "Phonebook Management": {
            image: "phonebook.webp",
            description: `
                ● Developed a phonebook management system in C, enabling users to store and manage contact information.
                ● Implemented features such as adding, deleting, and searching contacts efficiently.
                ● Gained experience in C programming and data structure implementation.
                ● Integrated file I/O functions to allow users to save and retrieve contact data persistently.
                ● Developed search algorithms to quickly locate contacts based on various criteria.
                ● Enhanced memory management skills by utilizing dynamic memory allocation effectively.
            `
        }
    };

    // Set modal content
    if (projects[projectName]) {
        modalTitle.textContent = projectName;
        modalImage.src = projects[projectName].image;
        modalDescription.innerHTML = projects[projectName].description.replace(/\n/g, '<br>');
    } else {
        modalTitle.textContent = projectName;
        modalImage.src = "https://source.unsplash.com/800x600/?project";
        modalDescription.textContent = "Detailed information about this project is currently unavailable.";
    }

    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
