const warmup = {
  name: "Échauffement",
  slug: "echauffement",
  categorie: "Vertical Jump",
  series: 1,
  numberWork: 6,
  image: {
    title: "warm-up",
    src: "/images/warmup.jpg",
  },
  works: [
    {
      id: 1,
      name: "Course",
      description: "",
      image: {
        src: "/images/entrainements/running.jpg",
        title: "Image",
      },
      video: {
        url: "",
        title: "Video",
      },
      duration: { time: 30, mesure: "s", object: "travail" },
      series: [{ number: 1, object: "série" }],
    },
    {
      id: 2,
      name: "Talons aux fesses",
      description: "",
      image: {
        src: "/images/entrainements/fesses.jpeg",
        title: "Image",
      },
      video: {
        url: "",
        title: "Video",
      },

      duration: { time: 90, mesure: "s", object: "travail" },
      repetition: [
        { number: 10, object: "reps à Gauche" },
        { number: 10, object: "reps à Droite" },
      ],
      rest: { time: 30, mesure: "s", object: "repos" },
      series: [{ number: 4, object: "séries" }],
      /*
      duration: { time: 15, mesure: "s", object: "travail" },
      series: [{ number: 1, object: "série" }],
       */
    },
    {
      id: 3,
      name: "Montées de genoux",
      description: "",
      image: {
        src: "/images/entrainements/genoux.jpeg",
        title: "Image",
      },
      video: {
        url: "",
        title: "Video",
      },
      duration: { time: 15, mesure: "s", object: "travail" },
      series: [{ number: 1, object: "série" }],
    },
    {
      id: 4,
      name: "Course",
      description: "",
      image: {
        src: "/images/entrainements/running.jpg",
        title: "Image",
      },
      video: {
        url: "",
        title: "Video",
      },
      duration: { time: 30, mesure: "s", object: "travail" },
      series: [{ number: 1, object: "série" }],
    },
    {
      id: 5,
      name: "Talons aux fesses",
      description: "",
      image: {
        src: "/images/entrainements/fesses.jpeg",
        title: "Image",
      },
      video: {
        url: "",
        title: "Video",
      },
      duration: { time: 15, mesure: "s", object: "travail" },
      series: [{ number: 1, object: "série" }],
    },
    {
      id: 6,
      name: "Montées de genoux",
      description: "",
      image: {
        src: "/images/entrainements/genoux.jpeg",
        title: "Image",
      },
      video: {
        url: "",
        title: "Video",
      },
      duration: { time: 15, mesure: "s", object: "travail" },
      series: [{ number: 1, object: "série" }],
    },
  ],
};

export default warmup;
