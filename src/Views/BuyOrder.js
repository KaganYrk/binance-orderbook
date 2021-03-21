import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { WebSocketContext } from '../Contexts/WebSocketContext'
import { Style } from './Style';

export default function BuyBook() {
    const { data } = useContext(WebSocketContext);
    const bid = data.bids;





    return bid ? (
        <View style={Style.rowView}>
            <View style={Style.columnView}>
                <Text style={Style.header}>Price</Text>
                <View style={Style.valueColumn}>
                    <FlatList
                        data={bid}
                        renderItem={({ item }) => {
                            for (var i = 0; i < 5; i += 1) {

                                return <Text style={Style.buyPrice}>{Number(item[0]).toFixed(2)}</Text>
                            }
                        }}

                    />
                </View>


            </View>
            <View style={Style.columnView}>
                <Text style={Style.header}>Amount</Text>
                <View style={Style.valueColumn}>
                    <FlatList
                        data={bid}
                        renderItem={({ item }) => {
                            for (var i = 0; i < 5; i += 1) {

                                return <Text style={Style.buyPrice}>{Number(item[1]).toFixed(5)}</Text>
                            }
                        }}

                    />
                </View>
            </View>
            <View style={Style.columnView}>
                <Text style={Style.header}>Total</Text>
                <View style={Style.valueColumn}>
                    <FlatList
                        data={bid}
                        renderItem={({ item }) => {
                            for (var i = 0; i < 5; i += 1) {

                                return <Text style={Style.buyPrice}>{Number(item[0] * item[1]).toFixed(5)}</Text>
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