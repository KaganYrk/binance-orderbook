import React from 'react';
import { useContext } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { WebSocketContext } from '../Contexts/WebSocketContext'
import { Style } from './Style';

export default function SellBook() {
    const { data } = useContext(WebSocketContext)

    const RenderTable = ({ item }) => (
        <View style={Style.columnView}>
            <View style={Style.rowView}>
                <View style={Style.block} >
                    <Text style={Style.buyPrice}>{Number(item[0]).toFixed(2)}</Text>

                </View>
                <View style={Style.block} >
                <Text style={Style.buyPrice}>{Number(item[1]).toFixed(5)}</Text>

                </View>
                <View style={Style.block} >
                <Text style={Style.buyPrice}>{Number(item[0] * item[1]).toFixed(5)}</Text>

                </View>
            </View>
        </View>
    );



    return data !== undefined ? (
        <View style={Style.columnView}>
            <View style={Style.titleRow}>
                <View style={Style.block}>
                    <Text style={Style.header}>Price</Text>
                </View>
                <View style={Style.block}>
                    <Text style={Style.header}>Amount</Text>
                </View>
                <View style={Style.block}>
                    <Text style={Style.header}>Total</Text>
                </View>

            </View>
            <View style={Style.tableRow}>
                <FlatList
                    data={data.bids}
                    renderItem={RenderTable}
                    keyExtractor={item => item[0]}
                />
            </View>
        </View>
    ) : (
        <View style={Style.container}>
            <ActivityIndicator style={Style.indicatorContainer} size="large" color="" />
        </View>
    )
}