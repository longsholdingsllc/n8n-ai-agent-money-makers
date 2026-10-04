# Support Triage AI Agent – Setup Guide

## What it does
Monitors new support tickets (email, Zendesk, Intercom, or webhook). AI classifies urgency, category, and sentiment, drafts a reply, and either auto-sends low-risk replies or routes high-priority items to a human with full context.

## Value to client
Reduces first-response time from hours to minutes and cuts manual triage load by 60-80%.

## Suggested pricing
- One-time build: $1,497–$3,997
- Monthly retainer: $297–$797

## Prerequisites
- Support channel credentials (Gmail, Zendesk, etc.)
- LLM API key
- Optional: Slack for escalations

## Import & Configure
1. Import `workflow.json`.
2. Replace the trigger with your real ticket source.
3. Tune the system prompt with your support policies and tone of voice.
4. Add your CRM or helpdesk node for logging.
5. Test with sample tickets of varying urgency.
