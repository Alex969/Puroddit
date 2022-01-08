import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";

export default {
  entities: [Post],
  dbName: "Puroddit",
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init()>[0]; 
/*Parameters returns an array 
so we just select the first parameter*/


