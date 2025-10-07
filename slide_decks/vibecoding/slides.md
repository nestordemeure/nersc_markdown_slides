---
marp: true
theme: nersc
paginate: true
---

<!-- _class: title -->
# **Vibe Coding at NERSC**
## Introduction and Best Practices

<div class="authors">
<strong>Nestor Demeure</strong><br>
National Energy Research Scientific Computing Center, Berkeley CA, United-States
</div>

---

# Who am I?

I am a member of NERSC's **Programming Environments and Models** group and a *"full stack"* AI person:

* Training of AI models,
* Integrating APIs, local models, and code,
* Using LLM chats and **coding agents**.

I am *really good* at maxing out my CBORG, Anthropics, and OpenAI subscriptions with vibe coding...

---

<!-- _class: question -->
# **Let's talk about that newfangled vibe coding thing!**

---

<!-- _class: section-title -->
# Vibe Coding
## Definition and Coding Agents

---
# Vibe coding

**[Vibe coding](https://twitter.com/karpathy/status/1886192184808149383)** is the idea of asking a large language model (LLM) to write code for you, **checking if it works, but never writing code yourself**.

This talk is *not* about that.

It is about **coding in collaboration with coding agents**.

---
# Types of Coding Assistants

There are several ways to code with AI:

* **Chat web interfaces**
  [ChatGPT](https://chatgpt.com/), [Claude](https://claude.ai/), [Gemini](https://gemini.google.com/), etc.
* **Pull requests to repositories**
  [Codex](https://developers.openai.com/codex), [Jules](https://jules.google/), [etc.](https://prarena.ai/)
* **AI-augmented IDEs**
  [Cursor](https://cursor.com/), [GitHub Copilot](https://github.com/features/copilot), etc.
* **Command line interfaces**
  [Claude Code](https://docs.claude.com/en/docs/claude-code/overview), [Codex CLI](https://developers.openai.com/codex/cli/), [Gemini CLI](https://google-gemini.github.io/gemini-cli/), etc.

We will focus on **command line assistants**.

---
# Popular Command Line Agents

Common CLI agents include:

* **[Claude Code](https://docs.claude.com/en/docs/claude-code/overview)**, Anthropic's CLI for Claude,
* **[Codex CLI](https://developers.openai.com/codex/cli/)**, OpenAI's CLI for ChatGPT,
* **[Gemini CLI](https://google-gemini.github.io/gemini-cli/)**, Google's CLI for Gemini.

Note that the best agent varies month to month, and that most agents offer *both* CLI and IDE integration.

---
# Do I need to pay for those?

There are various options to get access:

* **Personal subscriptions**:
  ChatGPT, Claude, Cursor, etc.
* **LBL Google Account**:
  With Gemini CLI (besides its *very* generous free tier)
* **CBORG API key**:
  Free access to most models (quota resets monthly)

**Note:** Cursor *requires* a paid subscription for full agentic capabilities.

---
<!-- _class: question -->
# **How do I install a coding agent on Perlmutter?**

---

<!-- _class: section-title -->
# Setting Up a Coding Agent
## In three easy steps

---
# Check our Documentation!

<div style="text-align: center;">

![qr width:400px](https://gitlab.nersc.gov/nersc/das/vibecoding-docs)


**[https://gitlab.nersc.gov/nersc/das/vibecoding-docs](https://gitlab.nersc.gov/nersc/das/vibecoding-docs)**

</div>

---
<!-- _class: compact -->
# Installing a Coding Agent

Most command line agents require you to install Node first:

```sh
# installing nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# installing node / npm
nvm install --lts
```

At which point you can install Claude Code, Codex CLI, Gemini CLI, etc. easily:

```sh
npm install -g @anthropic-ai/claude-code
npm install -g @openai/codex
npm install -g @google/gemini-cli
```

---
<!-- _class: compact -->
# Setting Up CBORG

First, [**get a CBORG API key**](https://cborg.lbl.gov/api_request/).

Then, [**set up your CBORG environment variables**](https://cborg.lbl.gov/tools_ai_101/):

```sh
clorg() {
  # set authorization and base URL
  export ANTHROPIC_AUTH_TOKEN="$CBORG_API_KEY"
  export ANTHROPIC_BASE_URL="https://api.cborg.lbl.gov"

  # run claude with passed arguments
  claude "$@"
}
```

**Note:** Using agents will consume your CBORG API quota (resets monthly).

---
# Test it!

Start a Perlmutter shell in a folder and ask it to do things!

```md
nestor@login08:~$ clorg

 ▐▛███▜▌   Claude Code v2.0.9
▝▜█████▛▘  anthropic/claude-sonnet · API Usage Billing
  ▘▘ ▝▝    /global/u2/n/nestor/N10-benchmarks/TOAST3

─────────────────────────────────────────────────────────────────────────────────────
> Please build this application following the instructions in ./README.md 
─────────────────────────────────────────────────────────────────────────────────────
  ? for shortcuts                                      Thinking off (tab to toggle)
```

---
<!-- _class: question -->
# **It works!**
(But how do I make it *good*?)

---

<!-- _class: section-title -->
# Vibe coding Best Practices
## Getting the most out of your coding agents

---
# Software Engineering Best Practices

Existing best practices make agents more reliable and independent:

* **Break down** larger tasks into smaller ones,
* **Use git**: commits between successes, branches for long sessions,
* **Use code checking tools**: linters, compilers (`mypy`, `cargo check`, etc.),
* **Write tests** and run them after implementing features (consider TDD).

***If your model can check the code by itself, it will often be able to fix its bugs without help.***

---
# Context Engineering

The fewer things in an agent's context, the more it can focus on the task at hand:

* **Write `AGENTS.md` files**
  * Documenting codebase structure, tools, build instructions, and common errors,
  * In your project's root, subfolders, parent folders, or home directory (`~/.claude/CLAUDE.md`),
  * `CLAUDE.md` for Claude Code.
* **Clear context between tasks**
  * `/clear` in Claude Code,
  * `/new` in Codex CLI.
* **Start new agents for parallel tasks**
  * `git worktree` can help you deal with conflicts.

---
# New Projects and Complex Tasks

For from scratch projects or complex tasks:

1. Use a **good thinking model** to write a detailed **specification**
  Describe all features you want, and have it highlight ambiguities and ask clarifying questions.
2. Have it create a **step-by-step implementation plan** based on the spec
  Let it know that both will be passed to the developer.
3. Pass both to a fresh **coding agent** to implement

This process *is* time-consuming, but yields significantly better outcomes.

---
# Multi-Agent Use

There are good reasons to use *several* agents:

* **When stuck on a task, try a different agent**
  Going from Claude to ChatGPT to Gemini,
* **Different agents have different strengths**
  Gemini is currently bad at following directions, but great at debugging from long traces,
* **Agents can call each other**
  Tell your agent that it can call the `gemini -p "do something"` command!

---
# Some Security Considerations

Some key security issues are worth keeping in mind:

* **YOLO mode**
  Avoid letting your model execute any command unless you are in a hardened environment,
* **Data privacy**
  Check [model policies](https://docs.google.com/spreadsheets/d/1l-ZX0wAajcaQClKd6tAPxUDQUQhnj7CMTSYoR-J-cmc/view?gid=0#gid=0) before using on NDA or private code,
* **Malicious MCPs**
  Risk of MCPs exfiltrating your data or running malicious code.

---
<!-- _class: question -->
# **What about tools?**

---

<!-- _class: section-title -->
# Tool Use
## Model Context Protocols and Other Tools

---
# Native Agent Tools

All coding assistants come with built-in tools to run shell commands, read, and edit code:

* **Reading documentation**
  Point agents at documentation folders - they're excellent at keyword search,
* **Command line tools**
  Agents are often better at using known CLI tools (e.g., GitHub CLI) than MCPs,
* **Direct API calls**
  You can have the LLM write code that calls the APIs it needs directly.

---
# Model Context Protocols

[**Model Context Protocols**](https://modelcontextprotocol.io/) (MCPs) are a **standardized way to define and encapsulate tools** that any agent can use:

* The local server (started by you or the agent) exposes functions via JSON API,
* Each function comes with a description for the agent,
* The agent can call functions as needed.

**See the following presentation for details!**

---
# Other Useful Command Line Tools

Many command line tools are worth integrating with your agents:

* **[Marp slides](https://marp.app/)**: Compile markdown to slides ([we have a NERSC style!](https://github.com/nestordemeure/nersc_markdown_slides)),
* **[Git worktree](https://git-scm.com/docs/git-worktree)**: Run multiple agents over the same codebase without conflicts,
* **[Markitdown](https://github.com/microsoft/markitdown)**: Convert arbitrary files to Markdown for LLMs,
* etc!

---

<!-- _class: section-title -->
# Conclusion
## Overview and Perspective

---
# Overview

This is merely an introduction:

* **The field is rapidly evolving**
  General principles stay true, but the best tools change every few months,
* **Those tools *have* a learning curve**
  Do not expect great out-of-the-box results,
* **Code is one of *many* applications**
  Document processing, slides writing, video editing, etc.

---
# Get Started Today!

The best way to get value out of those tools is to **start using them today**:

* **Install** an agent on Perlmutter,
* **Experiment** with the patterns we mentioned,
* **Share** your experiences and tips.

See you in the [`vibe-coding` Slack channel](https://nersc.slack.com/archives/C093C4CR2S0)!

---

<!-- _class: thanks -->
# **Thank you!**
## [https://gitlab.nersc.gov/nersc/das/<br>vibecoding-docs](https://gitlab.nersc.gov/nersc/das/vibecoding-docs)
ndemeure@lbl.gov
