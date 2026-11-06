# Learning Progress - ApplyTrack

## Task 1.1 – Project Setup
- Created project structure (`applytrack/server`)
- Initialized Git + GitHub repository
- Set up Express + dotenv + nodemon
- Added `/api/health` endpoint
- Learned why `.env` should never be committed
- Learned what nodemon does vs plain node

## Task 1.2 – Server Structure
- Moved from single `index.js` to modular structure
- Separated concerns:
  - `src/app.js` → Express app + middleware + routes
  - `src/server.js` → starts the server
  - `src/routes/health.routes.js` → health endpoint
- Added proper 404 JSON handler
- Worked on a feature branch + Pull Request
- Learned importance of small, meaningful commits