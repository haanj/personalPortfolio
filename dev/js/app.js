var vm = new Vue({
  el: '#app',

  data: {
    activeTab: 'projects',
    smoke: 'hello vue',
    projects: [
      {
        name: "CF Package Manager",
        description: "RESTful package management server that can be deployed virtually anywhere. Corresponding Command Line Interface allows the user to upload directories to the server as packages, or to download existing packages. Features version control, user authentication/authorization, and working version control. Written in JavaScript using Node, Express, and MongoDB.",
        imageUrl: "media/cfpm.png",
        githubUrl: "https://github.com/haanj/cfpm"
      },
      {
        name: "Story Blocks",
        description: "Story Blocks is a proof-of-concept for a new social-media platform. Utilizing new CSS features, Story Blocks displays images and articles on three dimensional spinning cubes, written in CSS. The app is a full MEAN-stack application, utilizing MongoDB, Express, Angular, and Node.",
        imageUrl: "media/storyblocks.png",
        githubUrl: "https://github.com/cube10/cube10"
      },
      {
        name: "Bitmap Transformer",
        description: "This is a command-line tool for manipulating non-palette .bmp images. It was written as an exercise to gain better understanding of computer bits. It is written entirely in JavaScript",
        imageUrl: "media/bitmapManipulation.png",
        githubUrl: "https://github.com/haanj/bitmapManipulation"
      },
      {
        name: "Café Mitra",
        description: "This is a simple, single-page website for a mock cafe business. I was just trying my hand at a simple, clean design. It's a simple static site, using HTML5, SCSS, and Twitter Bootstrap",
        imageUrl: "media/coffee.png",
        githubUrl: "https://github.com/haanj/mockCafe",
        linkUrl: "/coffee/"
      }

    ]
  }
});
