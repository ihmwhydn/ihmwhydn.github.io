var app = new Vue({
  el: '#app',
  data() {
    return {
      info: {
        cv: '../img/cv.png',
        photo: '../img/profil/01.jpg',
        heroImage: '../img/tema.png',
        github: 'https://github.com/ihmwhydn',
        behance: 'https://www.behance.net/ilhamw',
        twitter: 'https://twitter.com/ilhamwahyudin_',
        instagram: 'https://www.instagram.com/ilhamwhydinn/',
        summary: 'Freeelancer Website Designer, Focused in responsive Web Design. Proficient in Web Mockup Design and Web Design Framework, including Bootstrap CSS Framework and VueJS Javascript Framework.'
      },
      social: [
        { 
          link: 'https://github.com/ihmwhydn',
          icon: 'fa-github',
          color: 'github-color'
        },
        { 
          link: 'https://www.behance.net/ilhamw',
          icon: 'fa-behance',
          color: 'behance-color'
        },
        { 
          link: 'https://twitter.com/ilhamwahyudinnn',
          icon: 'fa-twitter',
          color: 'twitter-color'
        },
        { 
          link: 'https://www.instagram.com/ilhamwhydinn/',
          icon: 'fa-instagram',
          color: 'instagram-color'
        }
      ],
      profile: {
        Name: 'ilham wahyudin',
        Job: 'Freelancer',
        University: 'Gunadarma University',
        Levels: 'Bachelors Degree',
        Majors: 'Informatic Engineer'
      },
      email: {
        gambar: '../img//icon/gmail.png',
        akun: 'ihm245@gmail.com'
      },
      skill: [
        { 
          software: 'Adobe XD',
          value: '65',
          class: 'xd'
        },
        { 
          software: 'Bootstrap 4',
          value: '90',
          class: 'bootstrap'
        },
        { 
          software: 'Vue JS',
          value: '35',
          class: 'vue'
        }
      ],
      design: [
        { 
          id: 1,
          img: '../img/design/mi8.png',
          label: 'Website Design',
          title: 'Phone Store Design',
          tools: 'Bootstrap, VueJS',
          github: 'https://github.com/ihmwhydn/phone-store-design',
          gitclass: 'btn btn-sm github-color m-0',
          giticon: 'fa-github',
          brand: 'GITHUB',
          behance: 'https://www.behance.net/gallery/116466429/Phone-Store'
         },
        { 
          id: 2,
          img: '../img/design/workspaces.png',
          label: 'Website Design',
          title: 'Working Spaces',
          tools: 'Bootstrap, Adobe XD',
          gitclass: 'btn btn-sm github-color m-0',
          giticon: 'fa-github',
          brand: 'GITHUB',
          github: 'https://github.com/ihmwhydn/workingspaces-web-design',
          behance: 'https://www.behance.net/gallery/113099597/Work-Spaces-Booking'
         },
        { 
          id: 3,
          img: '../img/design/film.png',
          label: 'Website Design',
          title: 'Movie Watch',
          tools: 'Bootstrap, Adobe XD',
          gitclass: 'btn btn-sm github-color m-0',
          giticon: 'fa-github',
          brand: 'GITHUB',
          github: 'https://github.com/ihmwhydn/moviewatch-web-design',
          behance: 'https://www.behance.net/gallery/113668915/Website-Watching-Movies-And-TV'
         },
        { 
          id: 4,
          img: '../img/design/beasiswa.png',
          label: 'Website Design',
          title: 'Beasiswa Website',
          tools: 'Bootstrap, Adobe XD',
          gitclass: 'btn btn-sm github-color m-0',
          giticon: 'fa-github',
          brand: 'GITHUB',
          github: 'https://github.com/ihmwhydn/beasiswa-web-concept-design',
          behance: 'https://www.behance.net/gallery/112562131/Konsep-Website-Beasiswa-%28-Scholarship-Website-Concept-%29'
         },
        { 
          id: 5,
          img: '../img/design/mbanking.png',
          label: 'Website Design',
          title: 'Bank-Ku',
          tools: 'Bootstrap, Adobe XD',
          gitclass: 'btn btn-sm github-color m-0',
          giticon: 'fa-github',
          brand: 'GITHUB',
          github: 'https://github.com/ihmwhydn/m-banking-webdesign',
          behance: 'https://www.behance.net/gallery/112855635/M-Banking-Bank-Ku-Website-Concept'
         },
        { 
          id: 6,
          img: '../img/design/cyberpunk.png',
          label: 'Website Design',
          title: 'Cyberpunk Concept',
          tools: 'Bootstrap',
          gitclass: 'btn btn-sm github-color m-0',
          giticon: 'fa-github',
          brand: 'GITHUB',
          github: 'https://github.com/ihmwhydn/web-design-cyberpunktheme',
          behance: 'https://www.behance.net/gallery/112210629/Website-Cyberpunk-Theme'
         },
         { 
          id: 7,
          img: '../img/design/drink.png',
          label: 'Mobile App Design',
          title: 'Food & Drink Orders',
          tools: 'Adobe XD',
          behance: 'https://www.behance.net/gallery/91233561/Concept-For-Food-Drink-Orders-Mobile-App'
         },
        { 
          id: 8,
          img: '../img/design/jadwal.png',
          label: 'Mobile App Design',
          title: 'Scheduler Alerts',
          tools: 'Adobe XD',
          behance: 'https://www.behance.net/gallery/91061661/Re-Design-Scheduler-Alert-Mobile-App'
         },
         { 
          id: 9,
          img: '../img/design/3dlisa.jpg',
          label: '3D Modelling',
          title: 'She First Step on Earth',
          tools: 'Cinema 4D, Redshift Engine',
          behance: 'https://www.behance.net/gallery/91233561/Concept-For-Food-Drink-Orders-Mobile-App'
         },
        { 
          id: 10,
          img: '../img/design/3dlightning.jpg',
          label: '3D Modelling',
          title: 'Volumetric Lightning',
          tools: 'Cinema 4D, Redshift Engine',
          behance: 'https://www.behance.net/gallery/91061661/Re-Design-Scheduler-Alert-Mobile-App'
         },
        { 
          id: 11,
          img: '../img/design/3dmi8.jpg',
          label: '3D Modelling',
          title: '3D Mi 8 Lite',
          tools: 'Cinema 4D, Redshift Engine',
          behance: 'https://www.behance.net/gallery/91061661/Re-Design-Scheduler-Alert-Mobile-App'
         }
      ]
    }
  }
})