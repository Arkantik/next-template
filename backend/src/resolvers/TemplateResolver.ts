import { Query, Resolver } from "type-graphql"
import { TemplateEntity } from "../entities/TemplateEntity"

@Resolver(TemplateEntity)
export class TemplateResolver {
	@Query(() => [TemplateEntity])
	async templates() {
		return TemplateEntity.find()
	}
}
