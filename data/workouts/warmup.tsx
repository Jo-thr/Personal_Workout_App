import Running from "@public/images/entrainements/running.jpg";
import Fesses from "@public/images/entrainements/fesses.jpeg";
import Genoux from "@public/images/entrainements/genoux.jpeg";
import Win from "@public/images/champion.jpg";

const warmup = {
  name: "Échauffement",
  slug: "echauffement",
  works: [
    {
      id: 1,
      name: "Course",
      description: "",
      image: {
        src: Running,
        title: "Image",
      },
      timer: 30,
    },
    {
      id: 2,
      name: "Talons aux fesses",
      description: "",
      image: {
        src: Fesses,
        title: "Image",
      },
      timer: 15,
    },
    {
      id: 3,
      name: "Montées de genoux",
      description: "",
      image: {
        src: Genoux,
        title: "Image",
      },
      timer: 15,
    },
    {
      id: 4,
      name: "Course",
      description: "",
      image: {
        src: Running,
        title: "Image",
      },
      timer: 30,
    },
    {
      id: 5,
      name: "Talons aux fesses",
      description: "",
      image: {
        src: Fesses,
        title: "Image",
      },
      timer: 15,
    },
    {
      id: 6,
      name: "Montées de genoux",
      description: "",
      image: {
        src: Genoux,
        title: "Image",
      },
      timer: 15,
    },
    /* END */
    {
      id: 7,
      name: "You're the boss !",
      image: {
        src: Win,
        title: "",
      },
    },
  ],
};

export default warmup;
