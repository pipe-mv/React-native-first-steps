// import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'

import { View, FlatList, ActivityIndicator, Pressable } from 'react-native'
import { getLatestGames } from '../lib/metacritic'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AnimatedGameCard } from './GameCard'
import { Logo } from './Logo'
import { Link } from 'expo-router'

import { CircleInfoIcon } from './icons'


export default function Main() {
  const [games, setGames] = useState([])
  const insets = useSafeAreaInsets()

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games)
    })
  }, [])
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {/* <View style={{ marginBottom: 20 }}> */}
      <Logo style={{ marginBottom: 20 }} />
      {/* </View> */}
      <Link asChild href="/about">
        <Pressable>
        <CircleInfoIcon/>
        </Pressable>
      </Link>
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
    </View>
  )
}
