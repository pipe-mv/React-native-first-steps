import { StatusBar } from 'expo-status-bar'

import { StyleSheet, View } from 'react-native'
import Main from './components/main'
import { SafeAreaProvider } from 'react-native-safe-area-context'

// import icon from './assets/icon.png'
// const icon = require('./assets/icon.png')

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Main />
        {/* <Image
        // blurRadius={10}
        // source={icon}
        source={{
          uri: 'https://c4.wallpaperflare.com/wallpaper/571/272/63/catherine-zeta-jones-wallpaper-preview.jpg',
        }}
        style={{ width: 350, height: 370, resizeMode: 'contain' }}
      />
      <StatusBar style="light" />
      <Text style={{ color: 'white' }}>This is my first application in react native!!!!</Text>
      <Button color={'cyan'} title="Press Here!" onPress={() => alert('Hello Felipe')} />
      <TouchableHighlight
        underlayColor={'#09f'}
        onPress={() => alert('New Button with color')}
        style={{ width: 50, height: 50, backgroundColor: 'red', borderRadius: 100 }}
      >
        <Text style={{ color: 'white' }}>Press Here!!!!</Text>
      </TouchableHighlight>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'cyan' : 'rgb(210, 230, 255)',
          },
        ]}
      >
        {({ pressed }) => (
          <Text style={{ fontSize: pressed ? 32 : 16 }}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
      </Pressable> */}
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
