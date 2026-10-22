import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "ROYAL GAME",
    message: "Byenveni nan API ROYAL GAME!",
    status: "online"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Sèvè ROYAL GAME la ap fonksyone."
  });
});

// Done demonstrasyon jiskaske nou konekte
// yon API espòtif reyèl.
app.get("/api/matches", (req, res) => {
  res.json({
    demo: true,
    message: "Sa yo se match demonstrasyon, se pa rezilta an dirèk.",
    sports: [
      {
        id: 1,
        sport: "football",
        homeTeam: "Ekip A",
        awayTeam: "Ekip B",
        time: "Pou konfime",
        status: "upcoming",
        score: null
      },
      {
        id: 2,
        sport: "basketball",
        homeTeam: "Ekip C",
        awayTeam: "Ekip D",
        time: "Pou konfime",
        status: "upcoming",
        score: null
      }
    ]
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`ROYAL GAME API ap koute sou pò ${PORT}`);
});
