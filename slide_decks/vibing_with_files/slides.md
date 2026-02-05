---
marp: true
theme: nersc
paginate: true
---

<!-- _class: title -->
# **Vibing with Files**
## Serving Files to Coding Assistants
### Vibe Coding Hackathon

<div class="authors">
<strong>Nestor Demeure</strong><br>
National Energy Research Scientific Computing Center, Berkeley CA, United-States
</div>

---

# Who am I?

I am a member of NERSC's **Programming Environments and Models** group and a *"full stack"* AI person:

* Training of AI models,
* Integrating APIs, local models, and code,
* Using LLM chats and coding agents.

I am *really good* at maxing out my CBORG, Anthropics, and OpenAI subscriptions...

---

<!-- _class: question -->
# **Let's talk about files!**

---

# Files are Fashionable

There has been **a move from deep tooling integration to file-based approaches**:

* [Model Context Protocol](https://modelcontextprotocol.io) -> [SKILL.md](https://agentskills.io/home),
* [RAG databases](https://en.wikipedia.org/wiki/Retrieval-augmented_generation) -> **local documentation folders**.

Many **read-focussed operations** are moving to file representations.

---

# Why use files?

**Coding Assistants are really good at using files.**

+ **Ease of set-up**: writing / collecting files is quick and easy,
+ **Flexibility**: models can seamlessly their search strategy on the fly,
- **Format**: your file format needs to be easy to understand / search.

---

<!-- _class: question -->
# **What files could *we* use?**

---

# The NERSC Documentation

Creating a documentation chatbot has never been easier:

* Clone [the NERSC documentation](https://gitlab.com/NERSC/nersc.gitlab.io),
* Point an LLM at the `/docs` folder,
* You have created a documentation chatbot!

You might want to create an `AGENTS.md` / `SKILL.md` file with:

* The path to your folder,
* A short description of its content,
* Pointers on when to use it.

--- 

# NERSC Tickets

What about a chatbot that can analyze past tickets?

* Clone [https://github.com/nestordemeure/Fetch-ServiceNow-Tickets](https://github.com/nestordemeure/Fetch-ServiceNow-Tickets),
* Run it to load *and format* the tickets,
* You can now explore past tickets!

We have a secret stash of ServiceNow tickets. The endgoal is regular API pulls.

---

<!-- _class: question -->
# ***Format* the tickets?**

---

# Ticket Formating: file organization

Tickets are represented as **markdown files**, organized as follows:

```sh
/tickets/
  /YYYY/
    /MM/
      /INC########/
        ticket.md
        <attachment files>
```

Paths gives you information on **creation date** and **number**.

---
<!-- _class: compact -->
# Ticket Formating: message representation

We use a **minimal self-evident markdown format** to represent the messages:

```md
# INC0000001 - Login failures
- Status: Resolved
- Opened: 2025-02-10
- Closed: 2025-02-11

## Elvis

Users report intermittent login failures after 5pm PT.

## Ops Team (staff work notes)

Identified expired certificate on auth proxy. Rotated cert and restarted.
```

---

<!-- _class: question -->
# **Go forth and play with files!**

---

# Exercice

Create your own NERSC chatbot:

* Grab a coding assistant (Claude code or Codex),
* Put files in a folder:
  * The NERSC documentation,
  * NERSC's tickets,
  * both?!
* Ask questions!
  * *"Do we have any users using JAX with MPI?"*
  * *"Is there a way to store data on node-local files?"*
  * etc. 

---

<!-- _class: thanks -->
# **Thank you!**
## [https://github.com/nestordemeure<br>/nersc_markdown_slides/tree/main<br>/slide_decks/vibing_with_files](https://github.com/nestordemeure/nersc_markdown_slides/blob/main/slide_decks/vibing_with_files/slides.md)
ndemeure@lbl.gov
