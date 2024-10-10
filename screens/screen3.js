import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App({ navigation }) {
    return (
        <View style={styles.container}>

            <Image source={require('../assets/img/lock.png')} style={styles.img} />
            <Text style={styles.title}>FORGET {'\n'} PASSWORD </Text>
            <Text style={styles.text}>Provide your account's email for which you{'\n'} want to reset your passsword </Text>
            <View style={styles.inputBox}>
                <Image source={require('../assets/img/mail.png')} style={styles.icon} />
                <TextInput
                    placeholder='Email'

                />
            </View>
            <TouchableOpacity style={styles.btn}
                onPress={() => { navigation.navigate("Screen4") }}
            >
                <Text style={styles.btnText}>NEXT</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D5F3F5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 150,
        height: 150
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 70
    },
    inputBox: {
        backgroundColor: "#C4C4C4",
        width: "89%",
        height: 50,
        padding: 10,
        marginBottom: 40,
        flexDirection: "row"

    },
    icon: {
        width: 40,
        height: 30
    },
    btn: {
        backgroundColor: "#DEC040",
        padding: 10,
        borderRadius: 10,
        width: "90%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    
    
});
