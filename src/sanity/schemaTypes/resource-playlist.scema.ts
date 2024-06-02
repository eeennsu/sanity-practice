import type { SchemaTypeDefinition } from 'sanity'

const resourcePaylistSchema: SchemaTypeDefinition = {
    name: 'resourcePlaylist',
    title: 'Resource Playlist',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'resources',
            title: 'Resources',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'resource',
                        },
                    ],
                },
            ],
        },
    ],
}

export default resourcePaylistSchema
