async function comment2ndjsonLib(
  path: string,
  content: string,
  filter: [string]
): Promise<string> {
  return `{"test/foo.ts": [{"e2e": "message1"}, {"e2e": "message2"}]}`;
}
export { comment2ndjsonLib };
