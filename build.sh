#!/bin/bash
echo "Installing client dependencies..."
cd client
npm install
echo "Building client..."
npm run build
echo "Client built successfully."