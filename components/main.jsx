// import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'

import { View, FlatList, ActivityIndicator, Pressable } from 'react-native'
import { getLatestGames } from '../lib/metacritic'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AnimatedGameCard } from './GameCard'

import { Screen } from './Screen'

export default function Main() {
  const [games, setGames] = useState([])
  const insets = useSafeAreaInsets()

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games)
    })
  }, [])
  return (
    <Screen>
      {/* <View style={{ marginBottom: 20 }}> */}

      {/* <Link href='/about' className='text-blue-400 text-xl'>Go to About</Link> */}

      {games.length === 0 ? (
        <ActivityIndicator color={'cyan'} size={'large'} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />}
        />
      )}
    </Screen>
  )
}
