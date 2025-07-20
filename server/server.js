import express from "express";
import publicRoutes from "./src/routes/public.js";
import privateRoutes from "./src/routes/private.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://taskly-woad.vercel.app/",
  })
);

app.use("/public", publicRoutes);
app.use("/private", privateRoutes);

app.listen(3000);
