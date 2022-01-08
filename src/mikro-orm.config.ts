import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

export default {
  entities: [Post],
  dbName: "Puroddit",
  type: "postgresql",
  debug: !__prod__
}