import { checkWeather } from "./tests/checkWeather.spec";

void checkWeather()
  .then(() => {
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });