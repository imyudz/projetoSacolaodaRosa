import React from 'react'; //Importa react para o app
import { StatusBar, View } from 'react-native'; // importa os elementos necessários para o react native
import Cesta from './src/screen/Cesta';//Importa o arquivo com as funções que você criou

export default function App() { //Função que roda tudo dentro do App
  return (
    //View: Função que mostra os arquivos
    <View>
      {/* Todas as Funções criadas viram  tags e podem ser facilmente adicionadas e estilizaadas*/}
      <Cesta/>
      <StatusBar/>
    </View>
  );
}