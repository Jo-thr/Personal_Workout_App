import warmup from "@assets/images/warmup.jpg";
import stretching from "@assets/images/stretching.png";
import session from "@assets/images/session.jpg";
import mobility from "@assets/images/mobility.png";

import seance01 from "@assets/images/seance/01.png";

const datas = 
  {
    workout: [
      {
        name: "Échauffement",
        slug: "echauffement",
        categorie: "Vertical Jump",
        series: 2,
        numberWork: 3,
        image: {
          title: "warm-up",
          src: warmup,
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
      },
      {
        name: "Séance",
        slug: "seance",
        categorie: "Vertical Jump",
        series: 1,
        numberWork: 13,
        image: {
          title: "Session",
          src: session,
        },
        works: [
          {
            id: 1,
            name: "Cheverside",
            description: (
              <>
                Cet exercice permet de protéger et de renforcer tes chevilles
                avant le gros travail de Jump. Ce sont des muscles souvent très
                peu travaillés ou alors lors d’un travail de proprioception.
                <br />
                Nous allons profiter de cet exercice pour cibler les muscles
                importants pour le Saut.
                <br />
                <br />
                Il est important d’avoir les jambes tendues et de ne pas fléchir
                les genoux.
                <br />
                Une fois cette position adoptée, tu vas venir pencher tes
                chevilles de gauche à droite au maximum que tu peux.
                <br />
                L’objectif est de ne pas plier les genoux et que tout le travail
                se fasse au niveau des chevilles.
                <br />
                Tu vas ressentir une sensation sur les côtés des tibias.
              </>
            ),
            image: {
              src: seance01,
              title: "Cheverside",
            },
            video: {
              url: "",
              title: "",
            },
            repetition: [{ number: 50, object: "répétitions" }],
            rest: { time: 15, mesure: "s", object: "repos" },
            series: [{ number: 4, object: "séries" }],
          },
          {
            id: 2,
            name: "Tibia",
            description: (
              <>
                On retrouve des exercices afin de renforcer la bandelette
                tibiale pour pouvoir avoir un arrêt et une propulsion beaucoup
                plus dynamique.
                <br />
                Il est important de travailler ces petits muscles qui jouent
                également un rôle favorisant la réussite au Dunk.
                <br />
                <br />
                Il faut trouver un mur ou une surface dure sur lequel ou
                laquelle tu peux t’appuyer. Tu mets tes pieds à 1 m devant le
                mur et tu mets tes fesses appuyées contre le mur. Tu peux
                également décoller tes fesses pour rendre l’exercice beaucoup
                plus dur.
                <br />
                Le but est de remonter la pointe de pieds vers le haut de façon
                dynamique et de redescendre de façon lente. Plus tu vas mettre
                tes pieds loin du mur et plus ta bandelette tibiale travaillera.
                <br />
                Attention de ne pas sur exagérer l’exercice.
                <br />
                Nous ciblons le muscle à l’avant du tibia appelé la bandelette
                tibiale qui nous permettra de nous arrêter et de nous propulser
                de façon beaucoup plus dynamique.
                <br />
                Il ne faut pas laisser à l’abandon les petits muscles puisque ce
                sont eux également qui jouent un rôle important lors de
                l’exécution d’un saut.
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
            repetition: [{ number: 30, object: "répétitions" }],
            rest: { time: 15, mesure: "s", object: "repos" },
            series: [{ number: 4, object: "séries" }],
          },
          {
            id: 3,
            name: "Mollets",
            description: (
              <>
                Il est bien de travailler l’avant du tibia tout en prenant en
                compte ce qu’il se passe à l’arrière. Ainsi nous allons
                renforcer le mollet en sachant que ce muscle contribue
                énormément lorsque l’on saute.
                <br />
                <br />
                Il nous suffit de trouver un escalier ou alors une surface
                solide où nous allons pouvoir mettre notre pointe de pied et
                laisser notre talon dans le vide. L’essentiel est de monter le
                plus vite possible tout en descendant lentement et ainsi de
                suite.
                <br />
                Il faut descendre à son maximum le talon dans le vide et faire
                en sorte que cela ne touche pas le sol. Il ne faut pas hésiter à
                prendre une surface solide de sorte à ce que le talon ne touche
                pas le sol en descendant.
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
            repetition: [{ number: 15, object: "répétitions de chaque côté" }],
            series: [{ number: 4, object: "séries" }],
          },
          {
            id: 4,
            name: "Explo Jump",
            description: (
              <>
                Cet exercice de corde à sauter est très important et idéal à ce
                moment précis. En effet nous venons de travailler les chevilles,
                le tibia et le mollet. Nous allons donc retrouver un exercice
                travaillant la pliométrie et pas que...
                <br />
                <br />
                Il te suffit, avec ou sans corde à sauter, d’effectuer sur place
                10 sauts avec ta jambe droite et ensuite 10 sauts avec ta jambe
                gauche tout en même temps.
                <br />
                <br />
                Si tu n’as pas de corde à sauter tu peux imiter cela avec la
                rotation de tes poignets.
                <br />
                <br />
                Tu ne dois pas te laisser écraser au sol lors de ta réception.
                Il est important d’avoir une réaction explosive et dynamique.
                <br />
                <br />
                Dans ta tête tu peux t’imaginer que le sol est chaud
                correspondant à de la lave, cela te permettra d’avoir une
                réaction beaucoup plus rapide sur ta remontée.
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
            duration: { time: 90, mesure: "s", object: "travail" },
            repetition: [{ number: 50, object: "répétitions de chaque côté" }],
            rest: { time: 30, mesure: "s", object: "repos" },
            series: [{ number: 4, object: "séries" }],
          },
          {
            id: 5,
            name: "Ischio-Jambier",
            description: (
              <>
                Dans cet exercice il sera important de travailler la cuisse et
                également le derrière de la cuisse puisque favoriser qu’un seul
                muscle est une des erreurs à éviter. C’est pourquoi les ischios
                vont bosser !<br />
                <br />
                Allongé sur le ventre avec les mains devant toi et les cuisses
                qui touchent le sol, tu vas venir monter tes chevilles pour
                qu’elles soient orientées vers le haut. Ensuite tu viendras
                placer un pied derrière le talon d’Achille. C’est donc la jambe
                qui est derrière ce talon qui va venir pousser ton pied en
                direction du sol. Simultanément le pied qui se fait emmener vers
                le sol vient mettre une résistance afin de travailler tes
                ischio-jambiers ; à toi de gérer la résistance.
                <br />
                <br />
                Une fois ce travail terminé tu enchaînes directement en te
                mettant sur le dos. Tu dois être le plus droit possible et tes
                talons doivent toucher le sol. Tu viens décoller les fesses puis
                réaliser de petits battements avec tes jambes sans que tes
                fesses touchent le sol. Tu es donc en appui seulement avec le
                haut de ton dos et ainsi les talons viennent faire des
                battements afin de faire travailler les ischio-jambiers.
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
            repetition: [
              {
                number: 10,
                object: "répétitions de chaque côtés",
              },
              {
                number: 10,
                mesure: "s",
                object: "de battements",
              },
            ],
            rest: { time: 30, mesure: "s", object: "repos" },
            series: [{ number: 4, object: "séries" }],
          },
          {
            id: 6,
            name: "Ascenseur sur une jambe",
            description: (
              <>
                Nous allons travailler les cuisses et plus précisément les
                quadriceps. Il serait préférable que tu trouves une petite cale
                à mettre sous le talon pour te permettre d’avoir plus de
                mobilité au niveau de ta cheville. En effet tout le monde n’a
                pas la cheville souple.
                <br />
                <br />
                C’est pourquoi, pour réaliser correctement cet exercice et
                éviter de compenser par un autre endroit de ton corps, je te
                conseille de mettre une cale sous ton pied. Si tu es dans ce cas
                précis et même si tu n’es pas dans ce cas là cela te permettra
                de cibler beaucoup plus ton quadriceps.
                <br />
                <br />
                Tu vas venir te mettre sur une jambe, étendre l’autre jambe sans
                qu’elle touche le sol. Tu vas descendre de sorte à ce que ton
                genou dépasse tes pieds. Fais attention que ton genou ne part
                pas sur ta droite ni sur ta gauche mais qu’il reste bien dans
                l’axe.
                <br />
                <br />
                Surveille également que ta hanche ne s’affaisse pas et de bien
                la garder droite. Une fois ta descente lente réalisée, tu peux
                ensuite remonter de façon dynamique lorsque ton nombre de séries
                est atteint. Tu effectues de nouveau la série demandée mais,
                cette fois-ci, tu descends rapidement et tu remontes rapidement
                également.
                <br />
                <br />
                Tout en gardant ton autre jambe tendue sur le talon qui touchera
                le sol au bout d’un moment mais tu ne dois en aucun cas prendre
                appui pour t’aider à te relever. Il est là pour délimiter la
                limite jusqu’où tu descends mais également si tu as une perte
                d’équilibre.
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
            repetition: [
              {
                number: 20,
                object: "répétitions",
              },
              {
                number: 10,
                object: "répétions dynamiques",
              },
            ],
            series: [{ number: 4, object: "séries" }],
          },
          {
            id: 7,
            name: "Repos",
            image: {
              src: "",
              title: "",
            },
            video: {
              url: "",
              title: "",
            },
            duration: { time: 60, mesure: "s", object: "repos" },
          },
          {
            id: 8,
            name: "Jump Max",
            description: (
              <>
                Cet enchaînement de mouvements va te permettre de regrouper le
                maximum d’éléments favorisant le saut vertical.
                <br />
                Il est très intéressant de le réaliser à ce stade sachant que
                l’on vient de travailler les quadriceps et les ischios. Il est
                bon de dynamiser tout cela et de transformer cette énergie en
                explosivité.
                <br />
                <br />
                Le but est de placer tes appuis largeur de tes épaules. Tu viens
                sauter à deux jambes le plus haut possible de sorte à atterrir à
                environ 1 m devant toi. Lors de ton atterrissage il se fera à
                une jambe puis tu viendras sauter sur cette même jambe le plus
                haut possible et tu atterriras toujours sur cette même jambe de
                façon à amortir en descendant doucement. Tu réalises ensuite le
                même enchaînement mais avec l’autre jambe.
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
            repetition: [{ number: 5, object: "répétitions de chaque côtés" }],
            rest: { time: 30, mesure: "s", object: "repos" },
            series: [{ number: 4, object: "séries" }],
          },
          {
            id: 9,
            name: "Repos",
            image: {
              src: "",
              title: "",
            },
            video: {
              url: "",
              title: "",
            },
            duration: { time: 180, mesure: "s", object: "repos" },
          },
          {
            id: 10,
            name: "Jump Dynamique",
            description: (
              <>
                Nous allons cibler une jambe en particulier afin de travailler
                dessus de façon dynamique et explosive.
                <br />
                <br />
                Pour que cet exercice soit vraiment bien réalisé pour ton saut
                vertical, tu vas mettre une jambe devant toi et l’autre
                surélevée sur une table ou une chaise en fonction de ce que tu
                as à proximité.
                <br />
                La jambe qui est devant ne doit pas être trop proche du support
                mais plutôt assez loin comme sur la vidéo ou sur les photos.
                <br />
                Tu viens réaliser des sauts en imaginant que le sol correspond à
                de la lave afin d’être le plus percutant et explosif lors du
                contact avec le sol.
                <br />
                <br />
                Tu réalises 10 sauts et au 10ème tu viens descendre au plus bas
                en amortissant. Tu ressors ensuite pour effectuer une nouvelle
                série de 10 sauts et de la même manière au 10ème tu viens
                descendre lentement et au plus bas. Tu fais de nouveau une série
                de 10 sauts pour réaliser la même chose. Au total tu auras
                exécuté 30 séries.
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
            repetition: [
              {
                number: 30,
                object: "répétitions de chaque côtés",
              },
              {
                number: 1,
                object: "descente au max toutes les 10",
              },
            ],
            rest: { time: 15, mesure: "s", object: "repos" },
            series: [{ number: 4, object: "séries" }],
          },
          {
            id: 11,
            name: "Rameur",
            description: (
              <>
                Il s’agira de travailler la ceinture abdominale tout en musclant
                l’ilio-psoas (anciennement psoas-iliaque) qui aidera dans cet
                exercice à avoir un meilleur transfert d’énergie.
                <br />
                <br />
                Installe toi de façon assise sans que le dos ni les pieds
                touchent le sol. Tu dois être en équilibre et les pieds vont
                pousser simultanément en avant. Le haut de ton corps va venir
                chercher en arrière afin d’être équilibré. Tu viens ensuite
                ramener tes jambes au plus proche de toi sans toucher le sol.
                Puis tu ramènes également ton corps vers l’avant et ainsi de
                suite.
                <br />
                Tu peux t’aider de tes mains pour avoir un meilleur équilibre
                sans qu’elles touchent le sol. Il est intéressant de ramener les
                mains vers soi lorsque l’on pousse avec les jambes et de
                détendre les mains lorsque l’on ramène les jambes.
                <br />
                <br />
                Une fois ta première série réalisée, enchaîne directement en
                gardant l’équilibre et cette fois-ci tu dois battre des pieds
                comme si tu faisais du vélo dans le vide sans que les mains, le
                haut du corps et tes pieds touchent le sol. Il n’y aura que les
                fesses en contact avec le sol.
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
            repetition: [
              { number: 10, object: "répétitions" },
              { number: 10, mesure: "s", object: "travail" },
            ],
            rest: { time: 10, mesure: "s", object: "repos" },
            series: [{ number: 4, object: "séries" }],
          },
          {
            id: 12,
            name: "Escalier Dynamique",
            description: (
              <>
                Dans ces exercices, tout le corps sera sollicité et on ne
                travaillera pas que les jambes. Cela nous permettra de se
                rapprocher au plus près d’une situation de saut.
                <br />
                <br />
                L’idéal est de trouver un certain nombre de marches d’escalier
                afin d’optimiser les sauts. En général entre 4 et 6 sauts
                réalisables sont bien.
                <br />
                Tu te mets en bas des escaliers à 2 pieds. Tu vas venir sauter
                deux à trois marches en t’aidant de tes mains et ainsi de suite.
                Evidemment lorsque tu atterris sur les marches ne t’écrase pas
                pour pouvoir reprendre la force suffisante pour sauter.
                <br />
                Il est important lors de tout contact avec les escaliers
                d’imaginer que le sol correspond à de la lave ou qu’il est
                chaud.
                <br />
                Tu dois remonter le plus vite possible dynamiquement et passer à
                la marche suivante. N’oublie surtout pas la respiration qui te
                permettra d’être plus performant.
                <br />
                Une fois les séries réalisées à 2 pieds, tu peux enchaîner avec
                un pied et faire le même mouvement.
                <br />
                Cette fois-ci tu sauteras sûrement moins de marche. L’idée est
                de ne pas s’écraser sur une marche et de rebondir de façon
                explosive en restant le même.
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
            duration: { time: 30, mesure: "s", object: "travail" },
            rest: { time: 60, mesure: "s", object: "repos" },
            series: [
              {
                number: 3,
                mesure: "fois",
                object: "à 2 jambes",
              },
              {
                number: 3,
                mesure: "fois",
                object: "à 1 jambe",
              },
            ],
          },
          {
            id: 13,
            name: "Repos",
            image: {
              src: "",
              title: "",
            },
            video: {
              url: "",
              title: "",
            },
            duration: { time: 180, mesure: 's', object: "repos" },
          },
          {
            id: 14,
            name: "Transfert d'Energie",
            description: (
              <>
                Dans cet exercice tu partiras d’une position au sol à une
                position debout en un temps très court.
                <br />
                <br />
                L’objectif est de se mettre à genoux, largeur des épaules avec
                les pointes de pieds sur le sol. Tu vas venir en sautant sur
                place te remettre le plus rapidement possible sur tes pieds afin
                de bondir directement le plus haut possible. Pense bien à la
                respiration.
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
            repetition: [{ number: 4, object: "répétitions" }],
            rest: { time: 30, mesure: "s", object: "repos" },
            series: [{ number: 4, object: "séries" }],
          },
          {
            id: 15,
            name: "Repos",
            image: {
              src: "",
              title: "",
            },
            video: {
              url: "",
              title: "",
            },
            duration: { time: 60, mesure: "s", object: "repos" },
          },
          {
            id: 16,
            name: "Gainage Dynamique Croisé",
            description: (
              <>
                Le gainage est mis en avant lors d’un Dunk. Nous allons le
                travailler ici en mouvement de sorte à developper d’autres
                groupes musculaires en même temps.
                <br />
                <br />
                Nous allons nous positionner sur les mains avec les pieds le
                plus loin et les jambes tendues. Fais attention à ne pas avoir
                les fesses trop baissées ou trop montées.
                <br />
                <br />
                Le but est de maintenir cette position tout en ramenant le genou
                au niveau de la poitrine opposé à notre jambe tout en alternant
                la jambe droite et la jambe gauche.
                <br />
                <br />
                Exemple : je ramène mon genou droit au niveau de ma poitrine du
                côté gauche. Le genou ne touchera pas la poitrine mais c’est un
                exemple et une idée que tu dois avoir en tête afin de bien
                réaliser l’exercice.
                <br />
                Cela provoque également une rotation du bassin en même temps. La
                respiration joue un rôle important à ne surtout pas négliger.
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
            duration: { time: 30, mesure: "s", object: "travail" },
            rest: { time: 30, mesure: "s", object: "repos" },
            series: [{ number: 3, object: "séries" }],
          },
          {
            id: 17,
            name: "Repos",
            image: {
              src: "",
              title: "",
            },
            video: {
              url: "",
              title: "",
            },
            duration: { time: 60, mesure: "s", object: "repos" },
          },
          {
            id: 18,
            name: "Poster",
            description: (
              <>
                Il sera vu un enchaînement de mouvements nous rapprochant au
                plus près d’une situation de saut lors d’un Dunk.
                <br />
                En étant largeur des épaules, tu viens réaliser un tipping
                c’est-à-dire courir sur place très rapidement en ayant les pieds
                le plus proche du sol. Tu maintiens cette position durant 4
                secondes et ensuite tu réalises 4 grands pas au plus loin
                possible. C’est seulement au quatrième que tu viens faire un
                plus petit pas pour pouvoir sauter le plus haut possible à une
                jambe. Tu alterneras sur le saut à la fin la jambe droite puis
                la jambe gauche sur cet exercice. Il faut réaliser 6 fois avant
                le repos.
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
            repetition: [
              { number: 4, mesure: "s", object: "tipping" },
              { number: 4, object: "grands pas" },
              { number: 1, object: "grand saut vertical" },
            ],
            rest: { time: 30, mesure: "s", object: "repos" },
            series: [
              { number: 6, object: "fois" },
              { number: 4, object: "séries" },
            ],
          },
        ],
      },
      {
        name: "Étirements",
        slug: "etirements",
        categorie: "Vertical Jump",
        series: 1,
        numberWork: 12,
        image: {
          title: "stretching",
          src: stretching,
        },
        works: [
          {
            id: 1,
            name: "Étirement n°1",
            description: (
              <>
                Place ton pouce entre l’orteil et les autres doigts de pieds
                puis en même temps tu ramènes le pied vers toi. Il faudra le
                tirer vers l’extérieur.
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
            duration: { time: 30, mesure: "s", object: "chaque pied" },
            series: [{ number: 3, object: "séries" }],
          },
          {
            id: 2,
            name: "Étirement n°2",
            description: (
              <>
                Il suffit de placer ton pied derrière toi sur la pointe des
                pieds et le talon doit se diriger vers l’extérieur.
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
            duration: { time: 30, mesure: "s", object: "chaque pied" },
            series: [{ number: 3, object: "séries" }],
          },
          {
            id: 3,
            name: "Étirement n°3",
            description: (
              <>
                Mains appuyées au mur, fléchis légèrement le genou de la jambe
                avant ou le placer derrière.
                <br />
                En gardant les talons au sol et tu te penches vers le mur en
                tendant la jambe arrière jusqu'à ce que tu sentes un étirement
                dans le mollet.
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
            duration: { time: 30, mesure: "s", object: "chaque pied" },
            series: [{ number: 3, object: "séries" }],
          },
          {
            id: 4,
            name: "Étirement n°4",
            description: (
              <>
                Saisis ton pied, place-le contre le mur pendant que ton genou
                touche le sol. Le but est de rapprocher ton genou le plus près
                du mur et place ton autre jambe devant toi pour pouvoir te
                relever au maximum afin d’être droit. L’objectif est de ne pas
                forcer.
                <br />
                Si cela est compliqué, alors, n’hésite pas à éloigner le genou
                du mur.
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
            duration: { time: 30, mesure: "s", object: "chaque jambe" },
            series: [{ number: 3, object: "séries" }],
          },
          {
            id: 5,
            name: "Étirement n°5",
            description: (
              <>
                Laisse tes pieds joints, fais en sorte de tendre tes jambes sans
                plier les genoux et enroule toi en essayant de toucher le sol
                avec tes doigts. Si tu réussis alors n’hésite pas de toucher
                avec la paume de la main, et plus encore si besoin, lorsque tu
                remontes, déroule toi de façon lente.
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
            duration: { time: 30, mesure: "s", object: "travail" },
            rest: { time: 5, mesure: "s", object: "repos" },
            series: [{ number: 3, object: "séries" }],
          },
          {
            id: 6,
            name: "Étirement n°6",
            description: (
              <>
                Munis-toi d'un support comme une chaise. Place un talon dessus
                avec la jambe tendue et la pointe de pied ramenée vers toi.
                L'autre jambe est tendue avec le pied au sol pour maintenir
                l'équilibre. Garde ton tronc gainé et ta nuque dans l'alignement
                du tronc. Tu peux placer tes mains sur tes hanches ou derrière
                ton dos par exemple.
                <br />
                Bascule ton buste en avant tout en gardant la jambe tendue. Aide
                toi également en essayant de pousser les fesses en arrière.
                <br />
                Relâche doucement l'étirement une fois terminée. Ne courbe pas
                le dos tout le long de l'étirement.
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
            duration: { time: 30, mesure: "s", object: "chaque jambe" },
            series: [{ number: 3, object: "séries" }],
          },
          {
            id: 7,
            name: "Étirement n°7",
            description: (
              <>
                Assis au sol, tend une jambe vers l’arrière et plie l’autre sur
                le flanc devant toi. Tout en expirant descend le buste lentement
                en direction du genou. Aide-toi des deux bras pour assurer ta
                stabilité.
                <br />
                Maintiens la position 30 secondes puis change de jambe et répète
                le mouvement.
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
            duration: { time: 30, mesure: "s", object: "chaque jambe" },
            series: [{ number: 3, object: "séries" }],
          },
          {
            id: 8,
            name: "Étirement n°8",
            description: (
              <>
                Mets-toi en position debout et fais passer une jambe devant
                l’autre. La jambe qui passe devant l’autre jambe tu penches ton
                corps à l’opposé. Par exemple si ta jambe droite passe devant la
                jambe gauche alors tu te penches du côté gauche. Place tes mains
                sur les hanches et maintiens cette position.
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
            duration: { time: 30, mesure: "s", object: "chaque jambe" },
            series: [{ number: 3, object: "séries" }],
          },
          {
            id: 9,
            name: "Étirement n°9",
            description: (
              <>
                Tu es assis en tailleur, les plantes de pieds se font face et
                sont en contact. Tu dois attraper tes pieds avec les mains et
                repousser tes genoux vers le bas avec tes coudes.
                <br />
                Le bas du dos doit rester droit et ne pas s'arrondir.
                L'étirement se fait pendant le temps expiratoire en soufflant
                profondément et lentement.
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
            duration: { time: 30, mesure: "s", object: "travail" },
            rest: { time: 5, mesure: "s", object: "repos" },
            series: [{ number: 3, object: "séries" }],
          },
          {
            id: 10,
            name: "Étirement n°10",
            description: (
              <>
                Place ta jambe le plus tendue possible en arrière et une autre
                jambe devant pliée. Tu dois être en position assise sur tes
                pieds. Maintiens cette position et penche ton corps vers
                l’arrière afin d’étirer l’ilio-psoas.
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
            duration: { time: 30, mesure: "s", object: "chaque jambe" },
            series: [{ number: 3, object: "séries" }],
          },
          {
            id: 11,
            name: "Étirement n°11",
            description: (
              <>
                Pose le pied gauche à son opposé jusqu’à avoir une rotation au
                niveau des lombaires. Laisse ton bassin suivre mais fixe bien
                tes deux épaules au sol.
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
            duration: { time: 30, mesure: "s", object: "chaque jambe" },
            series: [{ number: 3, object: "séries" }],
          },
          {
            id: 12,
            name: "Étirement n°12",
            description: (
              <>
                Posées contre un mur à la verticale, jambes gonflées, lourdes et
                parfois douloureuses se voient donner un second souffle dans
                cette position. Elle est en effet très efficace pour réamorcer
                la pompe veineuse. Résultat ? Le sang circule mieux dans les
                veines et ne stagne plus dans les chevilles et les pieds.
                <br />
                Évite les sensations de jambes lourdes et permet de récupérer
                plus vite. La récupération et la regénération de tes cellules
                permettent d’enchaîner les efforts.
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
            duration: { time: 900, mesure: "s", object: "travail" },
            series: [{ number: 1, object: "série" }],
          },
        ],
      },
      {
        name: "Mobilité",
        slug: "mobilité",
        categorie: "Vertical Jump",
        series: 1,
        numberWork: 5,
        image: {
          title: "mobility",
          src: mobility,
        },
        works: [
          {
            id: 1,
            name: "Mobilité n°1",
            description: (
              <>
                Se placer sur le sol avec les genoux et le tibia contre le sol.
                Ainsi, placer les pieds de sorte à ce que le côté intérieur des
                pieds soit en contact avec le sol.
                <br />
                Réaliser des mouvements sans maintenir la position, en essayant
                d’avoir les fesses qui touchent le sol.
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
            duration: {
              mesure: "Alterner",
              object: "Haut <-> Bas",
            },
            series: [{ number: 10, object: "séries" }],
          },
          {
            id: 2,
            name: "Mobilité n°2",
            description: (
              <>
                Se mettre assis, le dos droit, ramener les pieds vers soi, en
                pliant les genoux de sorte à ce que tes genoux soient du même
                côté tout en effectuant une rotation du bassin.
                <br />
                Ensuite si tes genoux sont du côté droit passe-les du côté
                gauche en alternant tout cela et en essayant de garder ton haut
                du corps droit.
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
            duration: {
              mesure: "Alterner",
              object: "Gauche <-> Droite",
            },
            series: [{ number: 20, object: "séries" }],
          },
          {
            id: 3,
            name: "Mobilité n°3",
            description: (
              <>
                Place une jambe tendue derrière toi et l’autre devant toi.
                Fléchis bien de sorte à avoir un angle à 90°. Le pied de devant
                est à plat et celui de derrière sur la pointe. Rien d’autre doit
                toucher le sol à part ta main pour avoir de l’équilibre.
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
            duration: {
              mesure: "Alterner",
              object: "Gauche <-> Droite",
            },
            repetition: [
              {
                number: 10,
                object: "répétitions à Gauche",
              },
              {
                number: 10,
                object: "répétitions à Droite",
              },
            ],
            series: [{ number: 1, object: "séries" }],
          },
          {
            id: 4,
            name: "Mobilité n°4",
            description: (
              <>
                Fléchis-toi de sorte à être sur la pointe des pieds et passe tes
                coudes à l’intérieur de tes genoux. Avec tes genoux, ramène tes
                coudes vers l’intérieur et ensuite avec tes coudes, ramène tes
                genoux à l’extérieur et ainsi de suite tout en y mettant une
                certaine résistance.
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
            duration: {
              mesure: "Alterner",
              object: "Intérieur <-> Extérieur",
            },
            series: [{ number: 15, object: "séries" }],
          },
          {
            id: 5,
            name: "Mobilité n°5",
            description: (
              <>
                C’est un exercice que nous avons vu également dans le programme
                qui est très intéressant sur la mobilité de la cheville. Le but
                est de descendre ton talon le plus bas possible. C’est pour cela
                qu’un support solide où tu peux mettre la pointe de pied et
                ainsi descendre le talon le plus bas est important, remonte par
                la suite et redescends.
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
            repetition: [{ number: 5, object: "répétitions sur chaque pied" }],
            series: [{ number: 4, object: "séries" }],
          },
        ],
      },
    ],
  }

export default datas;
