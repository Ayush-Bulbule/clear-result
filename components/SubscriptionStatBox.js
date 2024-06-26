import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SubscriptionStatBox = ({ logo, title, desc, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} className="p-1 flex-1">
            <View className="w-full flex flex-row items-center p-2 gap-x-1 bg-orange-50 rounded-xl border border-gray-300">
                <View className="p-2  rounded-full bg-red-100 ">
                    {logo}
                </View>

                <View className="flex flex-col">
                    <Text className={"font-semibold text-xl"} style={{
                        fontFamily: "Poppins-SemiBold"
                    }}>{title}</Text>

                    <Text className={"text-[10px] text-gray-700"} style={{
                        fontFamily: "Poppins-Regular"
                    }}>{desc}</Text>

                </View>

            </View>
        </TouchableOpacity>
    )
}

export default SubscriptionStatBox