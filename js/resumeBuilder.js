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

})