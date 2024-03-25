import React from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView} from 'react-native-tab-view';
import {Home, List, Setting} from './';
import {useState} from 'react';

const renderScene = (props: any) => {
    const {route} = props;
    switch (route.key) {
        case 'home':
            return <Home {...props} navigation={route.navigation} />;
        case 'list':
            return <List {...props} navigation={route.navigation} />;
        case 'setting':
            return <Setting {...props} navigation={route.navigation} />;
        default:
            return null;
    }
};

const Main = ({navigation}: {navigation: any}) => {
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = React.useState([
        {key: 'home', title: 'Home', navigation},
        {key: 'list', title: 'List', navigation},
        {key: 'setting', title: 'Setting', navigation},
    ]);

    return (
        <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
        />
    );
};

export default Main;
