import {useQuery} from 'react-query';
import supabase from '../supabase';

const fetchBooks = async () => {
    const {data, error} = await supabase
        .from('books')
        .select('*')
        .order('id', {ascending: false});
    if (error) {
        throw new Error(error.message);
    }
    return data;
};

export const useBooks = () => {
    const {
        data,
        isLoading: isBooksLoading,
        isError: isBooksError,
        refetch,
    } = useQuery('books', fetchBooks);

    const getBookById = async (id: number) => {
        const {data: book, error} = await supabase
            .from('books')
            .select('*')
            .eq('id', id)
            .single();
        if (error) {
            throw new Error(error.message);
        }
        return book;
    };

    const getTotalBooks = () => {
        return data ? data.length : 0;
    };

    const getTotalGenres = () => {
        return new Set(data?.map(book => book.genre)).size;
    };

    const createBook = async (newBookData: Book) => {
        try {
            const {data: book, error} = await supabase
                .from('books')
                .insert([newBookData]);
            if (error) {
                throw new Error(error.message);
            }
            refetch();
            return {book, success: true};
        } catch (error: any) {
            return {error: error.message, success: false};
        }
    };

    const updateBook = async (id: number, updatedBookData: Book) => {
        try {
            const {data: book, error} = await supabase
                .from('books')
                .update(updatedBookData)
                .eq('id', id);

            if (error) {
                throw new Error(error.message);
            }
            refetch();
            return {book, success: true};
        } catch (error: any) {
            return {error: error.message, success: false};
        }
    };

    const deleteBook = async (id: number) => {
        const {error} = await supabase.from('books').delete().eq('id', id);
        refetch();
        if (error) {
            throw new Error(error.message);
        }
    };

    return {
        books: data,
        isLoading: isBooksLoading,
        isError: isBooksError,
        getBookById,
        getTotalGenres,
        getTotalBooks,
        createBook,
        updateBook,
        deleteBook,
    };
};
