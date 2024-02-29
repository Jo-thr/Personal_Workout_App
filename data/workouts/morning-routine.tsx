import Win from "@public/images/champion.jpg";
import MR1 from "@public/images/morningRoutine/01.webp";
import MR2 from "@public/images/morningRoutine/02.webp";
import MR3 from "@public/images/morningRoutine/03.jpg";
import MR4 from "@public/images/morningRoutine/04.webp";
import MR5 from "@public/images/morningRoutine/05.webp";
import MR6 from "@public/images/morningRoutine/06.webp";
import MR7 from "@public/images/morningRoutine/07.webp";

const morningRouting = {
  name: "Morning Routine",
  slug: "morning-routine",
  works: [
    {
      id: 1,
      name: "Chien tête Haut/Bas",
      description: "",
      image: {
        src: MR1,
        title: "Image",
      },
      repetition: 10,
      object:
        "Inspire en creusant le bas du dos, expire et rentre le ventre en dos rond",
    },
    {
      id: 2,
      name: "L'enfant",
      description: "",
      image: {
        src: MR2,
        title: "Image",
      },
      repetition: 10,
      object: "A/R hanches vers les talons",
    },
    {
      id: 3,
      name: "Aiguille enfilée",
      description: "",
      image: {
        src: MR3,
        title: "Image",
      },
      repetition: 20,
      object: "Alterner Gauche-Droite",
    },
    {
      id: 4,
      name: "Étirement latéral",
      description: "",
      image: {
        src: MR4,
        title: "Image",
      },
      timer: 80,
      object: "40s par côtés",
    },
    {
      id: 5,
      name: "Trapèzes supérieurs",
      description: "",
      image: {
        src: MR5,
        title: "Image",
      },
      timer: 60,
      repetition: 3,
      object: "30s par côtés",
    },
    {
      id: 6,
      name: "Épaules",
      description: "",
      image: {
        src: MR6,
        title: "Image",
      },
      timer: 60,
      object: "30s dans un sens puis l'autre",
    },
    {
      id: 7,
      name: "Gainage côté gauche dynamique",
      description: "",
      image: {
        src: MR7,
        title: "Image",
      },
      repetition: 10,
      object: "3s en bas",
    },
    /* END */
    {
      id: 8,
      name: "You're the boss !",
      image: {
        src: Win,
        title: "",
      },
    },
  ],
};

export default morningRouting;
