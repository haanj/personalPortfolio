var vm = new Vue({
  el: '#app',

  data: {
    activeTab: 'projects',
    smoke: 'hello vue',
    socialLinks: [
      {
        name: "Twitter",
        href: "https://twitter.com/haan_joshua",
        icon: "fa fa-twitter-square"
      },
      {
        name: "GitHub",
        href: "https://github.com/haanj",
        icon: "fa fa-github-square"
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/haanj",
        icon: "fa fa-linkedin-square"
      },
      {
        name: "Email",
        href: "mailto:joshua.haan@ymail.com",
        icon: "fa fa-envelope-square"
      },
      {
        name: "Resume",
        href: "media/haanjResume.pdf",
        icon: "fa fa-file-text"
      }
    ],
    projects: [
      {
        name: "Character Backstory Generator",
        description: "AngularJS app that generates random roleplaying game character backstories to inspire players. A pretty straightforward demonstration in modular AngularJS design, featuring Webpack, object oriented programming principals, and custom services, controllers, and directives. The design uses Twitter Bootstrap with overrides written in SCSS.",
        imageUrl: "media/backstory.jpg",
        githubUrl: "https://github.com/haanj/backstoryApp",
        linkUrl: "/backstoryApp/"
      },
      {
        name: "Café Mitra",
        description: "This is a single-page website for a mock cafe business. I was just trying my hand at a simple, clean design. It's a simple static site, using HTML5, SCSS, and Twitter Bootstrap",
        imageUrl: "media/coffee.png",
        githubUrl: "https://github.com/haanj/mockCafe",
        linkUrl: "/coffee/"
      },
      {
        name: "CF Package Manager",
        description: "RESTful package management server that can be deployed virtually anywhere. Corresponding Command Line Interface allows the user to upload directories to the server as packages, or to download existing packages. Features version control, user authentication/authorization, and working version control. Written in JavaScript using Node, Express, and MongoDB.",
        imageUrl: "media/cfpm.png",
        githubUrl: "https://github.com/haanj/cfpm"
      },
      {
        name: "Bitmap Transformer",
        description: "This is a command-line tool for manipulating non-palette .bmp images. It was written as an exercise to gain better understanding of computer bits. It is written entirely in JavaScript",
        imageUrl: "media/bitmapManipulation.png",
        githubUrl: "https://github.com/haanj/bitmapManipulation"
      }
    ]
  }
});
