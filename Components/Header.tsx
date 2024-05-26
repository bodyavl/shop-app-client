import { StyleSheet, View } from 'react-native'
import React from 'react'
import Icon from '../assets/headerIcon.svg'

const Header = () => {
  return (
    <View style={styles.container}>
      <Icon/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 40,
        alignItems: 'center',
        width: 'auto'
    },
    icon: {
        width: 40,
    }
})