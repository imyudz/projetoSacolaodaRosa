//Tela de Cestas (As telas são feitas separadas do APP, para serem importados os elementos assim como uma biblioteca)
import React from "react"; //Importa o react, biblioteca básica para dar suporte à todo o aplicativo
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";//Importa os componentes do React Native

import topo from '../../assets/topo.png'
import icone from '../../assets/icon.png'

const width = Dimensions.get('screen').width;

export default function Cesta () { //função com export para ser exportada para o app e default porque agora ela é a única nesse arquivo
    return <>
        <Image source={topo} style={estilos.topo}/>
        <Text style={estilos.titulo}>Detalhes da Cesta</Text>
        <View style={estilos.cesta}>
            <Text style={estilos.nome}>Cesta de Frutas</Text>
            <View style={estilos.sacolao}>
                <Image source={icone} style={estilos.icone}/>
                <Text style={estilos.nomeSacolao}>Sacolão da Rosa</Text>
            </View>
            <Text style={estilos.descricao}>Uma cesta com produtos cuidadosamente selecionados da horta para sua cozinha</Text>
            <Text style={estilos.preco}>R$40,00</Text>
        </View>

    </>
}

const estilos = StyleSheet.create({
    topo:{
        width: "100%",
        height: 578 / 768 * width
    },
    titulo:{
        position: "absolute",
        textAlign: "center",
        width: "100%",
        fontSize: 18,
        color: "purple",
        fontWeight: "bold",
        padding: 16, 
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        
        fontWeight: "bold",
    },
    sacolao:{
        flexDirection: "row",
        paddingVertical: 12,
        alignItems: "center",
    },
    nomeSacolao:{
        fontSize: 16,
        lineHeight: 30,
        marginLeft: 12,

    },
    descricao:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 29,
    },
    preco:{
        color: "#2A9F85",
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 60,
        marginTop: 8,
    },
    icone:{
        width:40,
        height:40,
    },
})