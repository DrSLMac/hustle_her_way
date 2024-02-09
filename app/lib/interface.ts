export interface homepage {
    title: string;
    smallDescription: string;
    titleImage: any;
    content: any;
}

export interface simpleBlogCard {
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: any;
}

export interface fullBlog {
    currentSlug: string;
    title: string;
    content: any;
    titleImage: any;
}

export interface productDetails {
    title: string;
    productDescription?: string;
    price: number;
    featured?: boolean;
    content?: any;
    productImage: any;
    hoverImage?: any;
    currentSlug: string;
}