# TECNARIT Website Deployment op Vercel

Deze gids helpt je om de TECNARIT website probleemloos te deployen op Vercel als een **statische website met serverless functie** voor het contactformulier.

## Vereisten
- Een Vercel account (Aanmelden op https://vercel.com)
- Een SendGrid account met geverifieerd afzender e-mailadres
- Een SendGrid API key

## Stap 1: Vercel setup

1. Log in op je Vercel account
2. Klik op "Add New Project"
3. Importeer je repository van GitHub, GitLab of Bitbucket
4. In de configuratie, zorg ervoor dat:
   - **Framework Preset**: Automatisch ingesteld (laat Vercel detecteren)
   - **Build Command**: Automatisch ingesteld via vercel.json
   - **Output Directory**: Automatisch ingesteld via vercel.json

## Stap 2: Environment Variables instellen

Dit is **CRUCIAAL** voor het contactformulier:

1. Klik op "Environment Variables"
2. Voeg de volgende variabele toe:
   ```
   SENDGRID_API_KEY=jouw_sendgrid_api_key_hier
   ```
3. Zorg ervoor dat de variabele beschikbaar is in zowel Production, Preview als Development

## Stap 3: Deployment starten

1. Klik op "Deploy"
2. Dit proces duurt ongeveer 1-2 minuten

## Stap 4: Contactformulier testen

Na een succesvolle deployment:

1. Ga naar de gedeployede website
2. Vul het contactformulier in en verstuur het
3. Controleer of je een succesbericht krijgt
4. Kijk of de e-mail is aangekomen op info@tecnarit.com

## Stap 5: Verifieer het afzender e-mailadres in SendGrid

⚠️ **BELANGRIJK**: Het contactformulier gebruikt momenteel `sendgrid@tecnarit.com` als afzender.
Zorg ervoor dat dit e-mailadres **geverifieerd** is in je SendGrid account.

Als je een ander afzenderadres wilt gebruiken:
1. Verifieer het e-mailadres in SendGrid
2. Open `api/index.js` in je project
3. Wijzig regel 34 naar je geverifieerde e-mailadres
4. Commit de wijziging en deploy opnieuw

## Problemen oplossen

### Als het contactformulier niet werkt:

1. Controleer in Vercel dashboard onder "Functions" of de api/index.js functie correct is gedeployed
2. Controleer de Function logs in het Vercel dashboard
3. Verifieer dat je SendGrid API key nog geldig is
4. Controleer of het "from" e-mailadres geverifieerd is in SendGrid

### Als je 404 fouten krijgt bij directe URL's:

De vercel.json bevat een belangrijke "rewrites" configuratie die ervoor zorgt dat de React router correct werkt:

```json
"rewrites": [
  { "source": "/api", "destination": "/api/index" },
  { "source": "/(.*)", "destination": "/index.html" }
]
```

Deze configuratie zorgt ervoor dat Vercel alle requests doorstuurt naar de React app, behalve 
het API endpoint. Zo werken URL's zoals /privacy, /about, etc. ook bij directe toegang of refresh.

---

Voor meer informatie over Vercel serverless functions en SendGrid integratie, 
raadpleeg de [Vercel documentatie](https://vercel.com/docs/serverless-functions) 
en de [SendGrid documentatie](https://docs.sendgrid.com/for-developers/sending-email).