import { Alert, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef ,useState } from 'react'
import Sound from 'react-native-sound'


const Game2 = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [score, setScore] = useState(0)
    const [time, setTime] = useState(10); 
    const [running, setRunning] = useState(false); 
    const [isReadyClicked, setIsReadyClicked] = useState(false); // State to track if the Ready button is clicked
    const intervalRef = useRef(null); 
    const startTimeRef = useRef(null); 
    
    useEffect(() => {
        if (time === 0) {
            setModalVisible(true);
            clearInterval(intervalRef.current);
            setRunning(false);
        }
    }, [time]);


    // Function to start the stopwatch 
    const Ready = () => { 
        startTimeRef.current = Date.now(); 
        intervalRef.current = setInterval(() => { 
            const elapsedTime = Date.now() - startTimeRef.current;
            setTime(Math.max(0, time - Math.floor(elapsedTime / 1000))); // Subtract elapsed time from initial time
        }, 1000); 
        setRunning(true);
        setIsReadyClicked(true); // Set the Ready button to be clicked
    }; 


    const Pla = () => {
        if (running) {
            setScore(score + 1)
            var whoosh = new Sound('whoosh.mp3', Sound.MAIN_BUNDLE,
                (error) => {
                    whoosh.play((success) => {
                        if (success) {
                            console.log('successfully finished playing');
                            whoosh.release();
                        } else {
                            console.log('playback failed due to audio decoding errors');
                        }
                    });
                });
        } else {
            null
        }
    }

    const handleGameOver = () => {
        navigation.navigate('Home'); // Navigate to the home screen
    }

    return (
        <View style={styles.View1}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Game Over!</Text>
                        <Text style={styles.modalText}>Congratulations ! You are Winner and Won 20 Coins</Text>
                        <Text style={styles.modalText}>Your Score: {score}</Text>
                        <TouchableOpacity
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={handleGameOver} // Call handleGameOver when closing modal
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Text style={styles.txt1}>Double Paisa</Text>
            <Text style={{color:"silver"}}>Note:-Press Ready Button & then Press Bell Your Score Will Increase & You Will Be Winner </Text>
            <View style={styles.View2}>
                <Text style={styles.Viewtxt2}>Score : {score}</Text>
                <Text style={styles.Viewtxt2}>Time : {"00 :"+time}</Text>
            </View>
            <TouchableOpacity style={styles.Btn1} onPress={Pla}>
                <Image source={require("../images/bell2.png")} style={styles.img1} />
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.Btn2, {opacity: isReadyClicked ? 0.5 : 1}]} // Disable button if Ready is clicked
                onPress={isReadyClicked ? null : Ready}> 
                <Text style={styles.Btntxt2}>Ready</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default Game2

const styles = StyleSheet.create({

    View1: {
        flex: 1,
        backgroundColor: "black"
    },
    View2: {
        flexDirection: "row",
        margin: "1%"
    },
    txt1: {
        color: "white",
        fontFamily: "cursive",
        marginTop: "2%",
        alignSelf: "center",
        fontSize: 40,
        fontWeight: "900"
    },
    img1: {
        marginTop: "50%",
        width: 350,
        height: 350,
        alignSelf: "center"
    },
    Btn1: {
        width: "50%",
        height: "10%",
        alignSelf: "center",
        borderRadius: 20,
        margin: "10%"
    },
    Viewtxt2: {
        color: "white",
        margin: "5%",
        fontSize: 30,
    },
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: "100%",
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    Btn2: {
        width: "50%",
        height: "5%",
        backgroundColor:"red",
        alignSelf: "center",
        borderRadius: 20,
        margin: "10%",
        marginTop:"90%"
    },
    Btntxt2:{
        color:"white",
        fontSize:30,
        fontWeight:"900",
        textAlign:"center"
    }
})























