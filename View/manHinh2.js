import { Image, StyleSheet, TextInput, View, Text } from "react-native";

const product2 = props =>{
    <View>
        <Image style={styles.productWrapper} source={props.pathImg}/>
        <Text>{props.pName}</Text>
        <Image style={styles.productName} source={props.pName}/>
        <View style={styles.priceWrapper}>
            <Text style={styles.price}>{props.price}</Text>
            <Text style={styles.discount}>-39%</Text>
        </View>
    </View>
};

export default function manHinh2() { 
    return (
        <View>
            <View>

            </View>
            <View>

            </View>
            <View>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    productWrapper:{
        width: "50%",
        padding: 20,
        display: 'flex',
    },
    productImg:{
        width: 155,
        height: 90,
        margin: 5,
    },
    productName:{
        fontWeight: 400,
        fontSize: 12,
        margin: 5,
    },
    rate: {
        width: 150,
        height: 15,
        margin: 5,
    },
    priceWrapper: {
        display: 'flex',
        flexDirection: 'row',
        margin: '5',
    },
    price: {
        fontSize: 12,
        fontWeight: 700,
    },
    discount:{
        color: '#969DAA',
        fontSize: 12,
        fontWeight: 400,
    },
})