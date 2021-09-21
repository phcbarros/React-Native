import React, {useEffect} from 'react'
import {SafeAreaView, View, StyleSheet, StatusBar} from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated'

export default function App() {
  const titlePosition = useSharedValue(100)

  useEffect(() => {
    titlePosition.value = withTiming(0, {
      duration: 2000,
      easing: Easing.bounce,
    })
  }, [titlePosition])

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: titlePosition.value}],
      opacity: interpolate(
        titlePosition.value,
        [80, 0], // percurso da animação de 80 até 0
        [0, 1], // valor da opacidade no inicio e final da animação 80 => 0 e 0 => 1
        Extrapolate.CLAMP, // limita o valor da opacidade em no máximo 1
      ),
    }
  })

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#13131A" />
      <View style={styles.container}>
        <Animated.Text style={[styles.title, titleStyle]}>
          Fala dev
        </Animated.Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#13131A',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#13131A',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#fff',
  },
})
