import { Link, Stack, useLocalSearchParams } from 'expo-router'
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native'
import { Screen } from '../components/Screen'
import { useEffect, useState } from 'react'
import { getGameDetails } from '../lib/metacritic'
import { Score } from '../components/Score'

export default function Detail() {
  const { id } = useLocalSearchParams()

  const [gameInfo, setGameInfo] = useState(null)

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGameInfo)
    }
  }, [id])

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#FFBD3F' },
          headerTintColor: '#fff',
          headerLeft: () => {},
          headerTitle: 'The Legend of Zelda: Breath of the Wild',
          headerRight: () => {},
        }}
      />
      {gameInfo === null ? (
        <ActivityIndicator color={'#fff'} size={'large'} />
      ) : (
        <ScrollView>
          <View className="justify-center items-center text-center">
            {/* <Text className="text-white font-bold mb-8 text-2xl">Details of the game {id}</Text> */}
            <Image
              className="mb-4 rounded"
              source={{ uri: gameInfo.img }}
              style={{ width: 214, height: 294 }}
            />
            <Score score={gameInfo.score} maxScore={100} />
            <Text className="text-white text-center font-bold mb-8 text-2xl">{gameInfo.title}</Text>
            {/* <Link href="/" className="text-blue-500">
                Go Back
              </Link> */}
            <Text className='text-white/70 mt-4 text-left mb-8 text-base'>{gameInfo.description}</Text>
          </View>
        </ScrollView>
      )}
    </Screen>
  )
}
