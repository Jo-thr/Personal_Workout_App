import Win from "@public/images/champion.jpg";

const mobility = {
  name: "Mobilité",
  slug: "mobilite",
  works: [
    {
      id: 1,
      name: "Mobilité n°1",
      description: (
        <>
          Se placer sur le sol avec les genoux et le tibia contre le sol. Ainsi,
          placer les pieds de sorte à ce que le côté intérieur des pieds soit en
          contact avec le sol.
          <br />
          Réaliser des mouvements sans maintenir la position, en essayant
          d’avoir les fesses qui touchent le sol.
        </>
      ),
      image: {
        src: "",
        title: "",
      },
      repetition: 10,
      object: "Alterner Haut <-> Bas",
    },
    {
      id: 2,
      name: "Mobilité n°2",
      description: (
        <>
          Se mettre assis, le dos droit, ramener les pieds vers soi, en pliant
          les genoux de sorte à ce que tes genoux soient du même côté tout en
          effectuant une rotation du bassin.
          <br />
          Ensuite si tes genoux sont du côté droit passe-les du côté gauche en
          alternant tout cela et en essayant de garder ton haut du corps droit.
        </>
      ),
      image: {
        src: "",
        title: "",
      },
      repetition: 20,
      object: "Alterner Gauche <-> Droite",
    },
    {
      id: 3,
      name: "Mobilité n°3",
      description: (
        <>
          Place une jambe tendue derrière toi et l’autre devant toi. Fléchis
          bien de sorte à avoir un angle à 90°. Le pied de devant est à plat et
          celui de derrière sur la pointe. Rien d’autre doit toucher le sol à
          part ta main pour avoir de l’équilibre.
          <br />
          Ensuite, avec une main, aller chercher au-dessus de toi tout en
          tournant ton bassin, puis change de main.
        </>
      ),
      image: {
        src: "",
        title: "",
      },
      video: {
        url: "",
        title: "",
      },
      repetition: 20,
      object: "10 à gauche puis 10 à droite",
    },
    {
      id: 4,
      name: "Mobilité n°4",
      description: (
        <>
          Fléchis-toi de sorte à être sur la pointe des pieds et passe tes
          coudes à l’intérieur de tes genoux. Avec tes genoux, ramène tes coudes
          vers l’intérieur et ensuite avec tes coudes, ramène tes genoux à
          l’extérieur et ainsi de suite tout en y mettant une certaine
          résistance.
        </>
      ),
      image: {
        src: "",
        title: "",
      },
      repetition: 15,
      object: "Alterner Intérieur <-> Extérieur",
    },
    {
      id: 5,
      name: "Mobilité n°5",
      description: (
        <>
          C’est un exercice que nous avons vu également dans le programme qui
          est très intéressant sur la mobilité de la cheville. Le but est de
          descendre ton talon le plus bas possible. C’est pour cela qu’un
          support solide où tu peux mettre la pointe de pied et ainsi descendre
          le talon le plus bas est important, remonte par la suite et
          redescends.
        </>
      ),
      image: {
        src: "",
        title: "",
      },
      repetition: 20,
      object: "reps sur chaque pied",
    },

    /* END */
    {
      id: 6,
      name: "You're the boss !",
      image: {
        src: Win,
        title: "",
      },
    },
  ],
};

export default mobility;
