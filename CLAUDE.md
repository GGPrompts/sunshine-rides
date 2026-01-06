# Sunshine Rides - Automated SaaS Build Demo

## Demo Overview

This is a **fully automated demonstration** of Claude Code's parallel execution capabilities. The goal: build a complete, production-quality SaaS landing page for "Sunshine Rides" - a Colorado transportation service - in approximately **15 minutes** with minimal human intervention.

### What Makes This Impressive

- **Massive Parallelization**: The conductor orchestrates 4-5 parallel Claude workers simultaneously
- **Opus Subagents**: Each worker runs Claude Opus for maximum code quality
- **Wave-Based Execution**: Issues organized into dependency waves for optimal parallel throughput
- **Real Browser Automation**: TabzChrome spawns terminals and manages worker sessions
- **Beads Issue Tracking**: All work tracked in real-time via the bd issue system

---

## Demo Kickoff Script

When the user says something like:

> "I want to build a professional website for a transportation company called Sunshine Rides. They're based in Colorado and need a modern SaaS-style landing page with dashboards. Use the most modern tech stack possible - Next.js, Tailwind, shadcn. Make it production-ready."

**Claude should respond by:**

1. Acknowledging the request and checking `bd ready` to see the pre-planned backlog
2. Briefly explaining the wave-based parallel execution strategy
3. Asking if they want to review/adjust the backlog first (`/conductor:plan-backlog`) or dive straight in
4. Launching `/conductor:bd-swarm-auto` to begin autonomous parallel execution

This creates a natural conversation flow where the user's request triggers the orchestrated build, rather than just running a slash command cold.

---

## Architecture: Conductor + Workers

```
┌─────────────────────────────────────────────────────────────────┐
│                         CONDUCTOR                                │
│  (This session - orchestrates everything)                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│   │ Worker 1 │  │ Worker 2 │  │ Worker 3 │  │ Worker 4 │  ...  │
│   │ (Opus)   │  │ (Opus)   │  │ (Opus)   │  │ (Opus)   │       │
│   └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘       │
│        │             │             │             │               │
│   SAAS-89o      SAAS-9pc      SAAS-blt      SAAS-901           │
│   Scaffolding   Design Sys    Layout        Assets              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Issue Backlog (19 Issues, 5 Waves)

### Wave 0 - Assets (Parallel with Wave 1)
| ID | Title | Notes |
|----|-------|-------|
| SAAS-901 | Generate Sunshine Rides branded assets via TabzArtist | DALL-E image generation |

### Wave 1 - Foundation (3 parallel workers)
| ID | Title | Blocks |
|----|-------|--------|
| SAAS-89o | Project scaffolding - Next.js + Tailwind + shadcn/ui | 9 issues |
| SAAS-9pc | Design system - Sunshine Rides brand colors | 10 issues |
| SAAS-blt | Layout shell - RootLayout with providers | 10 issues |

### Wave 2 - UI Components (batched across 2-3 rounds)
| ID | Title | Type |
|----|-------|------|
| SAAS-irm | Header - Sunshine Rides navigation | ui |
| SAAS-avw | Hero section - ride booking CTA | ui |
| SAAS-zz0 | Features grid - service highlights | ui |
| SAAS-z21 | Pricing section - Ride service tiers | ui |
| SAAS-zju | Testimonials - Happy customers | ui |
| SAAS-ew1 | Footer - contact and links | ui |
| SAAS-h15 | Fleet Dashboard page | dashboard |
| SAAS-4br | Ride Tracking page | dashboard |
| SAAS-jy3 | Support Dashboard page | dashboard |
| SAAS-n84 | Fix button contrast (a11y bug) | bug |

### Wave 3 - Polish (4 parallel workers)
| ID | Title |
|----|-------|
| SAAS-t3r | Dark mode support |
| SAAS-2rw | Animations and micro-interactions |
| SAAS-ame | Mobile responsive polish |
| SAAS-0mn | SEO and metadata |

### Wave 4 - QA
| ID | Title |
|----|-------|
| SAAS-4c3 | QA Checkpoint - visual review |

---

## Execution Strategy

### For Maximum Parallelization

1. **Use `/conductor:bd-swarm-auto`** - Fully autonomous backlog completion
   - Spawns workers for all ready issues
   - Self-resumable after context wipes
   - Runs waves until backlog is empty

2. **Or Manual Wave Control with `/conductor:bd-swarm`**
   - More control over worker count
   - Can specify which issues to tackle

### Worker Configuration

Each spawned worker should:
- Use **Opus model** for highest quality output
- Have isolated git worktree (via `conductor:initializer`)
- Run skill-aware prompts based on issue labels
- Auto-commit and close issues on completion

---

## Beads Issue Tracking

This project uses **bd** (beads) for issue tracking.

### Quick Reference

```bash
bd ready              # Find available work (no blockers)
bd show <id>          # View issue details
bd update <id> --status in_progress  # Claim work
bd close <id>         # Complete work
bd sync               # Sync with git
```

### Session Completion Protocol

**When ending a work session**, complete ALL steps:

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd sync
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Verify** - All changes committed AND pushed

**CRITICAL**: Work is NOT complete until `git push` succeeds.

---

## Skills & Tools Available

### Core Skills
- `tailwind-v4-shadcn` - Tailwind CSS v4 + shadcn/ui components
- `web-frameworks` - Next.js App Router, Server Components
- `frontend-design` - Production-grade UI implementation
- `ui-styling` - shadcn/ui + Tailwind patterns

### MCP Servers
- `shadcn` - Component installation and registry access
- `tabz` - Browser automation for spawning workers
- `beads` - Issue tracking (bd commands)

### Conductor Agents
- `conductor:bd-swarm-auto` - Fully autonomous parallel execution
- `conductor:bd-swarm` - Manual swarm control
- `conductor:initializer` - Prepare isolated worktrees
- `conductor:worker-done` - Complete worker tasks
- `conductor:tabz-artist` - DALL-E/Sora asset generation

---

## Demo Commands

### Start the Automated Build
```
/conductor:bd-swarm-auto
```

### Check Progress
```
bd ready    # See remaining work
bd list     # See all issues
```

### Manual Intervention (if needed)
```
/conductor:bd-swarm          # Spawn specific workers
/conductor:worker-done <id>  # Force-complete a worker
```

---

## Brand: Mountain Express

- **Business**: Transportation service in Colorado
- **Tagline**: "Your Journey, Our Priority"
- **Colors**: Orange primary, warm earth tones
- **Service Areas**: Grand Junction, Montrose, Telluride, Vail, Denver, Aspen
- **Phone**: 970-555-0199
- **Features**: Wheelchair accessible, medical transport, Medicaid accepted

---

## Success Criteria

The demo succeeds when:
- [ ] All 19 issues closed
- [ ] Next.js app builds without errors
- [ ] Landing page renders with all sections
- [ ] 3 dashboard pages functional
- [ ] Dark mode working
- [ ] Mobile responsive
- [ ] All commits pushed to remote

**Target Time: ~15 minutes**
