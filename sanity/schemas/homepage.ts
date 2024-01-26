export default {
    name: 'homepage',
    type: 'document',
    title: "HomePage",
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'HomePage Title',
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title Image',
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                }
            ]
        }
    ],
}