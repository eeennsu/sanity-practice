import type { SchemaTypeDefinition } from 'sanity'
import resourcePaylistSchema from './schemaTypes/resource-playlist.scema'
import resourceSchema from './schemaTypes/resource.schema'

export const schemas: SchemaTypeDefinition[] = [
    resourceSchema,
    resourcePaylistSchema,
]

export default schemas
