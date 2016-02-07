var bio = {
    "name": "Shelly Davis",
    "role": "Front-End Web Developer",
    "contacts": {
        "email": "dmdshelly@gmail.com",
        "github": "dmdshelly",
        "location": "San Jose, CA"
    },
    "welcomeMessage": "Welcome to My Resume",
    "skills": ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
    "biopic": "images/shellyd.jpg"
};

bio.display = function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedLocation);
        $("#header").append(formattedPic);
        $("#header").append(formattedWelcome);

        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedLocation);


        if(bio.skills.length > 0){
                    $("#header").append(HTMLskillsStart);

                    for(index in bio.skills){
                    var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
                    $("#skills:last").append(formattedSkill);
                }
        }
}

bio.display();


var education = {
    "schools": [
        {
            "name": "San Jose State University",
            "location": "San Jose, CA",
            "degree": "M.A.",
            "major": "Sociology",
            "dates": 1998,
            "url": "http://www.sjsu.edu/"
        },
        {
            "name": "Ambassador College",
            "location": "Big Sandy, TX",
            "degree": "B.A.",
            "major": "Theology",
            "dates": 1993,
            "url": "https://ambassador.edu/"
        }
    ],
    "profDev": [
            {
                "name": "HR Certification Institute",
                "location": "San Jose, CA",
                "degree": "Senior Professional in Human Resources Certification (SPHR)",
                "dates": 2001,
                "url": "http://www.hrci.org/"
            },
            {
                "name": "SJSU Professional Development Program",
                "location": "San Jose, CA",
                "degree": "HR Generalist Certificate",
                "dates": 2000,
                "url": "http://www.sjsu.edu/ceu/"
            }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": 2016,
            "url": "https://www.udacity.com/course/javascript-basics--ud804"
        },
        {
            "title": "How to Use Git and GitHub",
            "school": "Udacity",
            "dates": 2016,
            "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
        },
        {
            "title": "Adventures in Web Animations",
            "school": "Code School",
            "dates": 2015,
            "url": "https://www.codeschool.com/courses/adventures-in-web-animations"
        },
        {
            "title": "Try Git",
            "school": "Code School",
            "dates": 2015,
            "url": "https://www.codeschool.com/courses/try-git"
        },
        {
            "title": "Blasting Off With Bootstrap",
            "school": "Code School",
            "dates": 2015,
            "url": "https://www.codeschool.com/courses/blasting-off-with-bootstrap"
        },
        {
            "title": "JavaScript Programming: Learn By Making a Mobile Game",
            "school": "Udemy",
            "dates": 2015,
            "url": "https://www.udemy.com/master-javascript/learn/#/"
        },
        {
            "title": "jQuery",
            "school": "Codecademy",
            "dates": 2015,
            "url": "https://www.codecademy.com/learn/jquery"
        },
        {
            "title": "JavaScript",
            "school": "Codecademy",
            "dates": 2015,
            "url": "https://www.codecademy.com/learn/javascript"
        },
        {
            "title": "Build Responsive Real World Websites with HTML5 and CSS3",
            "school": "Udemy",
            "dates": 2015,
            "url": "https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/learn/#/"
        },
        {
            "title": "HTML/JS: Making Webpages Interactive",
            "school": "Khan Academy",
            "dates": 2015,
            "url": "https://www.khanacademy.org/computing/computer-programming/html-css-js"
        },
        {
            "title": "Intro to JS: Drawing & Animation",
            "school": "Khan Academy",
            "dates": 2015,
            "url": "https://www.khanacademy.org/computing/computer-programming/programming"
        },
        {
            "title": "Make a Website",
            "school": "Codecademy",
            "dates": 2014,
            "url": "https://www.codecademy.com/en/skills/make-a-website"
        },
        {
            "title": "HTML & CSS",
            "school": "Codecademy",
            "dates": 2014,
            "url": "https://www.codecademy.com/learn/web"
        },
        {
            "title": "Adobe Photoshop CS5 Essentials",
            "school": "Total Training",
            "dates": 2012,
            "url": "http://totaltraining.com/store/photoshop-cs5-extended-essentials/?view=catalog"
        }
    ]
};

education.display = function(){
        for(index in education.schools){
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[index].name).replace("#", education.schools[index].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
            var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[index].major);

            $(".education-entry:last").append(formattedSchoolNameDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        $("#education").append(HTMLonlineClasses.replace("Online Classes", "Professional Development"));
        for(index in education.profDev){
            $("#education").append(HTMLschoolStart);

            var formattedPDName = HTMLschoolName.replace("%data%", education.profDev[index].name).replace("#", education.profDev[index].url);
            var formattedPDDegree = HTMLschoolDegree.replace("%data%", education.profDev[index].degree);
            var formattedPDNameDegree = formattedPDName + formattedPDDegree;
            var formattedPDDates = HTMLschoolDates.replace("%data%", education.profDev[index].dates);
            var formattedPDLocation = HTMLschoolLocation.replace("%data%", education.profDev[index].location);

            $(".education-entry:last").append(formattedPDNameDegree);
            $(".education-entry:last").append(formattedPDDates);
            $(".education-entry:last").append(formattedPDLocation);
            $(".education-entry:last").append(HTMLschoolMajor.replace("Major: %data%", "")); //ensures proper formatting
        }

        $("#education").append(HTMLonlineClasses);
        for(index in education.onlineCourses){
            $("#education").append(HTMLschoolStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
            var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url).replace("#", education.onlineCourses[index].url);

            $(".education-entry:last").append(formattedOnlineTitleSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
        }
}

education.display();


var work = {
    "jobs": [
        {   "employer": "St. David's Community Health Foundation",
            "title": "HR Director",
            "location":"Austin, TX",
            "dates": "1/2007 - 4/2007",
            "description": "Managed all HR functions.  Reviewed and revised employee handbook."
        },
        {   "employer": "dPix, LLC",
            "title": "Senior HR Manager",
            "location":"Palo Alto, CA",
            "dates": "12/2004 - 11/2005",
            "description": "Managed all HR functions, including supervision of HR Representative.  Major accomplishments include installation of HRIS (HR database), conducting market analysis for all employees, and designing bonus plan."
        },
        {   "employer": "Novalux, Inc.",
            "title": "HR Manager",
            "location":"Sunnyvale, CA",
            "dates": "8/2000 - 12/2004",
            "description": "Started out as Sr. HR Rep, promoted to HR Manager in 2002.  Major accomplishments include installing two HRIS (HR databases), facilitating four layoffs, developing a performance appraisal system and spot award program.  Ultimately ran the department and managed company's administrative staff."
        },
        {   "employer": "SyStemix, Inc.",
            "title": "HR Representative",
            "location":"Palo Alto, CA",
            "dates": "6/1997 - 8/2000",
            "description": "Started out as administrative assistant, promoted to HR Representative in 1999.  Major accomplishments include creating an HR intranet site, installing a resume tracking database, facilitating 3 layoffs, managing benefits for four companies."
        },
        {   "employer": "Navigation Technologies",
            "title": "Sales & Marketing Administration",
            "location":"Sunnyvale, CA",
            "dates": "10/1993 - 6/1997",
            "description": "Provided executive support to VPs of Sales & Marketing and managed staff of 3 admins."
        }
    ]
};

work.display = function(){
        for(index in work.jobs){
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
            var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);

            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkDescription);
        }
}

work.display();


var projects = {
    "projects": [
        {
            "title": "Arcade Game",
            "dates": "pending",
            "description": "classic arcade game clone",
            "images": "images/arcadegamesmall.jpg"
        },
        {
            "title": "Neighborhood Map",
            "dates":"pending",
            "description": "neighborhood map including location markers and browsing",
            "images": "images/foldingmapsmall.jpg"
        }
    ]
};

projects.display = function displayProjects(){
        for(index in projects.projects){
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[index].images);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
            $(".project-entry:last").append(formattedProjectImage);
        }
}

projects.display();


$("#mapDiv").append(googleMap);

