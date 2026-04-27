/* SenBen project page interactive bits. */

document.addEventListener("DOMContentLoaded", () => {
  // Click-to-copy on the BibTeX block.
  const bibBlock = document.querySelector("#bibtex pre code");
  if (bibBlock) {
    bibBlock.style.cursor = "pointer";
    bibBlock.title = "Click to copy BibTeX";
    bibBlock.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(bibBlock.innerText);
        const original = bibBlock.title;
        bibBlock.title = "Copied!";
        setTimeout(() => {
          bibBlock.title = original;
        }, 1500);
      } catch (e) {
        console.warn("clipboard write failed", e);
      }
    });
  }

  // Smooth-scroll for in-page anchors.
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
