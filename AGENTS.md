# Repository Guidelines

## Project Structure & Module Organization
- Jekyll site for GitHub Pages. Site configuration lives in `_config.yml`.
- Layouts and shared HTML live in `_layouts/` and `_includes/` (widgets under `_includes/widgets/`).
- Content collections: `_news/`, `_publications/`, and `_showcase/` (Markdown files with YAML front matter).
- Data files are in `_data/` (YAML used to drive templates, e.g., navigation, profile).
- Static assets are in `assets/` (CSS in `assets/css/`, JS in `assets/js/`, images in `assets/images/`, PDFs in `assets/`).
- Top-level pages like `index.html`, `publications.html`, and `showcase.html` are entry points.

## Build, Test, and Development Commands
- `bundle install` — install Ruby gems listed in `Gemfile`.
- `bundle exec jekyll serve` — run the local dev server with live rebuilds.
- `bundle exec jekyll build` — generate the static site into `_site/` for a production check.

## Coding Style & Naming Conventions
- Use 2-space indentation for YAML, HTML, and CSS to match existing files.
- Keep YAML front matter keys consistent with existing collections (e.g., `title`, `date`, `authors`, `links`).
- Prefer descriptive, kebab-case filenames for content: `_news/2025-news1.md`, `_publications/2025-pub-XYZ.md`.
- CSS is plain and hand-authored; keep selectors scoped and avoid overly generic names.

## Testing Guidelines
- No automated test suite is present.
- Validate changes by running `bundle exec jekyll build` and checking the local site visually.

## Commit & Pull Request Guidelines
- Recent commit messages are short and direct (e.g., “resume update”, “Add files via upload”).
- Follow that style: concise, imperative or sentence case, and scoped to the change.
- PRs should include a brief description, list of affected pages, and screenshots for visual changes.

## Content Editing Notes
- Use YAML front matter for collection items; multi-line fields should use `>-` where appropriate.
- Asset paths are typically absolute from site root (e.g., `/assets/images/covers/...`).
