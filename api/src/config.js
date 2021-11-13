import { config } from "dotenv";
config();

export default {
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb+srv://proyectoCiclo3:proyectoCiclo3@clusterproyectociclo3.hgprn.mongodb.net/ClusterProyectoCiclo3?retryWrites=true&w=majority",
  PORT: process.env.PORT || 3000,
  SECRET_KEY_JWT: "restapi-proyectoCiclo3-P16-5",
};
