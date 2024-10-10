import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/Ellipse_8.png')} style={styles.img} />
            <Text style={styles.title}>GROW {'\n'} YOUR BUSINESS </Text>
            <Text style={styles.text}>We will help you to grow your business using{'\n'} online server </Text>
            <View style={styles.btnBox}>
                <TouchableOpacity style={styles.btn}
                onPress={()=>{navigation.navigate("Screen2")}}
                >
                    <Text style={styles.btnText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#58CAF4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img:{
        width: 180,
        height: 180
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 100
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 80,
        marginBottom: 70
    },
    btnBox:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        height: 50,
        marginTop: 60
    },
    btn:{
        backgroundColor: "#DEC040",
        padding: 10, 
        borderRadius: 10,
        width: 130,
        justifyContent: 'center',
        alignItems:'center'
    },
    btnText:{
        fontSize: 20,
        fontWeight: 'bold'
    }
});
