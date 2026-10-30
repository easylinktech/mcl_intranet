export function downloadText(title: string, body: string) {
  const url = URL.createObjectURL(
    new Blob([`METAL CROWNS LIMITED\n${title}\n\n${body}\n`], {
      type: "text/plain;charset=utf-8",
    }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + ".txt";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
