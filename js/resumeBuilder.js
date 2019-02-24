$(function(){

    /* ============= Start Model ========== */

    var model = {
        bio: {
            name: 'Hasan',
            role: 'Front End Web',
            contacts: {
                mobile: '123456',
                email: 'gmail@gmail.com'
            },
            welcomeMessage: 'Hello World!',
            skills: ['HTML', 'CSS', 'Javascript'],
            biopic: 'fry.jpg',
        },

        education: {
            schools: [
                {
                    name: 'ABC',
                    location: 'Lebanon',
                    degree: 'technical license',
                    majors: ['programming', 'web'],
                    dates: '2014-2015',
                }
            ],
            onlineCourses: [
                {
                    title: 'Data analyst',
                    school: 'Udacity',
                    dates: '2018',
                    url: 'uda'
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
                }
            ],
        },

        projects: {
            projects: [
                {
                    title: 'project 1',
                    dates: '2018',
                    description: 'project description',
                    images: ['img', 'img']
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
        work: $('#workExperience'),
        projects: $('projects'),
        map: $('mapDiv'),
        init: function (b, e, w, p) {
            var dt = '%data%';
            // replace %data% with suitable object
            HTMLheaderName = HTMLheaderName.replace(dt, b.name);
            HTMLheaderRole = HTMLheaderRole.replace(dt, b.role);
            HTMLmobile = HTMLmobile.replace(dt, b.contacts.mobile);
            HTMLemail = HTMLemail.replace(dt, b.contacts.email);
            HTMLwelcomeMsg = HTMLwelcomeMsg.replace(dt, b.welcomeMessage);

            
            // HTMLskillsStart
            // HTMLskills
            // HTMLworkStart
            this.render();
        },

        render: function(){
            this.header.append(HTMLheaderName);     // append name
            this.contacts.append(HTMLmobile, HTMLemail);  //append contacts
            
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