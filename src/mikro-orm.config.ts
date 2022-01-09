import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "Puroddit",
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0]; 
/*Parameters returns an array 
so we just select the first parameter*/


