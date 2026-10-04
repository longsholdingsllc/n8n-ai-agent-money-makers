// Simple Node.js simulation of the Lead Qualification Agent logic
// Run with: node demos/lead-qualifier-simulation.js

const sampleLead = {
  name: "Alex Rivera",
  email: "alex@growthco.io",
  company: "GrowthCo",
  title: "Head of Revenue Operations",
  message: "We process 200+ inbound leads per week manually. Looking for an AI system that can score and enrich them automatically before they hit our CRM.",
  budget: "5k-15k",
  timeline: "this quarter"
};

console.log("=== Lead Qualification Agent Simulation ===\n");
console.log("Incoming Lead:");
console.log(JSON.stringify(sampleLead, null, 2));
console.log("\n--- AI Agent Reasoning (simulated) ---");

// Simulated scoring logic based on ICP for automation services
let score = 0;
const reasons = [];

if (sampleLead.title && /revenue|ops|operations|growth|automation|ai/i.test(sampleLead.title)) {
  score += 30;
  reasons.push("Title indicates decision-maker in relevant function (+30)");
}
if (sampleLead.message && /automation|ai|manual|leads|crm/i.test(sampleLead.message)) {
  score += 35;
  reasons.push("Message describes clear automation pain point (+35)");
}
if (sampleLead.budget && /5k|10k|15k|\d{4,}/i.test(sampleLead.budget)) {
  score += 20;
  reasons.push("Budget range supports paid project (+20)");
}
if (sampleLead.timeline && /quarter|month|asap|soon/i.test(sampleLead.timeline)) {
  score += 15;
  reasons.push("Near-term timeline (+15)");
}

const action = score >= 70 ? "qualify" : score >= 40 ? "nurture" : "disqualify";

const result = {
  score,
  reason: reasons.join("; "),
  recommended_action: action,
  summary: `Lead scored ${score}/100 → ${action.toUpperCase()}`
};

console.log(JSON.stringify(result, null, 2));
console.log("\n=== End Simulation ===");
console.log("This is the core decision logic the n8n AI Agent node performs.");
console.log("In the real workflow, an LLM replaces this hardcoded scoring.");
