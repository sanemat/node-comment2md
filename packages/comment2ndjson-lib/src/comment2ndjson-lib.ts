import { parse } from "comment-parser";

async function comment2ndjsonLib(
  path: string,
  content: string,
  filter: string[] = []
): Promise<{ path: string; comments: { tag: string; message: string }[] }> {
  const parsed = parse(content);
  console.log(parsed);
  return {
    path: path,
    comments: [
      { tag: "e2e", message: "message1" },
      { tag: "e2e", message: "message2" },
    ],
  };
}
export { comment2ndjsonLib };
