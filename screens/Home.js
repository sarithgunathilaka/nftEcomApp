import React, { useState } from 'react'
import { Text, View, SafeAreaView, FlatList } from 'react-native'
import { FocusedStatusBar, HomeHeader, NFTCard } from '../components/index'

import { COLORS, NFTData } from '../constants';

function Home() {
    const [searchString, setSearchString] = useState('');

    const renderData = () => {
        return searchString === '' ? NFTData : NFTData.filter((nft) => nft.name.toLowerCase().includes(searchString.toLowerCase()));
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.secondary} />

            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={renderData()}
                        renderItem={({ item }) => <NFTCard item={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader onSearch={setSearchString} />}
                    />
                </View>
            </View>

            <View style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                zIndex: -1,
            }}>
                <View style={{ height: 300, backgroundColor: COLORS.primary }}></View>
                <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
            </View>
        </SafeAreaView>
    )
}

export default Home