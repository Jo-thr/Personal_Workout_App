import Abdos from "@public/picto/abdos.png";
import Echauffement from "@public/picto/echauffement.png";
import Jump from "@public/picto/jump.png";
import Muscle from "@public/picto/muscle.png";

const Home = {
  title: "Welcome",
  // subtitle: "You're only few steps away to dunk",
  programTitle: "Workout programs",
  filters: [],
  categories: [{ name: "Routine" }, { name: "Vertical Jump" }],
  works: [
    {
      title: "Échauffement",
      categorie: "Routine",
      slug: "workout/echauffement-routine",
      picto: Echauffement,
    },
    {
      title: "100 Pompes",
      categorie: "Routine",
      slug: "workout/pompes",
      picto: Muscle,
    },
    {
      title: "Abdos",
      categorie: "Routine",
      slug: "workout/abdos",
      picto: Abdos,
    },
    {
      title: "Échauffement",
      categorie: "Vertical Jump",
      slug: "workout/echauffement",
      picto: Jump,
    },
    {
      title: "Workout",
      categorie: "Vertical Jump",
      slug: "workout/vertical-jump",
      picto: Jump,
    },
    {
      title: "Étirements",
      categorie: "Vertical Jump",
      slug: "workout/etirements",
      picto: Jump,
    },
    {
      title: "Mobilité",
      categorie: "Vertical Jump",
      slug: "workout/mobilite",
      picto: Jump,
    },
  ],
};
export default Home;
