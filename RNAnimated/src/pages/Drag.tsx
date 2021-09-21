import React from 'react'
import {SafeAreaView, StyleSheet, View} from 'react-native'
import {PanGestureHandler} from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

type context = {
  posX: number
  posY: number
}

export default function Drag() {
  const posX = useSharedValue(0)
  const posY = useSharedValue(0)

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(event, ctx: context) {
      ctx.posX = posX.value
      ctx.posY = posY.value
    },
    onActive(event, ctx: context) {
      posX.value = ctx.posY + event.translationX
      posY.value = ctx.posY + event.translationY
    },
    onEnd() {
      posX.value = withSpring(0)
      posY.value = withSpring(0)
    },
  })

  const positionStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: posX.value}, {translateY: posY.value}],
    }
  })

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View style={[styles.drag, positionStyle]} />
        </PanGestureHandler>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  drag: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
})
