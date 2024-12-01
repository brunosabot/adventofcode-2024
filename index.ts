import kleur from "kleur";
import fs from "fs";

const { blue, green, yellow } = kleur;

const withTimer = async (
  method: (input: string) => Promise<string>,
  input: string,
  day: number,
  part: number,
) => {
  const startTime = new Date().getTime();
  const result = await method(input);
  const endTime = new Date().getTime();

  const timeInSeconds = Math.round((100 * (endTime - startTime)) / 1000) / 100;

  // eslint-disable-next-line no-console
  console.log(
    `${blue(`Result day ${day} part ${part}`)} (${yellow(
      `${timeInSeconds}s`,
    )}): "${green(result)}"`,
  );
};

const getInputDay = (day: number, part: number) =>
  fs.readFileSync(`./day${day}/input-${part}.txt`);
const getScriptFile = (day: number, part: number) =>
  `./day${day}/part-${part}.ts`;

if (process.env.NODE_ENV !== "test") {
  (async function run() {
    const day = +(process.argv[2] ?? "1");
    const part = +(process.argv[3] ?? "0");

    if (part === 0 || part === 1) {
      const inputBuffer = getInputDay(day, 1);
      const { main } = await import(getScriptFile(day, 1));
      withTimer(main, inputBuffer.toString(), day, 1);
    }

    if (part === 0 || part === 2) {
      const inputBuffer = getInputDay(day, 2);
      const { main } = await import(getScriptFile(day, 2));
      withTimer(main, inputBuffer.toString(), day, 2);
    }
  })();
}
