import React from 'react'
import { View } from 'react-native'

import { MileageTabs } from "../../components/"

const tabs = ["All", "New", "Personal", "Work"];

const mileage = () => {
  return (
    <View>
        <MileageTabs tabs={tabs} />
    </View>
  )
}

export default mileage