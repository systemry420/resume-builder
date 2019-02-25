$(function(){

    /* ============= Start Model ========== */

    var model = {
        bio: {
            name: 'Hasan',
            role: 'Front End Web Developer',
            contacts: {
                mobile: '123456',
                email: 'gmail@gmail.com'
            },
            welcomeMessage: 'Hello World!',
            skills: ['HTML', 'CSS', 'Javascript', 'PHP'],
            biopic: '../images/fry.jpg',
        },

        education: {
            schools: [
                {
                    name: 'ABC',
                    location: 'Lebanon',
                    degree: 'technical license',
                    majors: ['programming', 'web'],
                    dates: '2014-2015',
                },
                {
                    name: 'IUL',
                    location: 'Lebanon',
                    degree: 'Bachelor degree',
                    majors: ['Business', 'MIS'],
                    dates: '2017-2020',
                }
            ],
            onlineCourses: [
                {
                    title: 'Data analyst',
                    school: 'Udacity',
                    dates: '2018',
                    url: 'http://www.udacity.com'
                },
                {
                    title: 'Front End Nanodegree',
                    school: 'Udacity',
                    dates: '2018',
                    url: 'http://www.udacity.com'
                }
            ],
        },

        work: {
            jobs: [
                {
                    employer: 'employer1',
                    title: 'job title',
                    location: 'job location',
                    dates: '2015-2018',
                    description: 'job description'
                },
                {
                    employer: 'employer2',
                    title: 'job title 2',
                    location: 'job location 2',
                    dates: '2015-2017',
                    description: 'job description 2'
                }
            ],
        },

        projects: {
            projects: [
                {
                    title: 'project 1',
                    dates: '2018',
                    description: 'project description',
                    images: ['../images/197x148.gif', '../images/197x148.gif']
                },
                {
                    title: 'project 2',
                    dates: '2019',
                    description: 'project description 2',
                    images: ['img.jpg', 'img.jpg']
                }
            ],
        }
    }

    /* ============ End Model =========== */

    /* ============ Start View =========== */

    var view = {
        // grab important elements
        header: $('#header'),
        contacts: $('#topContacts'),
        skills: $('div[style]'),  //attribute selector
        edu: $('#education'),
        work: $('#workExperience'),
        projects: $('#projects'),
        map: $('mapDiv'),
        init: function (b, e, w, p) {
            var dt = '%data%';
            // replace %data% with suitable object
            HTMLheaderName = HTMLheaderName.replace(dt, b.name);
            HTMLheaderRole = HTMLheaderRole.replace(dt, b.role);
            HTMLmobile = HTMLmobile.replace(dt, b.contacts.mobile);
            HTMLemail = HTMLemail.replace(dt, b.contacts.email);
            HTMLwelcomeMsg = HTMLwelcomeMsg.replace(dt, b.welcomeMessage);
            HTMLbioPic = HTMLbioPic.replace(dt, b.biopic);

            this.header.append(HTMLheaderName, HTMLbioPic, HTMLheaderRole);     // append name

            this.contacts.append(HTMLmobile, HTMLemail, HTMLwelcomeMsg);  //append contacts

            this.skills.append(HTMLskillsStart);

            this.work.append(HTMLworkStart);

            this.projects.append(HTMLprojectStart);

            this.edu.append(HTMLschoolStart);

            this.render(b, e, w, p);
        },

        render: function(b, e, w, p){
            var dt = '%data%';

            // add each skill
            b.skills.forEach( sk =>{
                $('ul#skills').addClass('dark-gray').append(HTMLskills.replace(dt, sk));
            });

            // append each job, to workExperience section
            w.jobs.forEach(j => {
                $('.work-entry').append(
                    HTMLworkEmployer.replace(dt, j.employer)
                    + HTMLworkTitle.replace(dt, j.title)
                    + HTMLworkDates.replace(dt, j.dates)
                    + HTMLworkLocation.replace(dt, j.location)
                    + HTMLworkDescription.replace(dt, j.description)
                );
            });

            // append each project, to projects section
            p.projects.forEach( e=>{
                $('.project-entry').append(
                    HTMLprojectTitle.replace(dt, e.title)
                    + HTMLprojectDates.replace(dt, e.dates)
                    + HTMLprojectDescription.replace(dt, e.description)
                    + HTMLprojectImage.replace(dt, b.biopic)
                );
            });

            $('.education-entry').append('<h3>Schools</h3>');
            // append schools, to education
            e.schools.forEach( s => {
                $('.education-entry').append(
                    HTMLschoolName.replace(dt, s.name)
                    + HTMLschoolDegree.replace(dt, s.degree)
                    + HTMLschoolDates.replace(dt, s.dates)
                    + HTMLschoolLocation.replace(dt, s.location)
                    + s.majors.map(m => {
                        return HTMLschoolMajor.replace(dt, m);
                    })
                );
            });

            $('.education-entry').append(HTMLonlineClasses);

            e.onlineCourses.forEach(o =>{
                $('.education-entry').append(
                    HTMLonlineTitle.replace(dt, o.title)
                    + HTMLonlineSchool.replace(dt, o.school)
                    + HTMLonlineDates.replace(dt, o.dates)
                    + HTMLonlineURL.replace(dt, o.url)
                );
            })

        }
    }

    /* ============= End View ========== */

    /* =========== Start Controller ========== */
    var controller = {
        init: function(){
            this.launch();
        },
        launch: function () {
            // load model objects
            var b = model.bio,
                e = model.education,
                w = model.work,
                p = model.projects;

            // send objects to view
            view.init(b, e, w, p);
        }
    }

    // initialize controller
    controller.init();
})