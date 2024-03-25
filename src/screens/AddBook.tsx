import {
    DateTimePickerAndroid,
    DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    Alert,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {useBooks} from '../hooks/useBooks';
import {useStore} from '../hooks/useStore';

const AddBook = ({navigation}: {navigation: any}) => {
    const {createBook, updateBook} = useBooks();
    const {book} = useStore((state: Store) => state);
    const [isEdit, setIsEdit] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [payload, setPayload] = useState<Book>(book);

    useEffect(() => {
        if (book.id) {
            navigation.setOptions({title: 'Update Book'});
            setIsEdit(true);
            setPayload(book);
        } else {
            setIsEdit(false);
            navigation.setOptions({title: 'Add Book'});
        }
    }, [book]);

    const onChange = (
        event: DateTimePickerEvent,
        selectedDate: Date | undefined,
    ) => {
        setPayload({...payload, publishedDate: selectedDate});
    };

    const openCalendar = () => {
        DateTimePickerAndroid.open({
            value: new Date(),
            onChange,
            mode: 'date',
            is24Hour: true,
        });
    };

    const onAddBook = async () => {
        const {success, error} = await createBook(payload);
        if (error) {
            Alert.alert('Error', 'Something went wrong.', [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
        }
        if (success) {
            navigation.navigate('Main');
        }
    };

    const onUpdateBook = async () => {
        const {success, error} = await updateBook(payload.id!, payload);
        if (error) {
            Alert.alert('Error', 'Something went wrong.', [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
        }
        if (success) {
            navigation.navigate('Main');
        }
    };

    const onSave = async () => {
        if (payload.title && payload.author && payload.genre) {
            setSubmit(true);
            if (isEdit) {
                onUpdateBook();
            } else {
                onAddBook();
            }
            setSubmit(false);
        } else {
            Alert.alert(
                'Missing Fields',
                'Please fill all the required fields.',
                [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            );
        }
    };

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <SafeAreaView className="flex-1 flex flex-col gap-4 p-4">
                <View className="flex-col gap-2">
                    <Text className="text-[18px] font-medium text-black">
                        Title
                    </Text>
                    <TextInput
                        value={payload.title}
                        onChangeText={value =>
                            setPayload({...payload, title: value})
                        }
                        className="border border-gray-400 rounded-[12px] px-4 text-[16px] bg-white"
                    />
                </View>
                <View className="flex-col gap-2">
                    <Text className="text-[18px] font-medium text-black">
                        Author
                    </Text>
                    <TextInput
                        value={payload.author}
                        onChangeText={value =>
                            setPayload({...payload, author: value})
                        }
                        className="border border-gray-400 rounded-[12px] px-4 text-[16px] bg-white"
                    />
                </View>
                <View className="flex-col gap-2">
                    <Text className="text-[18px] font-medium text-black">
                        Genre
                    </Text>
                    <TextInput
                        value={payload.genre}
                        onChangeText={value =>
                            setPayload({...payload, genre: value})
                        }
                        className="border border-gray-400 rounded-[12px] px-4 text-[16px] bg-white"
                    />
                </View>
                <View className="flex-col gap-2">
                    <Text className="text-[18px] font-medium text-black">
                        Publish Date
                    </Text>
                    <TouchableOpacity onPress={() => openCalendar()}>
                        <TextInput
                            pointerEvents="none"
                            placeholder="Hello"
                            className="border border-gray-400 rounded-[12px] px-4 text-[16px] text-black bg-white"
                            editable={false}
                            value={new Date(
                                payload.publishedDate!,
                            )?.toLocaleDateString('en-US', {
                                month: '2-digit',
                                day: '2-digit',
                                year: 'numeric',
                            })}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    className="relative"
                    disabled={submit}
                    onPress={() => onSave()}>
                    <Text className="text-center bg-indigo-800 py-4 rounded-[12px] text-[16px] text-white font-medium uppercase">
                        Save
                    </Text>
                    {submit && (
                        <ActivityIndicator className="absolute inset-x-1/2 inset-y-1/2 -mr-[80px]" />
                    )}
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    );
};

export default AddBook;
