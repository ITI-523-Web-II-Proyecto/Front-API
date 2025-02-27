import * as express from "express"
import { AppDataSource } from "./data-source"
import cors = require("cors")
import helmet from "helmet"
import exp = require("constants")
import routes from "./routes"

const PORT = process.env.PORT || 3000;

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(cors());
    app.use(helmet());
    app.use(express.json());

    //rutas
    app.use('/',routes);

    // start express server
    app.listen(PORT,()=>{ console.log(`El servidor ha sido levantado en el puerto https://localhost:${PORT}`)})
   

}).catch(error => console.log(error))
