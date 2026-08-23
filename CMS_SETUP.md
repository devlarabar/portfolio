# Blog CMS Setup

The blog uses [Decap CMS](https://decapcms.org/) with the GitHub OAuth backend.
The admin panel lives at `/admin`.

---

## Step 1 — Create a GitHub OAuth App

1. Go to **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App**
2. Fill in:
   - **Application name:** `Portfolio CMS` (or whatever)
   - **Homepage URL:** `https://your-netlify-site.netlify.app`
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
3. Click **Register application**
4. On the next screen, copy the **Client ID**
5. Click **Generate a new client secret** and copy it immediately (you won't see it again)

---

## Step 2 — Add the OAuth app to Netlify

1. Go to your site in the **Netlify dashboard**
2. Navigate to **Site configuration → Access control → OAuth**
3. Under **Authentication providers**, click **Install provider**
4. Select **GitHub**
5. Paste in the **Client ID** and **Client secret** from Step 1
6. Click **Install**

---

## Step 3 — Log in

1. Deploy the branch (or merge to main)
2. Visit `https://your-site.netlify.app/admin`
3. Click **Login with GitHub**
4. Authorize the app
5. You're in — create and publish posts from the **Blog** collection

---

## How posts work

- Posts are Markdown files stored in `content/blog/`
- The CMS writes directly to this repo via GitHub
- Each new post triggers a Netlify deploy, which makes it live
- Slug format: `YYYY-MM-DD-title.md` → URL: `/blog/YYYY-MM-DD-title`

## Adding posts manually

Create a `.md` file in `content/blog/` with this frontmatter:

```markdown
---
title: Your Post Title
date: 2026-03-13T00:00:00.000Z
description: A short summary shown on the blog list page.
---

Your content here...
```
