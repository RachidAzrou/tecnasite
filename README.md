# TECNARIT Website

Een moderne, responsieve website voor TECNARIT die professionele softwaretestdiensten presenteert met een focus op nearshoring-oplossingen tussen België en Marokko.

## Technologieën

- React.js voor frontend
- Express.js voor backend
- Internationalisatie (i18n) met ondersteuning voor EN/NL/FR
- Responsief design met meertalige content
- SendGrid e-mail integratie voor contactformulier

## Deployment op Vercel

Dit project kan eenvoudig worden gedeployed op Vercel door de volgende stappen te volgen:

1. Maak een account aan op [Vercel](https://vercel.com) als je die nog niet hebt
2. Verbind je GitHub, GitLab of Bitbucket account met Vercel
3. Importeer dit project vanuit je repository
4. Voeg de volgende omgevingsvariabelen toe:
   - `SENDGRID_API_KEY`: Je SendGrid API sleutel voor e-mailfunctionaliteit
5. Klik op "Deploy" en wacht tot de build is voltooid

### Belangrijke aandachtspunten voor Vercel deployment

- Zorg dat de `vercel.json` configuratie aanwezig is in de root van je project
- Voeg je SendGrid API sleutel toe als een omgevingsvariabele in het Vercel dashboard
- Als je domeinconfiguratie hebt gedaan in SendGrid, zorg dan dat je afzender e-mailadres in `server/routes.ts` overeenkomt met een geverifieerd domein

## Lokale ontwikkeling

Om het project lokaal te ontwikkelen:

1. Clone de repository
2. Installeer dependencies: `npm install`
3. Start de ontwikkelserver: `npm run dev`
4. Open [http://localhost:5000](http://localhost:5000) in je browser

## Structuur

- `client/`: React.js frontend code
- `server/`: Express.js backend code
- `shared/`: Gedeelde types en schemas