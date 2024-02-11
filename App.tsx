import React from 'react'
import TabMain from './src/navigations/tab'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (<>
    <NavigationContainer>
      <TabMain />
    </NavigationContainer>
  </>
  )
}

export default App