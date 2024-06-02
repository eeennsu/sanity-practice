import type { SchemaTypeDefinition } from 'sanity'

export enum ResourceCategory {
    Frontend = 'frontend',
    Backend = 'backend',
    Next14 = 'next 14',
    Fullstack = 'fullstack',
    Others = 'others',
}

export const resourceCategory = Object.values(ResourceCategory)

const resourceSchema: SchemaTypeDefinition = {
    name: 'resource',
    title: 'Resource',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
            },
        },
        {
            name: 'downloadLink',
            title: 'Download Link',
            type: 'url',
            validation: (rule) => rule.required(),
        },
        {
            name: 'views',
            title: 'Views',
            type: 'number',
            initialValue: 0,
        },
        {
            name: 'poster',
            title: 'Poster',
            type: 'image',
            validation: (rule) => rule.required(),
            options: {
                hotspot: true, // 이미지의 특정 부분 강조
            },
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            validation: (rule) => rule.required(),
            options: {
                list: resourceCategory,
            },
        },
    ],
}

export default resourceSchema
