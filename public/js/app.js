var vm = new Vue({
  el: '#app',

  data: {
    smoke: 'hello vue',
    projects: [
      {
        name: "CF Package Manager",
        description: "RESTful package management server that can be deployed virtually anywhere. Corresponding Command Line Interface allows the user to upload directories to the server as packages, or to download existing packages. Features version control, user authentication/authorization, and working version control. Written in JavaScript using Node, Express, and MongoDB.",
        imageUrl: "http://lorempixel.com/image_output/abstract-q-c-800-800-9.jpg",
        githubUrl: "https://github.com/haanj/cfpm"
      },
      {
        name: "Story Blocks",
        description: "Story Blocks is a proof-of-concept for a new social-media platform. Utilizing new CSS features, Story Blocks",
        imageUrl: "http://lorempixel.com/image_output/abstract-q-c-800-800-9.jpg",
        githubUrl: "https://github.com/haanj/cfpm"
      }
    
    ]
  }
});
