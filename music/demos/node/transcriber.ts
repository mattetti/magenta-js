// import * as tf from "@tensorflow/tfjs";
import { OnsetsAndFrames } from "../../src/transcription";

import * as fs from "fs";

const CHECKPOINTS_DIR =
  "https://storage.googleapis.com/magentadata/js/checkpoints";
const CKPT_URL = `${CHECKPOINTS_DIR}/transcription/onsets_frames_uni`;

const path =
  "/Users/mattetti/Splice/sounds/packs/FKi 1st Good Gas Sample Pack/" +
  "FKI_1ST_SMITTY_labeled_processed/FKI_1ST_SMITTY_audio/" +
  "FKI_1ST_SMITTY_tonal_loops/" +
  "FKI_1ST_SMITTY_tonal_loop_alicias_keys_116_Cmaj.wav";
const data = fs.readFileSync(path);
const blob = new Blob([data], { type: "audio/wav" });
console.log(blob);

// fs.readFile("", "utf8", (error, blob) => {
const oafA = new OnsetsAndFrames(CKPT_URL);
console.log(oafA);

// oafA
//   .initialize()
//   .then(async () => {
//     const start = performance.now();
//     const ns = await oafA.transcribeFromAudioFile(blob);
//     // writeNoteSeqs(`${prefix}-results`, [ns], true, true);
//   })
//   .then(() => oafA.dispose());
// });
