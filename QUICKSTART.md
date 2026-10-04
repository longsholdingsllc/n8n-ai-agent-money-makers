# Quick Start – Run These Templates Today

## 1. Install / Start n8n (choose one)

**Option A – Self-hosted (recommended, $0 forever)**
```bash
npx n8n
```
Or with Docker:
```bash
docker run -it --rm --name n8n -p 5678:5678 -v ~/.n8n:/home/node/.n8n n8nio/n8n
```

**Option B – n8n Cloud free trial** (if you prefer no local install)

Open http://localhost:5678 after starting.

## 2. Import a Workflow
1. In n8n, click **+** → **Import from File**
2. Select any `workflow.json` from this repo
3. Open the AI Agent node and add your LLM credentials (OpenAI, Anthropic, Gemini, or local Ollama)

## 3. Test Immediately

### Lead Qualification Agent
Send a POST request to the webhook URL shown in the node:
```bash
curl -X POST http://localhost:5678/webhook/lead-qualify \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@acme.com",
    "company": "Acme Corp",
    "title": "VP of Operations",
    "message": "Looking for AI automation to reduce manual lead research"
  }'
```

### Content Repurposing
```bash
curl -X POST http://localhost:5678/webhook/repurpose \
  -H "Content-Type: application/json" \
  -d '{
    "content": "Your long-form blog post or article text goes here..."
  }'
```

## 4. Next – Monetize
- Package the working JSON + setup.md into a ZIP
- Upload to your Gumroad / Lemon Squeezy as a digital product
- Or offer “I will install and customize this for you” on Upwork / LinkedIn

You now have working, sellable assets.
