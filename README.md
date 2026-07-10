# AI Research Laboratory

An AI research portfolio, educational knowledge platform, and open source project showcase for SuleynanAuir.

## Phase 1 Scope

- Next.js 15 + TypeScript app structure
- TailwindCSS design system with dark mode
- Research-oriented homepage
- Markdown-driven project content system
- Project explorer with category filtering
- Navigation placeholders for future Research Map, Agent Hub, Papers, Roadmap, and Notes

## Local Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production Check

```bash
npm run lint
npm run typecheck
npm run build
```

## Vercel Deployment

The app is a standard Next.js 15 project and can be deployed directly on Vercel.

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Keep the framework preset as `Next.js`.
4. Use the default build command `npm run build`.
5. Deploy the production branch.

CLI deployment also works after Vercel login:

```bash
npx vercel
npx vercel --prod
```

## Content Model

Projects live in `content/projects/*.md` with frontmatter metadata. Phase 2 can reuse the same files for project detail pages and graph relationships.

## Roadmap

- Phase 2: React Flow research graph and project detail pages
- Phase 3: Paper reading system and blog/knowledge notes
- Phase 4: GitHub API sync, CMS path, and Vercel deployment workflow
