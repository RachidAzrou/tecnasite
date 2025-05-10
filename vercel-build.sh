#!/bin/bash

# Vercel deployment build script

# Build de frontend
echo "Running frontend build for Vercel..."
npm run build

# Kopieer API serverless functie
mkdir -p .vercel/output/functions
cp -r api .vercel/output/functions/

# Kopieer statische bestanden
mkdir -p .vercel/output/static
cp -r dist/public/* .vercel/output/static/

# Kopieer config
mkdir -p .vercel/output
cp _vercel_build_output/config.json .vercel/output/

echo "Vercel build completed!"