import { comment2ndjsonLib } from "src/comment2ndjson-lib";

const ts = `
console.log(foo)
/** @e2e message1 */
/** @example message2 */
/** @e2e message2 */
`;

console.log(await comment2ndjsonLib("test/foo.ts", ts, "e2e")); // {"test/foo.ts": [{"e2e": "message1"}, {"e2e": "message2"}]}
