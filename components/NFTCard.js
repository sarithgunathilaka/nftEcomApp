import { useContext } from 'react'
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import { CircleButton, TestButton } from './Button'
import { SubInfo, EthPrice, NFTTitle } from '../components/SubInfo'
import { MiscContext } from '../context/miscContex'

const NFTCard = ({ item }) => {
    const { favorites, setFavorites } = useContext(MiscContext);
    const handleFav = () => {
        if (!favorites.includes(item.id)) {
            setFavorites((favs) => [...favs, item.id]);
        }
    }
    const navigation = useNavigation();
    return (
        <View style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font,
            marginBottom: SIZES.extraLarge,
            margin: SIZES.base,
            ...SHADOWS.dark
        }}>
            <View style={{ width: "100%", height: 250 }}>
                <Image
                    source={item.image}
                    resizeMode='cover'
                    style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font,
                    }}
                />
                <CircleButton imgUrl={assets.heart} right={10} top={10} handlePress={handleFav} />
            </View>
            <SubInfo />
            <View style={{ width: "100%", padding: SIZES.font }} >
                <NFTTitle
                    title={item.name}
                    subTitle={item.creator}
                    titleSize={SIZES.large}
                    subTitleSize={SIZES.small}

                />
                <View style={{
                    marginTop: SIZES.font,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <EthPrice price={item.price} />
                    <TestButton
                        minWidth={120}
                        fontSize={SIZES.font}
                        handlePress={() => navigation.navigate("Details", { item })}
                    />
                </View>
            </View>
        </View>
    )
}

export default NFTCard 