import { Tabs } from 'expo-router';
import { HomeIcon, InfoIcon } from '../../components/icons';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {backgroundColor: "#000", paddingTop: 4},
            tabBarActiveTintColor: '#FFBD3F',
            // headerTransparent: true,
        }}>
            <Tabs.Screen name='index' options={{
                title: 'Home',
                tabBarIcon: ({color})=> <HomeIcon color={color}/>
            }}/>
             <Tabs.Screen name='about' options={{
                title: 'About',
                tabBarIcon: ({color})=> <InfoIcon className='pt-2' color={color}/>
            }}/>
        </Tabs>
    )
}