# OpenCodie Website Content

Dit document bundelt de zichtbare content uit de huidige websitepagina's en gedeelde secties.

## Brand

- Naam: OpenCodie
- Logo: `/opencodie-logo.png`
- Korte omschrijving: Deploy webapps like Vercel. Own everything like Coolify. Keep coding locally while OpenCodie handles deployment and infrastructure on your own server.
- SEO footer tekst: OpenCodie is a developer platform for local development with AI, instant deployment, and full infrastructure ownership. Build in VS Code and terminal, then deploy to your own server without DevOps overhead.

## Navigatie

- Home: `/`
- Features: `/features`
- Product: `/product`
- Pricing: `/pricing`
- FAQ: `/faq`
- Security: `/security`

## Primaire CTA's

- Start free trial
- Get started
- View platform
- View product
- View pricing
- Choose Build plan
- Start Launch
- Choose Build
- Start Team
- Log in

Portal URLs worden opgebouwd vanuit `NEXT_PUBLIC_NEXRA_PORTAL_URL`:

- Login: `/login`
- Signup: `/signup`

## Kleurenpalet

| Token | Hex | Gebruik |
| --- | --- | --- |
| `--opencodie-bg-base` | `#060d15` | Basisachtergrond |
| `--opencodie-bg-panel` | `#0b1828` | Panels en grotere UI-vlakken |
| `--opencodie-bg-elevated` | `#14253a` | Verhoogde cards, inputs, chips |
| `--opencodie-border` | `#2a4664` | Borders en dividers |
| `--opencodie-text` | `#f2f7ff` | Primaire tekst |
| `--opencodie-text-muted` | `#9bb2cc` | Secundaire tekst |
| `--opencodie-primary` | `#ff7a18` | Primaire actie / oranje accent |
| `--opencodie-primary-hover` | `#ea6300` | Hoverkleur primaire actie |
| `--opencodie-accent` | `#34d1bf` | Cyaan accent |
| `--opencodie-success` | `#2dd4bf` | Successtatus |
| `--opencodie-warning` | `#f59e0b` | Waarschuwing |
| `--opencodie-danger` | `#fb7185` | Fout / gevaar |

Extra visuele stijl:

- Donkere basis met subtiele radial gradients in cyaan en oranje.
- Panels gebruiken semi-transparante donkerblauwe vlakken met blur.
- Hoofdaccenten combineren `--opencodie-accent` en `--opencodie-primary`.
- Borderkleur is gedempt blauw.

## Typografie En Layout Tokens

- Sans/display font: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "Inter", sans-serif`
- Mono font: `"SFMono-Regular", Menlo, monospace`
- Panel radius: `0.875rem`
- Sectieruimte: `clamp(3.5rem, 7vw, 6rem)`
- Paginasectieruimte: `clamp(3rem, 5.5vw, 5rem)`
- Hero top spacing: `clamp(3.5rem, 8vw, 6rem)`

## Home Pagina

### Hero

- Badge: The Developer Platform
- H1: Build, test, and ship webapps faster.
- Intro: Deploy like Vercel. Run on your infrastructure. OpenCodie gives you a lightning-fast deployment experience while you maintain complete ownership and control.
- CTA's:
  - Start free trial
  - View platform

Hero signal cards:

- Deploy speed: `<2m to prod`
- AI workflow: Codex + Gemini + Claude
- Ownership: 100% your infra

### Why Teams Choose OpenCodie

- Eyebrow: Why teams choose OpenCodie
- Titel: Everything you need, without platform lock-in
- Tekst: Build with your own tools, deploy on infrastructure you control, and keep ownership from day one.
- Trust items:
  - No DevOps required
  - Runs on your own server
  - Works with VS Code + AI
  - No vendor lock-in

### The Problem

- Eyebrow: The Problem
- Titel: Deploying webapps shouldn't be this hard
- Tekst: Setting up infrastructure, configuring deployments, and managing environments slows teams down.
- Nadruk: You just want to build and ship.

### The Solution

- Eyebrow: The Solution
- Titel: OpenCodie removes the DevOps layer
- Tekst: You keep your workflow. VS Code, terminal, and AI tools stay the same while OpenCodie handles the operational layer.

Core capabilities:

- Deployments: Deploy directly from your local workflow without maintaining CI/CD pipelines.
  - System link: Ship faster without DevOps setup overhead.
- AI workflow: Keep using Codex, Gemini, Claude, and your existing AI tools in VS Code.
  - System link: No tool switching, no workflow reset.
- Secrets: Manage environment variables and sensitive configuration safely per environment.
  - System link: Protect production settings without manual server edits.
- Databases: Provision databases quickly and keep backend services connected to each deploy.
  - System link: Backend-ready without infrastructure detours.
- Logs & debugging: See deploy output and runtime logs in one place when issues appear.
  - System link: Debug quickly and ship with confidence.
- Updates & redeploys: Roll out changes safely when your app evolves across environments.
  - System link: Continuous delivery without pipeline maintenance.

### Why OpenCodie

- Badge: Why OpenCodie
- Titel: Why developers choose OpenCodie
- Tekst: You keep your workflow while OpenCodie removes infrastructure friction. Fast deployment experience with full infrastructure ownership.
- Punten:
  - No vendor lock-in: your app runs on your own server.
  - No DevOps needed: no pipeline maintenance or setup burden.
  - Works with your tools: VS Code, Git, terminal, and AI assistants.

Platform layers:

- Your tools: Code locally in VS Code and terminal with AI tools you already use.
- OpenCodie operations: Deployments, runtime setup, logs, and database wiring handled for you.
- Your server ownership: Webapps run on infrastructure you control, without vendor lock-in.

Stats:

- Infrastructure model: You own it
- DevOps burden: Removed

### How It Works

- Eyebrow: How It Works
- Titel: From code to production in minutes
- Tekst: Keep your local workflow and ship faster without operating deployment pipelines or infrastructure manually.

Workflow:

- 01 Code locally: Use VS Code, your terminal, and AI models like Codex, Gemini, and Claude.
- 02 Connect project: Link your project or repository to OpenCodie with minimal setup.
- 03 Configure runtime: Set environment variables and attach databases without manual DevOps work.
- 04 Deploy instantly: OpenCodie builds and runs your app on your own server infrastructure.
- 05 Monitor and update: Use logs and safe redeploys to keep production stable as you ship.

Summary:

- Workflow model: Local code -> Connect -> Deploy -> Observe
- Setup overhead: No DevOps required
- Core principle: Own infra + instant deploy

### What You Get

- Eyebrow: What You Get
- Titel: OpenCodie removes the DevOps layer
- Tekst: Keep coding in VS Code with AI. OpenCodie handles deployment, infrastructure, and everything in between.
- Items:
  - Deployments
  - Databases
  - Environment variables
  - Logs & debugging
  - Updates & redeploys
- Tagline: You build. We run it.

### Control

- Eyebrow: Control
- Titel: You stay in control
- Tekst: OpenCodie gives you a Vercel-like deployment experience while your application runs on infrastructure you own.
- Pillars:
  - Your code runs on your server
  - Your data stays yours
  - Leave anytime without migration traps

### Product Layer

- Eyebrow: Product Layer
- Titel: OpenCodie handles the operational layer
- Tekst: Keep coding locally with AI and ship instantly. OpenCodie manages deployment complexity while your app runs on infrastructure you own.
- Infrastructure points:
  - Deployments
  - Databases
  - Environment variables
  - Logs & debugging
  - Updates & redeploys

Product preview content:

- Connected Project: OpenCodie/production-app
- Badges: main, Ready to Deploy
- Tabs/files: workspace.tsx, deploy.yaml, billing.ts
- Code rows:
  - `project.connect({ source: 'local-vscode' })`
  - `ai.enable({ tools: ['codex','gemini','claude'] })`
  - `env.sync({ target: 'production' })`
  - `database.attach({ engine: 'postgres' })`
  - `deploy.run({ server: 'your-infra' })`
  - `logs.tail({ release: 'v1.8.0' })`
- Terminal:
  - Linking local project to deployment runtime...
  - Environment + database checks passed
  - Production deployment ready
- Runtime Overview:
  - Server Connected
  - app.your-server.example
  - Production Canvas
- Deployment State:
  - Build: Completed
  - Runtime: Ready
  - Database: Connected
  - Production: Live
- Ownership: Your Server
- Ownership subtext: No platform lock-in
- Live signals:
  - Deploy succeeded on your infrastructure
  - Runtime logs streaming in real-time

## Bring Your Own AI Sectie

Deze sectie komt terug op Home, Product en Pricing.

- Eyebrow: Bring your own AI
- Titel: Use any AI you already have. No double payments.
- Tekst: Already paying for OpenAI, Claude, Gemini, or another AI provider? Plug in your own API keys and keep using exactly what you want. OpenCodie handles the infrastructure-you keep control of your AI stack.

Cards:

- Flexible Setup
  - Titel: Your AI, Your Rules
  - Plug in your own API keys
  - Use local AI models if you prefer
  - Keep using your favorite CLI tools
- Simple Pricing
  - Titel: Start from €9/month
  - Launch plan includes servers, databases, and deployment infrastructure.
  - You only pay once-for OpenCodie. Not for AI twice.
- No Vendor Lock-In
  - Titel: Stay Independent
  - Export your data anytime. Switch AI providers whenever you want. Your setup, your freedom.
  - CTA: Get started

Compatible platforms/logos:

- OpenAI
- Claude
- Gemini
- Llama
- Mistral
- DeepSeek
- Cohere
- xAI
- GitHub
- Docker
- PostgreSQL
- Redis

## Product Pagina

Metadata:

- Title: OpenCodie Product | From Local Development To Production In Minutes
- Description: Keep coding locally with AI, connect your project, and deploy instantly with OpenCodie. Your app runs on your own server while OpenCodie handles operations.

### Hero

- Eyebrow: Product
- H1: From local development to production in minutes
- Intro: Keep coding locally with AI. OpenCodie handles deployment, infrastructure, logs, and runtime operations so you can ship without DevOps overhead.
- CTA's:
  - Get started
  - View pricing

Product flow:

- Layer 1: Local development
- Layer 2: OpenCodie operations
- Layer 3: Your server
- Tekst: Vercel-like deployment speed with infrastructure ownership.

### How It Works

- Eyebrow: How it works
- Titel: Three steps from code to production
- 01 Develop locally: Write code in VS Code and terminal using your preferred AI tools.
- 02 Connect project: Link your repository or project to OpenCodie in a simple setup flow.
- 03 Deploy: OpenCodie builds and runs your app with logs and runtime visibility.

### Control

- Eyebrow: Control
- Titel: You stay in control
- Tekst: Your app runs on your own server - you stay in control.
- Punten:
  - Your code runs on infrastructure you own
  - Your data stays yours
  - Leave anytime without migration traps
- Tagline: Deploy like a managed platform. Own everything like self-hosted.

### What OpenCodie Handles

- Eyebrow: What OpenCodie handles
- Titel: Operational work handled in one place
- Operational areas:
  - Deployments: Fast release flow without pipeline overhead.
  - Infrastructure: Operational layer handled by OpenCodie.
  - Logs: Clear deployment and runtime visibility.
  - Databases: Quick provisioning and connection workflow.
  - Environment setup: Safer configuration and secret handling.
  - Updates: Safe redeploys as your product grows.

### Why Teams Choose OpenCodie

- Eyebrow: Why teams choose OpenCodie
- Titel: Simple workflow for real delivery
- Punten:
  - Keep your local workflow in VS Code and terminal
  - Use your own AI models and API keys
  - No DevOps setup required for everyday releases
  - Your app runs on your own server with full ownership
- Tagline: OpenCodie removes the DevOps layer without changing how developers prefer to build.

### Platform Summary

- Eyebrow: Platform summary
- Titel: Local workflow in. Production app out.
- Tekst: OpenCodie is a developer platform for local development with AI, instant deployment, and infrastructure ownership. You code with your tools, OpenCodie runs operations, and your app stays on your server.
- Items:
  - Develop locally
  - Connect project
  - Deploy instantly
  - Own your infrastructure

## Features Pagina

Metadata:

- Title: OpenCodie Features | Everything You Need To Run Webapps Without DevOps
- Description: Explore OpenCodie features for local development with AI, instant deployment, logs, databases, secrets, and safe updates on your own server.

### Hero

- Eyebrow: Features
- H1: Everything you need to run webapps without DevOps
- Intro: You keep coding locally in VS Code and terminal with AI. OpenCodie handles deployments, infrastructure, logs, databases, and updates.
- CTA's:
  - Get started
  - View product

Snapshot:

- Workflow: Local code + AI + instant deploy
- Operations: Handled by OpenCodie
- Ownership: Runs on your own server
- Tekst: Clear outcomes, no DevOps burden, no lock-in.

### Feature Surfaces

#### Deployments

- Titel: Fast deployments without pipeline setup
- Uitleg: Push your code and deploy in minutes. OpenCodie handles build and runtime steps so you do not have to manage delivery infrastructure.
- Punten:
  - Simple deploy flow from your local workflow
  - Production rollout with clear status
  - No CI/CD setup overhead
  - Built for real project shipping
- Benefit: Ship faster without adding DevOps tasks to every release.

#### AI Workflow

- Titel: Works with Codex, Gemini, Claude, and your workflow
- Uitleg: Keep your own AI setup while coding in VS Code and terminal. OpenCodie fits the workflow you already use instead of replacing it.
- Punten:
  - Bring your own AI API keys or local models
  - Keep your preferred CLI tools
  - No duplicate AI subscription requirements
  - Built for modern AI-assisted development
- Benefit: Move faster with AI while keeping full tooling freedom.

#### Secrets

- Titel: Secure environment and secret management
- Uitleg: Manage environment variables per app and environment in one place. Keep production settings consistent without manual server edits.
- Punten:
  - Centralized env management
  - Safer production configuration
  - Clear environment separation
  - Less manual risk during deploys
- Benefit: Protect sensitive config without slowing the team.

#### Databases

- Titel: Provision databases quickly for real workloads
- Uitleg: Set up and connect databases as part of your deployment workflow. Keep backend services aligned with each release.
- Punten:
  - Database provisioning in minutes
  - Easy app connection and updates
  - One workflow for app and data layer
  - Fewer moving parts across tools
- Benefit: Get backend-ready faster with less setup friction.

#### Logs

- Titel: Debug with clear deployment and runtime visibility
- Uitleg: See logs and deployment output in one place so issues are easier to trace and fixes move to production faster.
- Punten:
  - Centralized log access
  - Deployment and runtime context together
  - Faster issue triage
  - Clearer path from bug to fix
- Benefit: Spend less time searching and more time resolving.

#### Updates

- Titel: Safe updates and redeploys as your app evolves
- Uitleg: Roll out fixes and new features with a predictable release flow. Keep production stable while shipping continuously.
- Punten:
  - Reliable redeploy workflow
  - Clear release progress
  - Less risk during production updates
  - Designed for ongoing iteration
- Benefit: Ship often without unstable deployment operations.

Feature surface stats:

- Status: Ready
- Sync: Healthy
- Ops: Managed

### One Workflow

- Eyebrow: One Workflow
- Titel: Code to production in one system
- Tekst: Keep your local setup. OpenCodie connects the operational layer so you can ship without stitching tools together.
- Flow:
  - Code locally
  - Connect project
  - Deploy
  - Monitor
  - Redeploy
- Tagline: No tool switching. No DevOps detours.

### Operations

- Eyebrow: Operations
- Titel: OpenCodie handles the operational layer
- Tekst: You focus on product work. OpenCodie handles repeatable deployment operations and runtime support.
- Punten:
  - OpenCodie manages deployment operations
  - Environment setup stays consistent
  - Logs and runtime state stay visible
  - Your app runs on infrastructure you own
- Tagline: Faster delivery with full infrastructure ownership.

### Platform Summary

- Eyebrow: Platform summary
- Titel: Simple workflow. Full control.
- Tekst: OpenCodie keeps local development and AI workflows intact while it handles deployment, logs, databases, and updates. Your app runs on your own server, so you keep control and avoid lock-in.
- Links:
  - Continue to Product page
  - Compare plans in Pricing

## Pricing Pagina

Metadata:

- Title: Pricing | OpenCodie
- Description: Simple, transparent pricing for developers who want instant deploys without DevOps complexity.

### Hero

- Eyebrow: Pricing
- H1: Instant deploys. No DevOps complexity.
- Intro: Built for developers who ship fast in VS Code and terminal. OpenCodie keeps deployment simple from first app to production.
- Panel tekst:
  - Deploy webapps instantly. Everything is managed for you.
  - No infrastructure complexity. Just build and ship.

### Plans

#### Launch

- Prijs: €9/month
- Tagline: Perfect for getting started
- Punten:
  - 1-2 webapps
  - deployments
  - logs
  - basic usage
- CTA: Start Launch

#### Build

- Prijs: €19/month
- Tagline: Built for real projects
- Label: Popular
- Punten:
  - unlimited webapps
  - databases
  - full logs
  - fast deployments
  - priority handling
- CTA: Choose Build

#### Team

- Prijs: €49/month
- Tagline: Built for collaboration and control
- Punten:
  - multiple users
  - shared environments
  - team access & permissions
  - deployment visibility
  - activity tracking
  - priority support
- CTA: Start Team

### Fair Usage

- Eyebrow: Fair Usage
- Fair usage included.
- Each plan includes everything you need for real projects.
- If your webapps exceed normal usage, additional costs may apply.
- We'll always notify you before any extra charges.

### Trust

- No hidden costs
- Simple pricing
- Built for developers
- Transparent system

### Comparison

- Titel: OpenCodie vs Vercel vs Coolify

| Feature | OpenCodie | Vercel | Coolify |
| --- | --- | --- | --- |
| Ease of use | Very simple | Simple | Setup-heavy |
| DevOps required | No | Sometimes | Yes |
| Simplicity | Built for speed | Good, but can grow complex | Manual workflow |
| Pricing clarity | Clear plans | Can be less predictable | Self-managed |

### Ready To Ship

- Eyebrow: Ready to ship?
- Titel: Start building without DevOps
- Tekst: Deploy your first app today with OpenCodie.
- CTA's:
  - Get started
  - Choose Build plan

## Security Pagina

Metadata:

- Title: Security | OpenCodie
- Description: Security and governance overview for OpenCodie, including access control, data protection, and operational audit visibility.

### Hero

- Eyebrow: Security
- H1: Security controls for production workloads
- Intro: OpenCodie is designed for teams that need fast delivery with clear operational and governance controls.

Controls:

- Access Control: Role-based permissions and organization-level boundaries for teams and shared projects.
- Data Protection: Encrypted data paths and environment isolation to keep project boundaries clear.
- Operational Audit: Track deployments, environment changes, and key admin actions with clear event history.
- Compliance Readiness: Security controls and documentation patterns designed to support vendor and compliance reviews.

## FAQ Pagina

Metadata:

- Title: FAQ | OpenCodie
- Description: Frequently asked questions about OpenCodie, local development, AI workflow, and deployment on your own server.

### Hero

- Eyebrow: FAQ
- H1: Frequently asked questions
- Intro: Short answers to the most common questions before you start.

### Vragen

#### What is OpenCodie?

OpenCodie is a developer platform that lets you keep coding locally while it handles deployment, infrastructure, and runtime operations.

#### Do I need DevOps?

No. OpenCodie is built for developers who want to ship without managing DevOps complexity.

#### Where does my app run?

Your app runs on your own server. You keep full infrastructure ownership.

#### Can I use AI tools?

Yes. OpenCodie fits AI-first workflows with tools like Codex, Gemini, and Claude.

#### Do I code in the browser?

No. You work locally in VS Code and terminal, then deploy through OpenCodie.

#### Is this like Vercel?

OpenCodie gives a Vercel-like deployment experience, but with infrastructure ownership similar to Coolify.

## Footer

- Brand: OpenCodie
- Footer text:
  - Deploy webapps like Vercel. Own everything like Coolify. Keep coding locally while OpenCodie handles deployment and infrastructure on your own server.
  - OpenCodie is a developer platform for local development with AI, instant deployment, and full infrastructure ownership. Build in VS Code and terminal, then deploy to your own server without DevOps overhead.
- Navigation:
  - Home
  - Features
  - Product
  - Pricing
  - FAQ
- Resources:
  - Security
  - FAQ
- System status: Operational
