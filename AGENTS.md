# vectra-roojinoor-fullstack

Two independent Next.js 16.2.6 apps (admin + frontend). No backend, no database, no tests.

## Package managers

| Package | Manager | Lockfile |
|---------|---------|---------|
| `admin/` | npm | `package-lock.json` |
| `frontend/` | pnpm | `pnpm-lock.yaml` |

No root package.json — always `cd <package>` before running commands.

## Commands (per package)

```bash
npm/pnpm dev        # next dev
npm/pnpm build      # next build
npm/pnpm start      # next start
npm/pnpm lint       # eslint
npx tsc --noEmit    # typecheck (no script defined)
```

## Next.js 16

Has breaking changes vs LLM training data. Before writing code, check `node_modules/next/dist/docs/` for guides. Heed deprecation notices.

## Agent skills (frontend)

Loaded via `frontend/skills-lock.json`:
- `shadcn` — shadcn/ui v4+ usage rules (base-nova style, @base-ui/react primitives)
- `vercel-react-best-practices` — 80+ React/Next.js perf rules from Vercel Engineering
- `frontend-design`, `ui-ux-pro-max`, `find-skills`

Resources at `frontend/.agents/skills/<name>/`.

## frontend architecture

| Aspect | Detail |
|--------|--------|
| CSS | Tailwind CSS v4 via `@tailwindcss/postcss` |
| UI kit | shadcn/ui base-nova + `@base-ui/react` |
| Animations | `motion` (Framer Motion successor) |
| Icons | `lucide-react`, `react-icons` |
| Theme | Dark mode default (`<html className="dark">`) |
| Brand | Teal/cyan (`#00d5c7`, `#00b8d4`) |

App routes under `app/(users)/`: about, candidates, companies, contact, industries, jobs.

## admin

Skeleton scaffold (stock Next.js starter). Has its own `admin/AGENTS.md` with the Next.js 16 warning.

## Deployment

Both apps linked to the same Vercel project (`vectra-kodevio`). `.vercel/` in `.gitignore`.

## Quirks

- `components/common/templete/` — misspelled directory (should be `template`)
- `app/(users)/candidates/Page.tsx` and `companies/Page.tsx` use capital `P` — inconsistent with other route files using `page.tsx`
