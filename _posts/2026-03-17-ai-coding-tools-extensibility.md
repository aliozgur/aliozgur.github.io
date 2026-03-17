---
layout: post
title: "Hooks Are Not Extensibility"
subtitle: "The Broken Architecture of AI Coding Tools"
date:  2026-03-17
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - software
  - development
  - programming
  - coding
  - engineering
  - ai
  - vibe coding

---
The current generation of AI coding tools is impressive as a product category, but much less convincing as a platform category.

That distinction matters.

There is a lot of attention on the user-facing side of these tools: prompt boxes, agent workflows, code generation, terminal loops, patch application, context gathering, and various forms of assisted editing. But when these products are examined from the perspective of integration, automation, governance, and third-party extensibility, the picture becomes much weaker.

![Cover]({{ root.url }}/media/ai-coding-tools-extensibility.png)

> **Disclaimer:** This is not written as a criticism of any specific product or team. The issues discussed here are structural and ecosystem-wide. No pun intended toward any particular tool, vendor, or approach.


<!--end-of-excerpt-->
# AI Coding Tools Need a Real Extensibility Model


This is increasingly hard to ignore.

Many of today’s AI coding IDEs, editors, and terminal tools appear modern on the surface while offering surprisingly limited extension and integration capabilities underneath. In several important respects, they feel less extensible than mature developer tooling ecosystems that existed long before the current wave of LLM products.

That should be taken seriously.
## Why this post

This post comes from hands-on R&D work on building enforcement and integration layers for modern AI coding environments.

Working directly with these tools at the integration level exposes a very different reality than what is visible from the user experience. What looks seamless and powerful at the surface often becomes fragmented, non-deterministic, and difficult to control when you try to build real systems on top of it.

This is not a theoretical critique. It is based on practical experimentation with extending, constraining, and integrating AI-driven development workflows.

The goal of this post is to document those findings and highlight the architectural gaps that become apparent when moving from usage to platform-level thinking.

## The problem is not lack of features

The main issue is not that these products are missing one or two APIs. The deeper issue is that many of them do not seem to have a strong extensibility philosophy.

A mature extensibility model is not just a list of callbacks or a few convenient hook points. It requires:

- stable contracts  
- deterministic invocation rules  
- lifecycle visibility  
- observability  
- versioning  
- state boundaries  
- policy insertion points  

Without these, you cannot build serious systems.

Visual Studio, JetBrains IDEs, Vim, and Emacs all understood this. Their extension models were not perfect, but they allowed developers to build real products on top of them.

Today’s AI coding tools often do not.

## Hooks are not enough

Most current AI tools expose integration through hooks.

Hooks before execution. Hooks after execution. Hooks around prompts. Hooks around tool calls.

This looks flexible, but it hides a deeper problem.

Hooks are not deterministic.

### Practical example

Consider a simple requirement:

You want to enforce that **every file write goes through a policy check**.

In a traditional IDE plugin system, this is straightforward:
- intercept file write event  
- run policy  
- allow or deny  

In an AI coding tool:

- the agent *may* call a tool that writes files  
- or it may generate a patch  
- or it may inline changes  
- or it may skip the path entirely  

Your hook only triggers if the internal flow reaches that specific extension point.

Now your enforcement is conditional.

That is not acceptable for:
- compliance  
- security  
- governance  
- audit  

You cannot build guarantees on top of probabilistic behavior.

### Another example

You want to track **who changed what and why**.

In a proper system:
- every change has a trace  
- every action has a source  
- every step is replayable  

In current tools:
- changes are often the result of multi-step agent reasoning  
- internal decisions are opaque  
- hooks only expose fragments  

You end up with partial observability.

Again, not acceptable for real systems.

## The return of TUI and CLI romanticism

There is also a noticeable shift toward terminal-based AI tools.

Claude Code, OpenCode, and similar systems are often presented as more “powerful” or “closer to the metal.”

This narrative is misleading.

The terminal is not inherently more extensible.

What often happens instead:
- UI complexity is removed  
- orchestration complexity remains hidden  
- integration surfaces become even thinner  

You are not gaining control. You are losing visibility.

A TUI can still be a closed system.

In many cases, it is.

## We already know better patterns

This is not an unsolved problem.

We already solved similar problems in other domains.

Language Server Protocol (LSP):
- standardized communication  
- decoupled editors and language tooling  

Classic IDE plugin systems:
- deterministic event systems  
- strong lifecycle models  
- deep integration capabilities  

Even older systems like Vim and Emacs:
- composability  
- full control over behavior  

Today’s AI tools are ignoring these lessons.

Instead, we have:
- fragmented ecosystems  
- vendor-specific APIs  
- weak contracts  
- non-deterministic behavior  

## A note on emerging protocols (ACP as an example)

There are early attempts to fix parts of this problem.

One of them is the Agent Client Protocol (ACP).

ACP standardizes communication between editors and agents using JSON-RPC, allowing agents to run as subprocesses or remote services and interact through structured messages.

It addresses a real issue:
- every editor-agent pair currently requires custom integration  
- this creates lock-in and duplication  
- ACP introduces a shared protocol layer  

This is similar in spirit to LSP:
- decouple editor from agent  
- reduce integration cost  
- enable ecosystem growth  

ACP also formalizes:
- sessions  
- prompt flows  
- tool calls  
- permission requests  
- streaming updates 

This is a meaningful improvement.

### But ACP is not sufficient

ACP solves communication, not control.

It defines:
- how messages are exchanged  
- how sessions are structured  

It does not define:
- what must always happen  
- what cannot be bypassed  
- what guarantees exist  

If an agent decides not to perform an action, ACP does not enforce anything.

The system remains probabilistic.

ACP is a good step.

But it is only a step.

## The real missing layer: control and determinism

The core issue is this:

We are building deterministic systems on top of non-deterministic cores, without introducing a deterministic control layer.

That is the architectural gap.

### What is needed instead

We need a **host-controlled execution model**, not an agent-controlled one.

Concretely:

### 1. Mandatory lifecycle pipeline

Every agent action must pass through a fixed pipeline:

- intent generation  
- plan creation  
- tool selection  
- execution  
- verification  

Each stage must be:
- observable  
- interceptable  
- enforceable  

Not optional. Not best effort.

### 2. Policy as a first-class system

Policies should not be hooks.

They should be:
- declarative  
- mandatory  
- centrally enforced  

Example:

- “No file writes outside /src”  
- “All DB migrations require approval”  
- “All external HTTP calls must be logged”  

These should not depend on agent cooperation.

### 3. Deterministic tool execution layer

Agents should not directly execute tools.

Instead:

- agent requests action  
- host validates  
- host executes  
- host returns result  

This creates a boundary.

Without this, you cannot guarantee anything.

### 4. Full execution trace

Every step should be recorded:

- prompt  
- plan  
- tool calls  
- file changes  
- approvals  

This enables:
- debugging  
- audit  
- replay  

Without this, systems become untrustworthy.

### 5. Protocol + enforcement, not protocol alone

Protocols like ACP are useful.

But they need to be combined with:
- deterministic lifecycle  
- enforcement layer  
- policy engine  

Otherwise they only standardize inconsistency.

## A concrete direction

A realistic path forward would look like this:

- ACP (or similar) for communication  
- LSP-like model for capability discovery  
- Host-controlled execution pipeline  
- Policy engine integrated into the runtime  
- Standardized audit and trace format  

This combination would allow:

- real extensibility  
- real governance  
- real interoperability  

Not just integration.

## Conclusion

The current AI coding tooling ecosystem is evolving quickly, but its extensibility model is still immature.

A prompt interface is not a platform.  
A hook is not a contract.  
A terminal UI is not openness.  

We are starting to see recognition of the problem, and that is a good sign.

But until these systems provide deterministic, enforceable, and observable extension models, they will remain powerful for individuals but unreliable as foundations for serious systems.

That gap will not remain optional.

It will become the next major battleground in developer tooling.

***
{% include share_twitter_tr.html %}

***
