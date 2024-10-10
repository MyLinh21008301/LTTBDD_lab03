import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';



export default function App({ navigation }) {
    const options = ['Male', 'Famale'];
    const [gender, setGender] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>REGISTER </Text>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.txtIput}
                    placeholder='Name'
                    placeholderTextColor="#383838"
                />

            </View>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.txtIput}
                    placeholder='Phone'
                    placeholderTextColor="#383838"
                />

            </View>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.txtIput}
                    placeholder='Email'
                    placeholderTextColor="#383838"
                />

            </View>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.txtIput}
                    placeholder='Password'
                    placeholderTextColor="#383838"
                    secureTextEntry

                />

                <Image source={require('../assets/img/eye.png')} style={styles.icon} />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.txtIput}
                    placeholder='Birthday'
                    placeholderTextColor="#383838"
                />

            </View>
            <View style={styles.radioBox}>
                {options.map(option => (

                    <View style={styles.radio}>
                        <Text style={styles.option}>{option}</Text>
                        <TouchableOpacity 
                        onPress={()=> setGender(option)}
                        style={styles.outter}>
                            {gender === option && <View style={styles.inner} />}
                        </TouchableOpacity>
                    </View>

                ))}
            </View>


            <View style={styles.btnBox}>
                <TouchableOpacity style={styles.btn}
                    onPress={() => { navigation.navigate("Screen2") }}
                >
                    <Text style={styles.btnText}>REGISTER</Text>
                </TouchableOpacity>

            </View>

            <Text style={styles.txtInfo}>When you agree to terms and conditions</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCEEDF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20

    },
    inputBox: {
        flexDirection: 'row',
        backgroundColor: "#CDDFD1",
        width: "87%",
        padding: 20,
        height: 60,
        marginTop: 20,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 7

    },
    icon: {
        width: 30,
        height: 30
    },
    outter: {
        width: 25,
        height: 25,
        borderWidth: 2,
        borderColor: "#383838",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        // marginRight: 50,
        // marginLeft: 20,
       
    },
    inner: {
        width: 17,
        height: 17,
        backgroundColor: "#383838",
        borderRadius: 20,
        
    },
    radioBox: {
        flexDirection: "row",
        alignItems:"center",
        marginTop: 10,
       width: '70%',
       height: 50,
       justifyContent: "space-around"
        
    },
    radio: {
        flexDirection: "row",
        alignItems:"center",
        marginTop: 10,
        width: "40%",
        justifyContent: "space-around"
        
    },
    option:{
        fontSize:16,
        fontWeight: '500'
    },
    btnBox: {
        backgroundColor: "#B65542",
        width: "90%",
        height: 50,
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "500"
    },
    txtInfo: {
        marginTop: 25
    },
});
