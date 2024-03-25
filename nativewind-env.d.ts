/// <reference types="nativewind/types" />

declare module '@env' {
    export const SUPABASE_URL: string;
    export const SUPABASE_API_KEY: string;
    // other ones
}

type Book = {
    id?: number;
    title: string;
    author: string;
    genre: string;
    publishedDate: Date | undefined;
};

type Store = {
    book: Book;
    setBook: (book: Book) => void;
};
