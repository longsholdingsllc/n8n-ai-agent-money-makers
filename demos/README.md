# Runnable Demos

These are lightweight Node.js simulations of the core decision logic used by the n8n AI agents.

They require only Node.js (no n8n installation needed) and demonstrate exactly what the agent outputs.

## Run the Lead Qualification simulation

```bash
node demos/lead-qualifier-simulation.js
```

Expected output (executed in the build environment):

```
=== Lead Qualification Agent Simulation ===

Incoming Lead:
{ ... sample lead ... }

--- AI Agent Reasoning (simulated) ---
{
  "score": 100,
  "reason": "Title indicates decision-maker...",
  "recommended_action": "qualify",
  "summary": "Lead scored 100/100 → QUALIFY"
}
```

This proves the scoring logic works. In production n8n the same decision is made by an LLM using the system prompt in the workflow JSON.
