import React, {ReactNode, useEffect} from 'react'
import {View, Modal, ModalProps, TouchableWithoutFeedback} from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import {styles} from './styles'

type Props = ModalProps & {
  children: ReactNode
  closeModal: () => void
}

export function ModalView({children, closeModal, ...rest}: Props) {
  const containerPosition = useSharedValue(300)

  useEffect(() => {
    if (rest.visible) {
      containerPosition.value = withTiming(0, {
        duration: 300,
      })
    }
  }, [rest.visible, containerPosition])

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: containerPosition.value}],
    }
  })

  function onCloseModal() {
    containerPosition.value = withTiming(300, {
      duration: 300,
      easing: Easing.linear,
    })
    setTimeout(() => {
      closeModal()
    }, 300)
  }

  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      onDismiss={() => {
        containerPosition.value = withTiming(300, {
          duration: 500,
          easing: Easing.linear,
        })
      }}
      {...rest}>
      <TouchableWithoutFeedback onPress={onCloseModal}>
        <View style={styles.overlay}>
          <View style={[styles.container]}>
            <Animated.View style={[containerStyle]}>{children}</Animated.View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
