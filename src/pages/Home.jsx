import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { Layout } from "../components/Layout";

export function Home() {
  return <Layout>{getNewsCategoriesEndpoint("football", 3, 30)}</Layout>;
}
