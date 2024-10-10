import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function App({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>LOGIN </Text>
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
            <View style={styles.btnBox}>
                <TouchableOpacity style={styles.btn}
                onPress={()=>{navigation.navigate("Screen3")}}
                >
                    <Text style={styles.btnText}>LOGIN</Text>
                </TouchableOpacity>

            </View>
            <Text style={styles.txtInfo}>When you agree to terms and conditions</Text>
            <TouchableOpacity>
                <Text style={styles.txtPW}>For got your passsword?</Text>
            </TouchableOpacity>
            <Text style={styles.txtInfo}>Or login with</Text>
            <View style={styles.contact}>
                <View style={styles.fb}>
                    <Image source={require("../assets/img/iconFb.png")}/>
                </View>
                <View style={styles.zl}>
                    <Image source={require("../assets/img/icozalo.png")}/>
                </View>
                <View style={styles.gg}>
                    <Image source={require("../assets/img/iconGG.png")}/>
                </View>
            </View>
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
        marginBottom: 50

    },
    inputBox: {
        flexDirection: 'row',
        backgroundColor: "#CDDFD1",
        width: "87%",
        padding: 20,
        height: 60,
        marginTop: 30,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 7

    },
    icon: {
        width: 30,
        height: 30
    },
    btnBox: {
        backgroundColor: "#B65542",
        width: "90%",
        height: 50,
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 70
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "500"
    },
    txtInfo: {
        marginTop: 25
    },
    txtPW: {
        marginTop: 25,
        color: "#8173EA"
    },
    contact:{
        width: "90%",
        flexDirection: "row",
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    fb:{
        width: "30%",
        height: 50,
        backgroundColor: "#325A89",
        justifyContent: "center",
        alignItems: "center"
    },
    zl:{
        width: "30%",
        height: 50,
        backgroundColor: "#4192C0",
        justifyContent: "center",
        alignItems: "center"
    },
    gg:{
        width: "30%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#4192C0",
        borderWidth: 1
    }
});
