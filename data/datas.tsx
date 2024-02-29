import Home from "./home";
import abdos from "./workouts/abdos";
import mobility from "./workouts/mobility";
import morningRouting from "./workouts/morning-routine";
import pompes from "./workouts/pompes";
import stretching from "./workouts/stretching";
import verticalJump from "./workouts/verticalJump";
import warmup from "./workouts/warmup";
import warmupRoutine from "./workouts/warmup-routine";

const datas = {
  workouts: [
    morningRouting,
    warmupRoutine,
    pompes,
    abdos,
    warmup,
    verticalJump,
    stretching,
    mobility,
  ],
  home: Home,
};

export default datas;
