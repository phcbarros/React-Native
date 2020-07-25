import { Animated } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(Animated.View)`
  height: 100px;
  margin-top: 20px;
`

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingLeft: 10,
    paddingRight: 20,
  },
  showsHorizontalScrollIndicator: false,
})`
  /* style - espaçamentos externos */
`

export const TabItem = styled.View({
  width: 100,
  height: 100,
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  borderRadius: 3,
  marginLeft: 10,
  padding: 10,
  justifyContent: 'space-between',
})
export const TabText = styled.Text({
  fontSize: 13,
  color: '#fff',
})
