import React from 'react';
import {BackHandler, SafeAreaView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Setting = () => {
    return (
        <SafeAreaView className="flex-1 flex flex-col">
            <TouchableOpacity onPress={() => BackHandler.exitApp()}>
                <View className="flex-row items-center border-b p-4 gap-4">
                    <Icon name="logout" size={20} color="black" />
                    <Text className="text-[16px] text-black">Exit</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Setting;
