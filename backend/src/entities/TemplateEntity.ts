import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { Field, ObjectType } from "type-graphql"
import { UUID } from "crypto"

@Entity()
@ObjectType()
export class TemplateEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field()
	id: UUID

	@Column()
	@Field()
	name: string
}
