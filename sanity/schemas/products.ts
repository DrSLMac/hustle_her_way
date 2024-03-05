export default {
    name: 'product',
    type: 'document',
    title: "Products",
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of Product',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of Product',
            options: {
                source: 'title'
            },
        },
        {
            name: 'productImage',
            type: 'image',
            title: 'Product Image',
        },
        {
            name: 'hoverImage',
            type: 'image',
            title: 'Hover Image',
        },
        {
            name: 'image2',
            type: 'image',
            title: 'Image Two',
        },
        {
            name: 'image3',
            type: 'image',
            title: 'Image Three',
        },
        {
            name: 'image4',
            type: 'image',
            title: 'Image Four',
        },
        {
            name: 'image5',
            type: 'image',
            title: 'Image Five',
        },
        {
            name: 'howitworks',
            type: 'image',
            title: 'How It Works',
        },
        {
            name: 'productDescription',
            type: 'text',
            title: 'Product Description',
        },
        {
            name: 'price',
            type: 'number',
            title: 'Product Price',
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
        },
        {
            name: 'featured',
            type: 'boolean',
            title: 'Featured Product',
        }
    ],
}