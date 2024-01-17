import warmup from "./workouts/warmup";
import warmupRoutine from "./workouts/warmup-routine";
import pompes from "./workouts/pompes";
import abdos from "./workouts/abdos";
import stretching from "./workouts/stretching";
import mobility from "./workouts/mobility";
import Home from "./home";
import verticalJump from "./workouts/verticalJump";

const datas = {
  workouts: [
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
