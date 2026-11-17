# Shania James — personal website

This website uses the Jekyll build provided by GitHub Pages. Upload `index.html`, `styles.css`, `script.js`, `resume.html`, `resume.css`, the entire `_includes` folder, and `Documents/cv_ShaniaJames.pdf`, preserving their relative paths. Configure GitHub Pages to **deploy from a branch** and select the branch and folder containing `index.html`. Do not add a `.nojekyll` file: GitHub Pages must process the Markdown includes. Internal links are relative, so the site also works in a project repository.

## Updating the website

The main page's sections are in `_includes/content/`:

- `research.md` — research areas and descriptions
- `skills.md` — skills and methods
- `journey.md` — experience, education, recognition, and mentorship
- `publications.md` — selected publications
- `contact.md` — contact text and links

Edit the text and Markdown links in the appropriate file. Keep the surrounding HTML tags, blank lines, and lines such as `{: .timeline-date}`: these control the layout. To add an experience or publication, copy an existing `<article markdown="1">` block in the relevant file, paste it alongside the other articles, and replace its text and links. Publication titles use `[title](https://doi.org/...)`; verify each DOI before publishing.

The introduction and research question buttons are in `index.html`; each answer is in its button's `data-answer` attribute. The Résumé link opens `resume.html`, a separate concise printable page; update it separately when the résumé changes, and use **Print / save as PDF** to create a PDF. Academic CV links open `Documents/cv_ShaniaJames.pdf`. Replace that file when updating the full CV, keeping its filename or updating the links in both HTML files. Contact details also appear in `index.html` and `resume.html`.

## Previewing

Opening `index.html` directly will not render the Markdown sections. Preview a GitHub Pages deployment, or use a local Jekyll installation: run `jekyll serve` in this folder and open the address it prints. A `.nojekyll` file or a hosting setup that serves the source files without Jekyll will not build the page.

The original source documents and reference screenshots are not required for the website. The supplied CV PDF includes a street address; review and remove any information you do not want public before publishing. Also review the website content and contact information.
