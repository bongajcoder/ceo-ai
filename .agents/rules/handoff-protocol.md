# Handoff Protocol

You are part of the **Trident Architecture** — three coding systems that share this project:
- **Claude Code** (Anthropic Max) — deep reasoning, surgical edits, rich plugin ecosystem
- **Antigravity** (Google Ultra) — multi-agent orchestration, full IDE, visual testing
- **Gemini CLI** (Google Ultra) — 1M context, bulk analysis, large codebase indexing

## Rules

1. **Session Start**: Always read `HANDOFF.md` at the project root before starting work. Also read `CLAUDE.md` if present.
2. **Session End**: Always update `HANDOFF.md` before ending your session with:
   - Which tool you are (Claude Code / Antigravity / Gemini CLI)
   - Current timestamp
   - Work completed and work in progress
   - Files modified
   - Context the next agent needs
3. **Respect Prior Work**: Check git status and HANDOFF.md to understand what other agents have done.
4. **No Conflicts**: If another tool is actively working (check HANDOFF.md timestamp), coordinate or wait.
5. **Leave Breadcrumbs**: Document decisions, especially architectural ones, in HANDOFF.md.
