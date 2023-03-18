import React, { useState } from 'react'
import { Text, View, SafeAreaView, FlatList } from 'react-native'
import { FocusedStatusBar, HomeHeader, NFTCard } from '../components/index'

import { COLORS, NFTData } from '../constants';

function Home() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.secondary} />

            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList data={NFTData} renderItem={({ item }) => <Text>{item.name}</Text>} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false} ListHeaderComponent={<HomeHeader />} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home