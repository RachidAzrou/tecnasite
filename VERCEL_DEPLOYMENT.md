# Deployment van TECNARIT Website op Vercel

Deze stapsgewijze gids helpt je om de TECNARIT website probleemloos te deployen op Vercel.

## Stap 1: Account aanmaken en voorbereiden

1. Maak een account aan op [Vercel](https://vercel.com) als je die nog niet hebt
2. Verbind je GitHub, GitLab of Bitbucket account met Vercel (of gebruik Vercel CLI voor directe uploads)

## Stap 2: Project importeren

1. Klik op "Add New..." en selecteer "Project" in het Vercel dashboard
2. Selecteer je repository met de TECNARIT website
3. Je wordt naar de configuratiepagina geleid

## Stap 3: Configureren van het project

1. **Framework Preset**: Selecteer "Vite" of "Other"
2. **Build Command**: Laat dit op de standaard instelling `npm run build`
3. **Output Directory**: Zorg ervoor dat dit staat ingesteld op `dist`
4. **Environment Variables**: Klik op "Add" en voeg de volgende variabele toe:
   - `SENDGRID_API_KEY`: Je SendGrid API sleutel voor e-mailfunctionaliteit
   
![Vercel Environment Variables Screenshot](https://i.imgur.com/example-image.png)

## Stap 4: Deployment

1. Klik op "Deploy" onderaan de pagina
2. Wacht tot het build en deployment proces is voltooid
3. Als het succesvol is, krijg je een URL waar je site is gedeployed
4. Test deze URL om er zeker van te zijn dat alles correct werkt

## Stap 5: Domein koppelen (optioneel)

Als je een eigen domein wilt gebruiken:

1. Ga naar het tabblad "Domains" in het projectdashboard
2. Klik op "Add" en voer je domeinnaam in
3. Volg de instructies om DNS records in te stellen bij je domeinprovider

## Stap 6: SendGrid configuratie controleren

Na deployment is het belangrijk om de e-mailfunctionaliteit te controleren:

1. Ga naar je TECNARIT website en vul het contactformulier in
2. Controleer of de e-mail correct wordt ontvangen op info@tecnarit.com
3. Als er problemen zijn, controleer of:
   - De SENDGRID_API_KEY correct is ingesteld
   - Je het afzenderdomein hebt geverifieerd in SendGrid

## Problemen oplossen

Als je deployment problemen ondervindt:

1. Controleer de build logs in het Vercel dashboard
2. Zorg ervoor dat `vercel.json` correct is geconfigureerd in je repository
3. Test lokaal met `npm run build` om te zien of er build-problemen zijn

## Onderhoudsupdate

Wanneer je later wijzigingen wilt doorvoeren:

1. Commit en push je wijzigingen naar de repository
2. Vercel zal automatisch een nieuwe deployment starten
3. Je kunt de voortgang volgen in het Vercel dashboard

---

Voor meer gedetailleerde informatie, raadpleeg de [officiële Vercel documentatie](https://vercel.com/docs).