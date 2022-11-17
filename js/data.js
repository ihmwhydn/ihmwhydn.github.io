var app = new Vue({
  el: '#app',
  mounted () {
    this.getCovid()
  },
  methods: {
    async getCovid () {
      await axios.get('https://api.covid19api.com/summary').then(response => {
        console.log(response)
        if (response.status === 200 && response.data.Countries) {
          this.covidData = response.data.Countries[78]
          this.convertTgl(this.covidData.Date)
        } else {
          this.errorRes = 'Waiting'
          this.CovidClass = 'd-none'
        }
      }).catch(error => {
        console.log(error)
        this.errorRes = error.response
        this.CovidClass = 'd-none'
      })
    },
    checkError () {
      if (this.namaKunjungan.length > 14) {
        this.error = true
      } else {
        this.error = false
      }
    },
    valTgl () {
      const date = this.tglLahir
      this.getAge(date)
    },
    getAge (date) {
      if (date) {
        const today = moment(new Date())
        const dob = moment(new Date(date))
        var duration = moment.duration(today.diff(dob))
        var age = duration.years().toString().padStart(2, '0') + ' Years Old '
      }
      this.umur = age
    },
    convertTgl (tgl) {
      var months = new Array(12)
      months[0] = "January"
      months[1] = "February"
      months[2] = "March"
      months[3] = "April"
      months[4] = "May"
      months[5] = "June"
      months[6] = "July"
      months[7] = "August"
      months[8] = "September"
      months[9] = "October"
      months[10] = "November"
      months[11] = "December"
      date = new Date(tgl)
      year = date.getFullYear()
      month = date.getMonth()
      day = date.getDate()
      this.tglCovid = day + '-' + months[month] + '-' + year
    }
  },
  data () {
    return {
      covidData: {},
      CovidClass: 'd-block',
      tglCovid: '',
      namaKunjungan: '',
      tglLahir: '',
      umur: '',
      genderKunjungan: 0,
      pekerjaanKunjungan: 0,
      error: false,
      errorRes: '',
      info: {
        cv: '../img/cv.png',
        photo: '../img/profil/anonym.jpg',
        photoMale: '../img/profil/man.jpg',
        photoFemale: '../img/profil/women.jpg',
        heroImage: '../img/tema.png',
        github: 'https://github.com/ihmwhydn',
        behance: 'https://www.behance.net/ilhamw',
        twitter: 'https://twitter.com/ilhamwahyudin_',
        instagram: 'https://www.instagram.com/ilhamwhydinn/',
        summary: 'Frontend Developer, Focused for responsive Web Design and transforming Mockup to HTML, CSS, JS Prototype using UI Framework like Bootstrap, Foundation, Bulma, etc.'
      },
      social: [
        { 
          link: 'https://github.com/ihmwhydn',
          icon: 'fa-github',
          color: 'github-color'
        },
        { 
          link: 'https://www.linkedin.com/in/ilham-wahyudin-220025195',
          icon: 'fa-linkedin',
          color: 'linkedin-color'
        },
        { 
          link: 'https://www.behance.net/ilhamw',
          icon: 'fa-behance',
          color: 'behance-color'
        },
        { 
          link: 'https://www.instagram.com/ilhamwhydinn/',
          icon: 'fa-instagram',
          color: 'instagram-color'
        }
      ],
      profile: {
        Name: 'ilham wahyudin',
        Job: 'Frontend Developer',
        Levels: 'Bachelors Degree',
        Majors: 'Informatic Engineer'
      },
      email: {
        gambar: '../img//icon/gmail.png',
        akun: 'ihm245@gmail.com'
      },
      skill: [
        { 
          software: 'Wireframing',
          value: '65',
          class: 'xd'
        },
        { 
          software: 'HTML/CSS/JS',
          value: '80',
          class: 'bootstrap'
        },
        { 
          software: 'JS Framework',
          value: '50',
          class: 'vue'
        }
      ],
      certificated: [
        {
          id: 1,
          img: '../img/bwa.svg',
          title: 'Build With Angga',
          desc: 'Full-Stack Website Designer',
          target: '#basicExampleModal-4'
        }
      ],
      design: [
        {
          id: 1,
          img: '../img/design/company.png',
          label: 'Website Design',
          title: 'Company Profile',
          tools: 'Rapid Prototyping',
          github: 'https://ihmwhydn.github.io/company-profile/',
          gitclass: 'btn btn-sm github-color m-0',
          giticon: 'fas fa-eye',
          brand: 'Live Demo',
          behance: '',
          beclass: 'btn btn-sm behance-color m-0',
          beicon: 'fa-behance',
          brandb: 'Behance',
          toggle: 'modal',
          target: '#basicExampleModal-2',
          badgeclass: 'badge badge-success'
         },
         { 
          id: 2,
          img: '../img/design/mi8.png',
          label: 'Website Design',
          title: 'Phone Store Design',
          tools: 'Rapid Prototyping',
          github: 'https://ihmwhydn.github.io/phone-store/',
          gitclass: 'btn btn-sm github-color m-0',
          giticon: 'fas fa-eye',
          brand: 'Live Demo',
          behance: 'https://www.behance.net/gallery/116466429/Phone-Store',
          beclass: 'btn btn-sm behance-color m-0',
          beicon: 'fa-behance',
          brandb: 'Behance',
          badgeclass: 'badge badge-success'
         },
         { 
          id: 3,
          img: '../img/design/workspaces.png',
          label: 'Website Design',
          title: 'Working Spaces',
          tools: 'Rapid Prototyping',
          gitclass: 'btn btn-sm github-color m-0',
          giticon: 'fas fa-eye',
          brand: 'Live Demo',
          github: 'https://ihmwhydn.github.io/workspaces-concept/',
          behance: 'https://www.behance.net/gallery/113099597/Work-Spaces-Booking',
          beclass: 'btn btn-sm behance-color m-0',
          beicon: 'fa-behance',
          brandb: 'Behance',
          badgeclass: 'badge badge-success'
         },
         { 
          id: 4,
          img: '../img/design/film.png',
          label: 'Website Design',
          title: 'Movie Watch',
          tools: 'UX Wireframe, Rapid Prototyping',
          gitclass: 'btn btn-sm github-color m-0',
          giticon: 'fas fa-eye',
          brand: 'Live Demo',
          github: 'https://ihmwhydn.github.io/movie-watching/',
          behance: 'https://www.behance.net/gallery/113668915/Website-Watching-Movies-And-TV',
          beclass: 'btn btn-sm behance-color m-0',
          beicon: 'fa-behance',
          brandb: 'Behance',
          badgeclass: 'badge badge-success'
         },
         { 
          id: 5,
          img: '../img/design/beasiswa.png',
          label: 'Website Design',
          title: 'Beasiswa Website',
          tools: 'UX Wireframe, Rapid Prototyping',
          gitclass: 'btn btn-sm github-color m-0',
          giticon: 'fas fa-eye',
          brand: 'Live Demo',
          github: 'https://ihmwhydn.github.io/beasiswa-concept/',
          behance: 'https://www.behance.net/gallery/112562131/Konsep-Website-Beasiswa-%28-Scholarship-Website-Concept-%29',
          beclass: 'btn btn-sm behance-color m-0',
          beicon: 'fa-behance',
          brandb: 'Behance',
          badgeclass: 'badge badge-success'
         },
        { 
          id: 6,
          img: '../img/design/mbanking.png',
          label: 'Website Design',
          title: 'Bank-Ku',
          tools: 'UX Wireframe, Rapid Prototyping',
          gitclass: 'btn btn-sm github-color m-0',
          giticon: 'fas fa-eye',
          brand: 'Live Demo',
          github: 'https://ihmwhydn.github.io/mbanking-website/',
          behance: 'https://www.behance.net/gallery/112855635/M-Banking-Bank-Ku-Website-Concept',
          beclass: 'btn btn-sm behance-color m-0',
          beicon: 'fa-behance',
          brandb: 'Behance',
          badgeclass: 'badge badge-success'
         },
        { 
          id: 7,
          img: '../img/design/cyberpunk.png',
          label: 'Website Design',
          title: 'Cyberpunk Concept',
          tools: 'Rapid Prototyping',
          gitclass: 'btn btn-sm github-color m-0',
          giticon: 'fas fa-eye',
          brand: 'Live Demo',
          github: 'https://ihmwhydn.github.io/cyberpunk-concept-theme/',
          behance: 'https://www.behance.net/gallery/112210629/Website-Cyberpunk-Theme',
          beclass: 'btn btn-sm behance-color m-0',
          beicon: 'fa-behance',
          brandb: 'Behance',
          badgeclass: 'badge badge-success'
         },
         { 
          id: 8,
          img: '../img/design/drink.png',
          label: 'Mobile App Design',
          title: 'Food & Drink Orders',
          tools: 'UI Design',
          gitclass: 'btn btn-sm github-color m-0',
          giticon: 'fas fa-eye',
          brand: 'Live Demo',
          behance: 'https://www.behance.net/gallery/91233561/Concept-For-Food-Drink-Orders-Mobile-App',
          beclass: 'btn btn-sm behance-color m-0',
          beicon: 'fa-behance',
          brandb: 'Behance',
          toggleb: 'modal',
          targetb: '#basicExampleModal-3',          
          badgeclass: 'badge badge-success'
         },
        { 
          id: 9,
          img: '../img/design/jadwal.png',
          label: 'Mobile App Design',
          title: 'Scheduler Alerts',
          tools: 'UI Design',
          gitclass: 'btn btn-sm github-color m-0',
          giticon: 'fas fa-eye',
          brand: 'Live Demo',
          behance: 'https://www.behance.net/gallery/91061661/Re-Design-Scheduler-Alert-Mobile-App',
          beclass: 'btn btn-sm behance-color m-0',
          beicon: 'fa-behance',
          brandb: 'Behance',
          toggleb: 'modal',
          targetb: '#basicExampleModal-3',          
          badgeclass: 'badge badge-success'
         }
      ],
      tools: [
        { 
          icon: 'fab fa-adobe',
          title: 'Adobe Creative Cloud'
        },
        { 
          icon: 'fab fa-github',
          title: 'Github'
        },
        { 
          icon: 'fab fa-html5',
          title: 'HTML 5'
        },
        { 
          icon: 'fab fa-css3-alt',
          title: 'CSS 3'
        },
        { 
          icon: 'fab fa-vuejs',
          title: 'Vue JS'
        }
      ]
    }
  }
})