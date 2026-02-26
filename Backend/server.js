import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); // Para leer JSON del frontend

// Ruta para recibir el formulario
app.post("/recommend", (req, res) => {
  const { name, song, link, message } = req.body;

  console.log("📩 Nueva recomendación:");
  console.log({ name, song, link, message });

  // Aquí podrías guardar en una BD, enviar correo, etc.

  return res.json({ success: true, message: "Recomendación recibida" });
});

app.get("/", (req, res) => {
  res.send("Backend funcionando 🎶");
});

// Render usa el puerto definido en process.env.PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor escuchando en puerto " + PORT));