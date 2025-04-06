import app from "./app.js";
import env from "./config/validateEnv.config.js";

import "./config/db.config.js";
import "./config/cloudinary.config.js";

app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
});