import axios from "axios";

// ===============================
// Axios Instance
// ===============================

const api = axios.create({

    baseURL: "http://127.0.0.1:8000"

});

// ===============================
// Match Prediction
// ===============================

export const predictMatch = (team1, team2) =>

    api.post("/predict_match", {

        team1,

        team2

    });

// ===============================
// Tournament Simulation
// ===============================

export const simulateTournament = (teams) =>

    api.post("/simulate_tournament", {

        teams

    });

// ===============================
// Get All Teams
// ===============================

export const getTeams = () =>

    api.get("/teams");

// ===============================
// Get Single Team
// ===============================

export const getTeam = (team) =>

    api.get(`/team/${team}`);

// ===============================
// FIFA Rankings
// ===============================

export const getRankings = () =>

    api.get("/rankings");

// ===============================
// Export Axios
// ===============================

export default api;

export const getHistory = () =>

    api.get("/history");