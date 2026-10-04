# Lead Qualification Agent – Setup Guide

## What it does
Incoming leads (webhook, form, or CRM) are enriched (optional free APIs or your data source), scored by an AI agent against your Ideal Customer Profile, and either pushed to your CRM as a qualified opportunity or tagged for nurture.

## Value to client
Saves 5–15 hours/week of manual research and prioritization. Typical ROI in first month.

## Suggested pricing
- One-time build: $997–$2,497
- Monthly maintenance: $197–$497

## Prerequisites
- n8n 1.50+
- OpenAI / Anthropic / Gemini API key (or local Ollama)
- Target CRM (HubSpot, Pipedrive, Airtable, or Google Sheets for starter)
- Optional enrichment: Clearbit free tier, Hunter, or your own scrape

## Import & Configure
1. Import `workflow.json`.
2. Open the AI Agent node → set your model credentials.
3. Update the System Prompt with your specific ICP criteria.
4. Connect the final CRM / Sheets node credentials.
5. Activate the webhook (or change trigger to schedule / form).
6. Test with a sample lead payload.

## Customization tips for higher fees
- Add multi-agent debate (researcher + scorer).
- Include Slack/Teams notification for high-score leads.
- Add human-in-the-loop approval for scores above threshold.
