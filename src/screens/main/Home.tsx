import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useBooks} from '../../hooks/useBooks';
import {ActivityIndicator} from 'react-native';

const Home = () => {
    const {isLoading, getTotalBooks, getTotalGenres} = useBooks();

    if (isLoading) {
        return (
            <SafeAreaView className="flex-1 flex flex-col gap-4 p-4 items-center justify-center">
                <ActivityIndicator />
            </SafeAreaView>
        );
    }
    return (
        <SafeAreaView className="flex-1 flex flex-col gap-4 p-4">
            <View className="flex items-center p-4 border border-gray-400 rounded-[12px]">
                <Text className="text-[50px] font-bold">{getTotalBooks()}</Text>
                <Text className="text-[14px] uppercase">Books</Text>
            </View>
            <View className="flex items-center p-4 border border-gray-400 rounded-[12px]">
                <Text className="text-[50px] font-bold">
                    {getTotalGenres()}
                </Text>
                <Text className="text-[14px] uppercase">Genre</Text>
            </View>
        </SafeAreaView>
    );
};

export default Home;
