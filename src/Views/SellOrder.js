import React from 'react';
import { useContext } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { WebSocketContext } from '../Contexts/WebSocketContext'
import { Style } from './Style';

export default function SellBook() {
    const { data } = useContext(WebSocketContext)
    const ask = data.asks;

    return ask ? (
        <View style={Style.rowView}>
            <View style={Style.columnView}>
                <Text style={Style.header}>Price</Text>
                <View style={Style.valueColumn}>
                    <FlatList
                        data={ask}
                        renderItem={({ item }) => {
                            for (var i = 0; i < 5; i += 1) {

                                return <Text style={Style.sellPrice}>{Number(item[0]).toFixed(2)}</Text>
                            }
                        }}

                    />
                </View>


            </View>
            <View style={Style.columnView}>
                <Text style={Style.header}>Amount</Text>
                <View style={Style.valueColumn}>
                    <FlatList
                        data={ask}
                        renderItem={({ item }) => {
                            for (var i = 0; i < 5; i += 1) {

                                return <Text style={Style.sellPrice}>{Number(item[1]).toFixed(5)}</Text>
                            }
                        }}

                    />
                </View>
            </View>
            <View style={Style.columnView}>
                <Text style={Style.header}>Total</Text>
                <View style={Style.valueColumn}>
                    <FlatList
                        data={ask}
                        renderItem={({ item }) => {
                            for (var i = 0; i < 5; i += 1) {

                                return <Text style={Style.sellPrice}>{Number(item[0] * item[1]).toFixed(5)}</Text>
                            }
                        }}

                    />

                </View>
            </View>
        </View>
    ) : (
        <View style={Style.container}>
            <ActivityIndicator style={Style.indicatorContainer} size="large" color="" />
        </View>
    )
}