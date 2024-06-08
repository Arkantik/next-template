import { buildSchema } from "type-graphql"
import { TemplateResolver } from "./resolvers/TemplateResolver"

export default buildSchema({
	resolvers: [TemplateResolver],
})
