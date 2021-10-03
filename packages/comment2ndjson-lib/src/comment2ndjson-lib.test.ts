import { strict as assert } from "assert";
import { comment2ndjsonLib } from "./comment2ndjson-lib";

const ts = `
console.log(foo)
/** @e2e message1 */
/** @example message2 */
/** @e2e message2 */
`;

(async () => {
  assert(
    await comment2ndjsonLib("test/foo.ts", ts, ["e2e"]),
    `{"test/foo.ts": [{"e2e": "message1"}, {"e2e": "message2"}]}`
  );
})();
