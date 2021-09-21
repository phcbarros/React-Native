import React, {useEffect} from 'react'
import {SafeAreaView, View, StyleSheet, StatusBar} from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
  withSequence,
} from 'react-native-reanimated'

import heroImg from '../assets/hero.png'

export default function Login() {
  const titlePosition = useSharedValue(80)
  const imagePosition = useSharedValue(-30)

  useEffect(() => {
    imagePosition.value = withTiming(
      0,
      {
        duration: 500,
      },
      () => {
        titlePosition.value = withSequence(
          withTiming(0, {
            duration: 1000,
            easing: Easing.bounce,
          }),
          withTiming(-320, {
            duration: 1000,
            easing: Easing.linear,
          }),
        )
      },
    )
  }, [titlePosition, imagePosition])

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

  const heroStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: imagePosition.value,
        },
      ],
    }
  })

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#13131A" />

      <View style={styles.container}>
        <Animated.Image source={heroImg} style={[styles.hero, heroStyle]} />

        <Animated.Text style={[styles.title, titleStyle]}>
          Bem-vindo ao App
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
  hero: {
    width: 288,
    height: 200,
    marginBottom: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#fff',
  },
})
