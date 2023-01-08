import warmupImg from "@assets/images/warmup.jpg";

const warmup = {
  name: "Échauffement",
  slug: "echauffement",
  categorie: "Vertical Jump",
  series: 2,
  numberWork: 3,
  image: {
    title: "warm-up",
    src: warmupImg,
  },
  works: [
    {
      id: 1,
      name: "Course",
      description: "",
      image: {
        src: "",
        title: "Image",
      },
      video: {
        url: "",
        title: "Video",
      },
      duration: { time: 30, mesure: "s", object: "travail" },
      series: [{ number: "2", object: "séries" }],
    },
    {
      id: 2,
      name: "Talons aux fesses",
      description: "",
      image: {
        src: "",
        title: "Image",
      },
      video: {
        url: "",
        title: "Video",
      },
      duration: { time: 15, mesure: "s", object: "travail" },
      series: [{ number: "2", object: "séries" }],
    },
    {
      id: 3,
      name: "Montées de genoux",
      description: "",
      image: {
        src: "",
        title: "Image",
      },
      video: {
        url: "",
        title: "Video",
      },
      duration: { time: 15, mesure: "s", object: "travail" },
      series: [{ number: 2, object: "séries" }],
    },
  ],
};

export default warmup;
