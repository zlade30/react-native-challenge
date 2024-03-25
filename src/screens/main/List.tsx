import React from 'react';
import {
    ActivityIndicator,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useBooks} from '../../hooks/useBooks';
import {useStore} from '../../hooks/useStore';

const List = ({navigation}: {navigation: any}) => {
    const {isLoading, books, deleteBook} = useBooks();
    const {setBook} = useStore((state: Store) => state);

    const handleUpdate = (book: Book) => {
        setBook(book);
        navigation.navigate('AddBook');
    };

    const handleAdd = () => {
        setBook({
            author: '',
            genre: '',
            publishedDate: new Date(),
            title: '',
        });
        navigation.navigate('AddBook');
    };

    if (isLoading) {
        return (
            <SafeAreaView className="flex-1 flex flex-col gap-4 p-4 items-center justify-center">
                <ActivityIndicator />
            </SafeAreaView>
        );
    }
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <SafeAreaView className="flex-1 flex flex-col gap-4 p-4">
                <View className="w-full flex-row justify-end">
                    <TouchableOpacity onPress={() => handleAdd()}>
                        <Icon name="add" size={30} color="#2986cc" />
                    </TouchableOpacity>
                </View>
                {books?.map((book: Book) => (
                    <View
                        key={book.id}
                        className="border rounded-[12px] p-4 border-gray-400">
                        <View className="flex-row w-full item-center justify-between gap-2 pb-2">
                            <Text className="text-black font-medium text-[25px]">
                                {book.title}
                            </Text>
                            <View className="flex-row gap-2">
                                <TouchableOpacity
                                    onPress={() => handleUpdate(book)}>
                                    <Icon
                                        name="edit"
                                        size={15}
                                        color="#2986cc"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => deleteBook(book.id!)}>
                                    <Icon
                                        name="delete"
                                        size={15}
                                        color="#b20000"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View className="flex-row items-center gap-2">
                            <Text className="text-black font-medium">
                                Author:
                            </Text>
                            <Text className="text-black">{book.author}</Text>
                        </View>
                        <View className="flex-row items-center gap-2">
                            <Text className="text-black font-medium">
                                Genre:
                            </Text>
                            <Text className="text-black">{book.genre}</Text>
                        </View>
                        <View className="flex-row items-center gap-2">
                            <Text className="text-black font-medium">
                                Date Published:
                            </Text>
                            {book?.publishedDate && (
                                <Text className="text-black">
                                    {new Date(
                                        book?.publishedDate,
                                    ).toLocaleDateString('en-US', {
                                        month: '2-digit',
                                        day: '2-digit',
                                        year: 'numeric',
                                    })}
                                </Text>
                            )}
                        </View>
                    </View>
                ))}
            </SafeAreaView>
        </ScrollView>
    );
};

export default List;
