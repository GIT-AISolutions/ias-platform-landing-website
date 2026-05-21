# OpenCodie — User Guide

> **OpenCodie** is an online development platform that helps you build, manage, and deploy projects from one place. You can work with projects, workspaces, deployments, databases, secrets, and AI assistance without constantly switching between separate tools.

---

## Contents

1. [What is OpenCodie?](#1-what-is-opencodie)
2. [Who is OpenCodie for?](#2-who-is-opencodie-for)
3. [Getting started](#3-getting-started)
4. [How does the platform work?](#4-how-does-the-platform-work)
5. [Projects](#5-projects)
6. [Workspaces](#6-workspaces)
7. [Editor, terminal, and preview](#7-editor-terminal-and-preview)
8. [AI Chat and code suggestions](#8-ai-chat-and-code-suggestions)
9. [Deployments](#9-deployments)
10. [Databases](#10-databases)
11. [Secrets](#11-secrets)
12. [Logs and status messages](#12-logs-and-status-messages)
13. [Teams and organizations](#13-teams-and-organizations)
14. [Billing, limits and usage](#14-billing-limits-and-usage)
15. [GitHub and repository workflow](#15-github-and-repository-workflow)
16. [Development vs production environments](#16-development-vs-production-environments)
17. [Troubleshooting](#17-troubleshooting)
18. [Permissions and safety](#18-permissions-and-safety)
19. [Support and help](#19-support-and-help)
20. [Frequently asked questions](#20-frequently-asked-questions)
21. [Best practices](#21-best-practices)

---

## 1. What is OpenCodie?

OpenCodie helps you build and manage websites, web apps, and software projects faster.

Normally, you often need multiple tools: a code editor, terminal, hosting platform, database panel, AI chat, and deployment tool. OpenCodie brings these parts together in one platform.

With OpenCodie, you can:

| Feature | What you can do |
|---|---|
| **Projects** | Organize everything related to one website, app, or client |
| **Workspaces** | Code online in a safe development environment |
| **Editor** | Edit code directly in the browser |
| **Terminal** | Run commands without installing everything locally |
| **Preview** | View your website or app while building |
| **AI Chat** | Get help with code, bugs, explanations, and improvements |
| **Deployments** | Publish your project to production |
| **Databases** | View and manage data through a safe viewer |
| **Secrets** | Store API keys and passwords securely |
| **Teams** | Collaborate with multiple users |

---

## 2. Who is OpenCodie for?

OpenCodie is built for people and teams who want to build software faster without managing many separate tools.

The platform is useful for:

- Developers who want to work on projects online
- Agencies managing multiple client projects
- Teams working together on websites or apps
- Makers who want to quickly build and launch ideas
- Companies that want development, hosting, and AI help in one place

You do not always need to install everything on your own computer. Most work can be done directly from the browser.

---

## 4. How does the platform work?

OpenCodie uses a simple structure:

```text
Organization
└── Project
    ├── Workspace
    ├── Deployment
    ├── Database
    └── Secrets
```

A **project** is the main place for everything related to a website, app, product, or client.

Inside a project, you can have multiple parts. For example:

```text
Project: JT Fitness Client Website
├── Workspace: New website build
├── Deployment: Live website
├── Database: WordPress database
└── Secrets: API keys and configuration
```

Or:

```text
Project: SaaS Platform
├── Workspace: Frontend app
├── Workspace: Backend API
├── Deployment: Production frontend
├── Deployment: Production backend
├── Database: PostgreSQL
└── Secrets: Stripe, OpenAI, and database keys
```

---

## 5. Projects

A project is where you organize everything. Use one project per client, website, app, or product.

### What can you do with projects?

- Create a new project
- Change the project name and description
- Connect workspaces to a project
- Connect deployments to a project
- Manage databases and secrets per project
- View errors, status, and usage

### When should you create a new project?

Create a new project when you are working on something that should be separated from other work.

Examples:

| Situation | Best choice |
|---|---|
| New client website | New project |
| Extra landing page for the same client | New workspace inside the existing project |
| Separate SaaS app | New project |
| Backend and frontend of the same app | One project with multiple workspaces |

### Practical tip

Use clear project names, for example:

- `JT Fitness Website`
- `OpenCodie Platform`
- `Print270 Webshop`
- `Client Name — New Website`

This keeps the platform organized when you have many projects.

---

## 6. Workspaces

A workspace is your online development environment. This is where you write code, run commands, and preview what you are building.

You can think of a workspace as an online version of your local development environment.

### What is inside a workspace?

| Part | Description |
|---|---|
| **Editor** | Edit code in the browser |
| **Terminal** | Run commands like `npm install`, `npm run dev`, or `git status` |
| **Preview** | View your website or app directly |
| **AI Chat** | Get help with code, bugs, and improvements |
| **Files** | Browse and edit your project files |
| **Uploads** | Upload files as context for the AI chat |

### Starting and stopping a workspace

A workspace can have different statuses:

```text
Stopped → Starting → Active
Active → Stopping → Stopped
Active → Restarting → Active
```

Start a workspace when you want to work on it. Stop a workspace when you are done, so you do not use unnecessary resources.

### When should you use multiple workspaces?

Multiple workspaces are useful when one project contains separate parts.

Example:

```text
Project: SaaS Platform
├── Workspace: Frontend
├── Workspace: Backend API
└── Workspace: Marketing Website
```


This keeps each part clear and easy to work on.

### Preview configuration

- Set a custom preview command
- Automatically detect active ports
- Restart preview without restarting the workspace

### Preview Doctor

A diagnostic tool that helps identify why your preview is not working. It provides a checklist of potential issues.

### Logs

Workspace logs can be filtered by:

- All
- Runtime
- Preview

### Terminal authentication

The terminal supports CLI authentication. For example:

```bash
ias auth
```

---

## 7. Editor, terminal, and preview

OpenCodie combines the editor, terminal, and preview in one screen.

### Editor

In the editor, you can update files like you would in a normal code editor. For example, you can work with:

- HTML
- CSS
- JavaScript
- TypeScript
- React
- Next.js
- Python
- FastAPI
- Configuration files

### Terminal

The terminal lets you run commands inside your workspace.

Common commands include:

```bash
npm install
npm run dev
npm run build
git status
git add .
git commit -m "Update project"
git push
```

### Preview

The preview lets you immediately see what your website or app looks like.

This is useful for checking whether your changes work without starting a separate local server.

### Practical workflow

```text
1. Open your workspace
2. Edit code in the editor
3. Start the app through the terminal
4. Check the result in the preview
5. Ask AI for help or improvements
6. Test again
7. Commit and deploy when everything works
```

---

## 8. AI Chat and code suggestions

Each workspace includes an AI assistant that can help with your project.

You can ask the AI to:

- Find bugs
- Explain code
- Build new components
- Improve CSS
- Analyze error messages
- Summarize files
- Create a step-by-step plan
- Suggest a code patch

### Example questions

```text
Can you check why my build is failing?
```

```text
Make this homepage more mobile-friendly without changing the style.
```

```text
Explain what this API route does.
```

```text
Create a safe patch to fix this issue.
```

### Code patch suggestions

The AI can suggest changes as a patch. You can review what will be changed before applying it.

The usual workflow is:

```text
1. You ask a question
2. AI analyzes the context
3. AI creates a suggestion
4. You review the diff
5. You approve the change
6. OpenCodie applies the patch
```

### Uploading files to AI Chat

You can upload files to give the AI more context. For example:

- Screenshots
- Error logs
- Configuration files
- Small code files
- Documentation

Use uploads when the AI needs to understand something that is not directly available in the workspace.

### Using your own AI through the terminal

Besides the built-in AI chat, OpenCodie also lets you use **your own AI tools through the terminal**.

This means you can work with tools such as:

- Claude via CLI
- Gemini via CLI
- Codex / OpenAI CLI
- Other AI CLI tools

### How does this work?

The terminal in your workspace is connected to your project environment. When you install and log in to an AI CLI tool there, you can use it directly.

Example:

```bash
claude
```

Or:

```bash
openai
```

Or any other AI CLI you use.

Because the terminal has access to your project files, the AI CLI can, depending on the tool and permissions:

- Read your code
- Edit files
- Run commands
- Analyze error messages
- Improve or extend your project

### Chat and terminal work together

One of the powerful parts of OpenCodie is that the chat and terminal can support each other.

You can use the built-in OpenCodie Chat for explanations, quick questions, and review. For larger actions, you can use your own AI CLI in the terminal, such as Claude, Gemini, or Codex.

This creates a workflow like:

```text
1. Ask a question in OpenCodie Chat
2. Use the terminal to start your own AI CLI
3. Let the AI analyze or edit files through the terminal
4. Test the result directly in the preview
5. Use the chat again for explanation, review, or improvements
```

### Key difference

| OpenCodie Chat | AI through terminal |
|---|---|
| Available directly in the interface | Runs through a CLI in the terminal |
| Useful for explanations, review, and smaller changes | Useful for larger or deeper actions |
| Works nicely next to the editor and preview | Can run commands directly in your workspace |
| More guided from inside OpenCodie | More freedom and direct control |

### Important tip

When using AI through the terminal:

- Make sure you are logged in to the correct AI CLI
- Always check what is being executed
- Use git before making large changes
- Do not place API keys or passwords directly in prompts

This lets you work safely while keeping maximum speed and flexibility.

---

## 9. Deployments


A deployment is the live version of your project.

### Supported stacks

OpenCodie supports multiple stacks. In most cases, the platform auto-detects your project type.

Common stacks include:

- Static HTML
- Vite / React (Vite)
- Next.js
- Node + Express
- Python FastAPI / Flask / Django
- Astro
- SvelteKit
- Nuxt
- Storybook
- Custom (with your own build configuration)

### Advanced deployment options

Depending on your setup, you can configure:

- Custom domain (e.g. `app.yourdomain.com`)
- Exposed port
- Base directory / publish directory
- Custom build configuration

### Deployment actions

- **Redeploy** — restart the same deployment
- **Open app** — open the live URL
- **Connect domain** — attach a custom domain
- **Delete** — remove the deployment

### Deployment statuses

Typical statuses include:

- Live
- Updating
- Action needed
- Paused

A workspace is for building and testing. A deployment is for production use.

### What can you do with deployments?

- Publish a project
- Connect a custom domain
- View logs
- Redeploy
- Check status
- Analyze errors
- Use secrets in production

### Difference between workspace and deployment

| Workspace | Deployment |
|---|---|
| Used for development | Used for live production |
| Can temporarily be broken | Should be stable |
| For testing and building | For real users |
| Often started and stopped | Usually stays active |

### Redeploy

Use redeploy when you want to roll out an existing deployment again, for example after a new commit or configuration change.

### Custom domain

You can connect your own domain to a deployment. For example:

```text
www.clientname.com
app.yourdomain.com
api.yourdomain.com
```

Always check your DNS settings if a domain does not work immediately.

---

## 10. Databases


Databases let you store data for your project. This can include users, products, settings, orders, or other application data.

### Supported database engines

OpenCodie supports multiple database engines:

- PostgreSQL
- MySQL
- MariaDB
- MongoDB
- Redis
- Valkey / KeyDB
- ClickHouse
- Dragonfly

### Database actions

- Start / Stop / Restart
- Connect to a deployment
- Open viewer (read-only data view)
- Delete

### Database usage modes

- **User-managed** — full control over the database
- **App runtime** — used by your application
- **AI actions** — limited access for AI operations

### What can you do?

- Create a database
- Connect a database to a workspace
- Connect a database to a deployment
- View tables
- Run safe read-only queries
- Mask sensitive columns

### Safe database viewer

The database viewer is meant for safely viewing data. That is why it has restrictions:

- Read-only queries only
- Row limits
- Timeouts for heavy queries
- Only allowed schemas are visible
- Sensitive columns can be hidden or masked

### Practical tip

Use the database viewer mainly to quickly check whether data is being stored correctly. It is not meant to replace full database management tools for complex database operations.

---

## 11. Secrets

Secrets are sensitive values such as API keys, tokens, passwords, and database URLs.

Examples of secrets:

```text
OPENAI_API_KEY
STRIPE_SECRET_KEY
DATABASE_URL
SMTP_PASSWORD
GITHUB_TOKEN
```

### Why use secrets?

Never hardcode sensitive values in your code. Use secrets so your project stays secure and keys do not accidentally end up in GitHub or logs.

### Where can secrets apply?

| Scope | Usage |
|---|---|
| **Project** | Shared with all workspaces and deployments inside the project |
| **Workspace** | Only available in one workspace |
| **Deployment** | Only available in one live deployment |

### Exposure modes

| Mode | Meaning |
|---|---|
| **Environment variable** | Available as an environment variable |
| **Broker-only** | Only available through a secure broker, not directly visible |
| **Hidden** | Stored but not exposed |

### Important security tip

Never place real secrets in chat messages, screenshots, or public documentation. Use the OpenCodie secrets panel to store them securely.

---

## 12. Logs and status messages

Logs help you understand what is happening in a workspace, job, or deployment.

You can use logs to see:

- Whether an app starts correctly
- Why a build fails
- Which error a deployment gives
- Whether a command ran successfully
- When a job is finished

### Real-time logs

OpenCodie can stream logs live. You will see new log lines appear while a process is running.

### Secrets in logs

OpenCodie tries to filter sensitive values from logs. Still, it is best to avoid printing secrets through commands or code.

---

## 13. Teams and organizations

Organizations let you collaborate with multiple users.

An organization can contain multiple projects. Inside an organization, you can invite members and give them roles.

### Roles

| Role | What someone can do |
|---|---|
| **Owner** | Full control, including billing and deleting the organization |
| **Member** | View and work on projects, depending on permissions |
| **Admin** | Manage members and organization settings |

### Invitations

You can invite team members by email. An invitation is valid for a limited time. Once someone accepts, they are added to the organization.

### Practical tip

Only give admin access to people who actually need to manage organization settings or members.

---

## 14. Billing, limits and usage

OpenCodie uses subscriptions and usage tracking.

Depending on your plan, you get access to certain resources. Usage can be measured based on things such as:

- Workspace hours
- Deployments
- Databases
- Extra resource usage

### What is the billing overview for?

- View costs per organization
- View costs per project
- Check monthly usage
- See whether you are above your included limit
- Check subscription status

### Overage

If you use more than what is included in your plan, extra usage may be billed as overage. In the billing overview, you can see how much usage has been recorded.

### Practical tip

Stop workspaces you are not using. This helps you keep usage and costs under control.

### What counts as usage?

Usage may include:

- Active workspace time
- Build time
- Deployment activity
- Database usage
- Storage usage
- Extra compute or memory usage

A running workspace can keep using resources while it is active.

### When should you stop a workspace?

Stop a workspace when you are no longer actively working in it.

A stopped workspace should not use active compute resources, while your code and configuration remain saved for later.

### What happens when you reach limits?

Depending on your plan and settings:

- You may receive a usage warning
- Extra usage may be billed as overage
- Some actions may be limited
- A workspace may need to be stopped or upgraded

### How to prevent unexpected costs

- Stop workspaces you are not using
- Check the billing and usage overview regularly
- Keep an eye on active deployments and builds
- Use alerts if your organization supports them
- Enable extra usage only when you understand the cost impact

---

## 3. Getting started

This section helps new users get started with OpenCodie for the first time.

### Create an account

1. Go to the OpenCodie portal and click **Sign up**.
2. Enter your email address and password, or use a supported OAuth provider.
3. Confirm your email address through the verification email.

### Choose or create an organization

After logging in, you can select an existing organization or create a new one.

An organization groups your projects, workspaces, team members, billing, and usage in one place.

You can also join an existing organization through an invitation link from an admin.

### Create your first project

1. Go to **Projects** in the navigation.
2. Click **Create project**.
3. Enter a clear project name.
4. Confirm the project creation.
5. The project will appear in your project overview.

### Start your first workspace

1. Open your project.
2. Click **New workspace** or **+ Workspace**.
3. Choose a name and configuration.
4. Click **Create workspace**.
5. Wait until the status changes to **Running**.
6. Click **Open workspace** to start working.

A workspace can take a short moment to start because OpenCodie prepares the development environment for your project.

---

## 15. GitHub and repository workflow

OpenCodie works well with GitHub and other Git-based repositories. This helps you keep your code versioned, collaborate with others, and deploy changes safely.

### Connect a repository

Open your workspace and use the terminal to connect your repository when it is not connected yet.

Example:

```bash
git remote add origin <your-repository-url>
```

After that, you can pull, commit, and push changes from inside the workspace terminal.

### Pull and push workflow

Use **pull** to get the latest changes from your repository:

```bash
git pull origin <branch>
```

Use **push** to send your commits back to the repository:

```bash
git push origin <branch>
```

Always make sure your branch is up to date before pushing. This helps prevent merge conflicts.

### Use branches

For most projects, you should avoid working directly on `main`.

Create a new branch for each feature or fix:

```bash
git checkout -b <branch-name>
```

Good branch names are clear and specific, for example:

```text
feature/billing-page
fix/workspace-preview
update/homepage-copy
```

When the work is ready, merge it back through a pull request or your team's normal Git workflow.

### Create commits

Stage your changes:

```bash
git add .
```

Create a commit with a clear message:

```bash
git commit -m "Describe the change"
```

Push the branch:

```bash
git push origin <your-branch>
```

### Practical tip

Before using AI to make larger changes, create a commit or branch first. This makes it much easier to review, revert, or compare changes later.

---

## 16. Development vs production environments

It is important to understand the difference between your workspace environment and your live deployment environment.

| | Development workspace | Production deployment |
|---|---|---|
| Purpose | Build and test | Serve real users |
| Secrets | Workspace secrets | Deployment secrets |
| Restarts | Manual or automatic | Through deployment process |
| Logs | Workspace and terminal logs | Deployment logs |
| Risk level | Safe for testing | Should stay stable |

### Workspace secrets vs deployment secrets

**Workspace secrets** are available while you are developing inside a workspace.

**Deployment secrets** are available in the live deployment.

A secret that exists only in your workspace is not automatically available in production. If your live app needs the same value, add it to the deployment secrets as well.

### Why something works in a workspace but not live

Common causes include:

- A secret exists in the workspace but not in the deployment
- An environment variable has a different name or value in production
- A dependency is missing from `package.json` or the project configuration
- The build command is different from the command used during development
- The app expects a local file or service that does not exist in production

### Practical tip

When a deployment fails, compare the workspace configuration with the deployment configuration. Many production issues come from missing secrets, different environment variables, or incorrect build settings.

---

## 17. Troubleshooting

Use this section when something does not work as expected.

### Build fails

1. Open the deployment logs.
2. Look for the first real error message.
3. Check for missing dependencies, syntax errors, wrong environment variables, or an incorrect build command.
4. Fix the issue in your workspace.
5. Commit the change.
6. Deploy again.

The first error is usually the most important one. Later errors are often caused by the first failure.

### Preview does not work

1. Check whether the workspace status is **Running**.
2. Make sure your app is actually started in the terminal.
3. Confirm that the app is listening on the expected port.
4. Restart the preview if the app configuration changed.
5. Check terminal output for errors.

### Deployment is stuck

1. Open the deployment logs and check the latest status.
2. Refresh the deployment page.
3. If the deployment remains stuck, cancel it if the platform allows it.
4. Start a new deployment.
5. Contact support if the issue keeps happening.

### Domain or DNS does not work

1. Check whether the domain is correctly added to the deployment settings.
2. Confirm that the DNS records are configured at your domain provider.
3. Remember that DNS changes can take time to fully update.
4. Check whether the SSL certificate is active.
5. Try again after the DNS records have propagated.

### AI CLI does not work

1. Check whether you are logged in to the CLI tool.
2. Run the tool's auth status command if available.
3. Log in again if your session expired.
4. Check whether the terminal is connected.
5. Restart the terminal session if commands stop responding.

### AI gives the wrong result

AI tools can make mistakes. When a result looks wrong:

- Ask the AI to explain the change
- Review the diff before applying it
- Run tests or a build
- Check the preview
- Revert the change if needed

---

## 18. Permissions and safety

Permissions help keep projects, deployments, secrets, and billing safe.

### Members and admins

| Action | Member | Admin |
|---|---|---|
| Create projects | Yes | Yes |
| Start and stop workspaces | Yes | Yes |
| Deploy projects | Usually yes | Yes |
| Manage project secrets | Depends on project permissions | Yes |
| Invite members | No | Yes |
| Manage billing | No | Yes |
| Manage organization settings | No | Yes |

Actual permissions can depend on your organization's settings.

### Who can deploy?

By default, team members may be able to deploy from their own workspace. Admins can restrict deployment access depending on the organization settings.

For important production apps, it is safer to limit deployment access to trusted users.

### Who can view or manage secrets?

Secrets should never be shown in plain text after they are saved.

A secret can usually be replaced or deleted, but the saved value should not be readable again.

Manage secrets through the OpenCodie interface or approved CLI tools. Do not place secrets directly in code.

### Why AI actions must be reviewed

AI can help with code, commands, and file changes, but it should not replace human review.

Always review AI-generated changes before applying them, especially when the action can:

- Delete files
- Change database logic
- Modify authentication or billing code
- Run destructive terminal commands
- Push directly to a repository
- Deploy to production

---

## 19. Support and help

When you need help, include enough information so the issue can be solved faster.

### Where to ask for help

Depending on your setup, support may be available through:

- In-app chat or help button
- Your organization's support contact
- OpenCodie support email
- Internal documentation
- Technical project documentation

### What to include in a support request

| Information | Where to find it |
|---|---|
| Project name | Projects page |
| Workspace name | Workspace page |
| Workspace or deployment ID | URL or details page |
| Exact error message | Logs, terminal, browser console, or preview |
| Logs | Workspace or deployment log viewer |
| Steps to reproduce | Describe what you did before the issue happened |
| Time of the issue | Include date, time, and timezone if possible |

The more context you include, the faster support can help you.

---

## 20. Frequently asked questions

### Do I need to install anything locally?

Not always. You can do a lot from the browser: edit code, run commands, view previews, and use AI.

For some advanced workflows, GitHub, the GitHub CLI, or local tooling can still be useful.

### What is the difference between a project and a workspace?

A project is the main place where everything is organized. A workspace is where you actually write code and test changes.

Example:

```text
Project: Webshop
Workspace: Frontend build
Workspace: Backend build
Deployment: Live webshop
Database: Product data
```

### Can one project have multiple workspaces?

Yes. This is useful when one project has multiple parts, such as a frontend, backend, and marketing website.

### Can AI directly edit my code?

Yes, but usually through a suggested patch. You can review the diff first and approve it before it is applied. This helps you stay in control of your code.

### Can I use my own AI tools?

Yes. You can use your own AI tools through the terminal when they provide a CLI. For example, you can use tools such as Claude, Gemini, Codex, OpenAI CLI, or other supported AI command-line tools after logging in.

### Can I connect my own domain?

Yes. Deployments can be connected to a custom domain. You usually need to configure DNS records at your domain provider.

### Are secrets safe?

Secrets are stored securely and should not be shown in API responses or logs. Still, you should be careful with screenshots, chat messages, and public repositories.

### When should I stop a workspace?

Stop a workspace when you are done working or when you do not need it for a while. This prevents unnecessary resource usage.

---

## 21. Best practices

### Keep projects organized

Use one project per client, product, or large app. Create multiple workspaces inside the same project when the parts belong together.

### Use clear names

Good names make the platform much easier to manage.

Examples:

```text
TEST — Website
TEST — Portal Frontend
TEST — Orchestrator API
TEST — Shopify Theme
```

### Follow a fixed workflow

A good workflow is:

```text
1. Open project
2. Start workspace
3. Edit code
4. Test in preview
5. Ask AI for review
6. Run build/tests
7. Create commit
8. Deploy
9. Check logs
```

### Use AI as an assistant, not as a replacement for review

AI can speed up a lot of work, but always check:

- Whether the change makes sense
- Whether the app still builds
- Whether the preview works correctly
- Whether no secrets or sensitive data were added
- Whether the change matches the goal of the project

### Use git before large changes

Before making big changes, create a commit or a new branch. This makes it easier to compare, review, or roll back changes.

### Check logs when something goes wrong

When something does not work, first check:

- Terminal output
- Build logs
- Deployment logs
- Error messages in the preview
- Database and secrets status

The real cause is often shown in the logs.

---

## Short summary

OpenCodie helps you build, test, and deploy software projects in a clear and organized way.

The main structure is:

```text
Project → Workspace → Preview/Test → Deployment → Live
```

Use projects to stay organized, workspaces to build, deployments to go live, databases to manage data, secrets for safe configuration, and AI Chat to work faster.

*Documentation updated: 2026-05-05*