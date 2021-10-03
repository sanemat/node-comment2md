import { parse } from "comment-parser";

async function comment2ndjsonLib(
  path: string,
  content: string,
  filter: string[] = []
): Promise<{ path: string; comments: { tag: string; message: string }[] }> {
  const parsed = parse(content);
  let comments: { tag: string; message: string }[];
  for (const lines of parsed) {
    console.log(lines)
    lines.tags.map((tag) => {
      console.log(tag);
      comments.push({tag: 'a', message: 'b'});
    });
  }
  if (filter.length !== 0) {
  }
  return {
    path: path,
    comments: [
      { tag: "e2e", message: "message1" },
      { tag: "e2e", message: "message2" },
    ],
  };
}
export { comment2ndjsonLib };
