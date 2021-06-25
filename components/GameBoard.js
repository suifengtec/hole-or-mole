import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ImageBackground } from 'react-native'
import Square from './Square'
import { connect } from 'react-redux'

const GameBoard = ( props ) => {

    let time = 60

    /*倒计时 */
    const [timeLeft, setTimeLeft] = useState( time )
    useEffect( () => {
        if ( !timeLeft ) {
            return
        }
        const timerID = setInterval( () => {
            setTimeLeft( timeLeft - 1 )
        }, 1000 )
        return () => clearInterval( timerID )
    }, [timeLeft] )

    //(Hole or Mole)
    return (
        <ImageBackground
            style={styles.container}
            source={require( '../assets/background.png' )}
        >
            <View style={styles.container}>
                <Text style={styles.header}>打地鼠</Text>
                <Text>还剩{timeLeft}秒</Text>
                <Text>得分:{props.score}</Text>
                <View style={styles.game}>
                    <Square ></Square>
                    <Square ></Square>
                    <Square ></Square>
                    <Square ></Square>
                    <Square ></Square>
                    <Square ></Square>
                    <Square ></Square>
                    <Square ></Square>
                    <Square ></Square>
                    <Square ></Square>
                    <Square ></Square>
                    <Square ></Square>
                </View>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
    },
    game: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 300,
        paddingTop: 20,
    },
    header: {
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 100
    }
} );

const mapStateToProps = state => {
    return {
        score: state.score
    }
}


export default connect( mapStateToProps )( GameBoard )
