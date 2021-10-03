import { strict as assert } from "assert";
import { comment2ndjsonLib } from "./comment2ndjson-lib";

const ts = `
console.log(foo)
/** @e2e message1 */
/** @example message2 */
/** @e2e message2 */
`;

(async () => {
  assert.deepEqual(await comment2ndjsonLib("test/foo.ts", ts, ["e2e"]), {
    path: "test/foo.ts",
    comments: [
      { tag: "e2e", message: "message1" },
      { tag: "e2e", message: "message2" },
    ],
  });
})();
