import {create} from 'zustand';

export const useStore = create<Store>(set => ({
    book: {
        title: '',
        author: '',
        genre: '',
        publishedDate: new Date(),
    },
    setBook: (book: Book) => {
        set(() => ({
            book,
        }));
    },
}));
