import { Link } from 'expo-router'
import { Pressable, ScrollView, Text } from 'react-native'

import { HomeIcon } from '../components/icons'

export default function About() {
  return (
    <ScrollView className="pt-24">
      <Link asChild href="/">
        <Pressable>
          {/* <Text className="text-blue-400 text-xl mt-20">Go to Home</Text> */}
          {({ pressed }) => <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />}
        </Pressable>
      </Link>

      <Text className="text-white font-bold mb-8 text-2xl">About the Project</Text>
      <Text className="text-white text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos corrupti aliquam quaerat
        quibusdam nisi tenetur dolore, rerum accusamus totam aliquid tempore? Fuga repellendus
        repudiandae dicta qui voluptatum sed possimus harum?
      </Text>

      <Text className="text-white text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos corrupti aliquam quaerat
        quibusdam nisi tenetur dolore, rerum accusamus totam aliquid tempore? Fuga repellendus
        repudiandae dicta qui voluptatum sed possimus harum?
      </Text>

      <Text className="text-white text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos corrupti aliquam quaerat
        quibusdam nisi tenetur dolore, rerum accusamus totam aliquid tempore? Fuga repellendus
        repudiandae dicta qui voluptatum sed possimus harum?
      </Text>

      <Text className="text-white text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos corrupti aliquam quaerat
        quibusdam nisi tenetur dolore, rerum accusamus totam aliquid tempore? Fuga repellendus
        repudiandae dicta qui voluptatum sed possimus harum?
      </Text>

      <Text className="text-white text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos corrupti aliquam quaerat
        quibusdam nisi tenetur dolore, rerum accusamus totam aliquid tempore? Fuga repellendus
        repudiandae dicta qui voluptatum sed possimus harum?
      </Text>

      <Text className="text-white text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos corrupti aliquam quaerat
        quibusdam nisi tenetur dolore, rerum accusamus totam aliquid tempore? Fuga repellendus
        repudiandae dicta qui voluptatum sed possimus harum?
      </Text>

      <Text className="text-white text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos corrupti aliquam quaerat
        quibusdam nisi tenetur dolore, rerum accusamus totam aliquid tempore? Fuga repellendus
        repudiandae dicta qui voluptatum sed possimus harum?
      </Text>

      <Text className="text-white text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos corrupti aliquam quaerat
        quibusdam nisi tenetur dolore, rerum accusamus totam aliquid tempore? Fuga repellendus
        repudiandae dicta qui voluptatum sed possimus harum?
      </Text>

      <Text className="text-white text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos corrupti aliquam quaerat
        quibusdam nisi tenetur dolore, rerum accusamus totam aliquid tempore? Fuga repellendus
        repudiandae dicta qui voluptatum sed possimus harum?
      </Text>
    </ScrollView>
  )
}
