@echo off
title Portfolio MERN
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo Node.js is not installed. Install from https://nodejs.org/
  pause
  exit /b 1
)

if not exist "server\node_modules\" (
  echo Installing dependencies...
  call npm run install:all
)

echo Starting portfolio at http://localhost:5173
echo Press Ctrl+C to stop.
start http://localhost:5173
call npm run dev
