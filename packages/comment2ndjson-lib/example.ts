import { comment2ndjsonLib } from "src/comment2ndjson-lib"

const ts = `
function foo() {
  /** @e2e example */
  return 1;
}
`

console.log(await comment2ndjsonLib("test/foo.ts", ts)); // {"test/foo.ts": [{"e2e": "message1"}, {"e2e": "message2"}]}
