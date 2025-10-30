# Portfolio (Next.js + TypeScript)

A personal portfolio built with Next.js and TypeScript. This repository contains a Next.js (App Router) project with a collection of UI components, hooks, and styles.

## Summary

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS (via PostCSS)
- Package manager: pnpm (lockfile present)

> The project folder includes `app/`, `components/`, `hooks/`, `lib/`, `public/`, and `styles/`.

## Quick start (Windows / PowerShell)

Open a PowerShell in the project root (`c:\Users\ASUS\Desktop\portfolio original`) and run:

```powershell
# install deps
pnpm install

# run dev server
pnpm dev

# build for production
pnpm build

# start production server (after build)
pnpm start
```

If you don't have pnpm installed, you can install it with npm:

```powershell
npm i -g pnpm
```

If you prefer using npm or yarn, you can adapt the commands accordingly.

## Available scripts

Check `package.json` for exact script names. Common scripts you might find:

- `dev` — start Next.js dev server
- `build` — compile production build
- `start` — start production server
- `lint` — run linter (if configured)

## Environment

- Recommended Node.js: 18+ (match the version required by your Next.js version)
- pnpm is recommended since a `pnpm-lock.yaml` is included

If the project uses any environment variables, add them to a local file such as `.env.local` and do not commit that file.

## Git / GitHub — Initialize and push

If you'd like to initialize a Git repository and push to GitHub, here's a minimal sequence (PowerShell):

```powershell
# initialize repository
git init

# add all files
git add .

# first commit
git commit -m "chore: initial commit"

# create a GitHub repo and add remote (replace URL)
git remote add origin https://github.com/<your-username>/<your-repo>.git

git branch -M main

# push to GitHub
git push -u origin main
```

Note: The repository already contains a `.gitignore` file. Make sure `node_modules/`, `.next/`, and any secret env files are ignored before committing.

## Suggested .gitignore entries

If your `.gitignore` is missing any of these, consider adding them:

```
node_modules/
.next/
.env
.env.local
dist/
.vscode/
```

## Contributing

Small improvements are welcome: bug fixes, accessibility improvements, styling refinements, or converting components to more idiomatic patterns.

If you open a pull request, include a short description of the change and how to test it.

## License

If you don't have a license yet, consider `MIT` for permissive open-source sharing. To add a license file:

```powershell
# create MIT license
curl -o LICENSE https://opensource.org/licenses/MIT
# or create manually and commit
```

## Notes

- This README is a lightweight starting point. If you want, I can:
  - Add a detailed project overview and architecture diagram
  - Add run/lint/test scripts to `package.json` if missing
  - Initialize the git repo and push to GitHub for you (if you provide the remote URL)

---

If you'd like me to initialize the Git repo and push to a remote now, tell me the remote URL (or authorize) and I'll run the commands for you.