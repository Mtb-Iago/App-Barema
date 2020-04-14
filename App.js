import React, { Component } from 'react';
import { Text,
   View,
   TextInput,
   Button,
   Alert,
  
    } from 'react-native';
import * as Animatable from 'react-native-animatable';

import styles from './styles';

export default class calculus extends Component {
  constructor(props) {
    super(props);
    this.state = { value1: 0, value2: 0, value3: 0 }
  }
  
  //algoritimo do calculo, mais mostrar na tela.
  finalValue = () => {    //
    let N1 = parseFloat(this.state.value1);
    let N2 = parseFloat(this.state.value2);
    let N3 = parseFloat(this.state.value3);

    let Resultado = (N1 + N2 + N3) / 3;


    let ResultadoProvaFinal = 15 - Resultado * 2;

    if (Resultado >= 7) {
      alert('Parabéns você foi aprovado..');

    } else

      if (ResultadoProvaFinal <= 10) {

        Alert.alert(`e sua nota na prova final deve ser >= ${ResultadoProvaFinal.toFixed(1)}`)
        Alert.alert('Infelizmente você vai precisar fazer prova final..');

      }
      else if (ResultadoProvaFinal > 10) {
        Alert.alert('Nota insuficiente para fazer prova final..:');
      }
      Alert.alert(`Sua média foi de..: ${Resultado.toFixed(1)}`);
          
  }
  render() {

    return (
      <View style={styles.container}>
        


        <Animatable.Text style={{
          fontSize: 25,
          marginLeft: "auto",
          marginRight: 'auto',
          marginBottom: -50,
          fontWeight: 'bold'
        }} animation="slideInDown"
          iterationCount={5}
          direction="alternate">Calcule suas notas!
            </Animatable.Text>

        <View style={{ margin: 50 }}>

          <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center', fontSize: 50 }}>❤️</Animatable.Text>

          <Animatable.View animation="bounceInRight">

            <TextInput style={{ borderWidth: 1, margin: 10 }}
              placeholder="Nota1"
              keyboardType={'numeric'}
              onChangeText={value1 => this.setState({ value1 })} />
          </Animatable.View>

          <Animatable.View animation="bounceInLeft">
            <TextInput style={{ borderWidth: 1, margin: 10 }}
              placeholder="Nota2"
              keyboardType={'numeric'}
              onChangeText={value2 => this.setState({ value2 })} />
          </Animatable.View>

          <Animatable.View animation="bounceInUp">
            <TextInput style={{ borderWidth: 1, margin: 10 }}
              placeholder="Nota3"
              keyboardType={'numeric'}
              onChangeText={value3 => this.setState({ value3 })} />
          </Animatable.View>

          <Animatable.View animation="pulse" easing="ease-out-expo" iterationCount="infinite" direction="normal">
            <Button title="Resultado " onPress={this.finalValue} >
              
            </Button>
          </Animatable.View>

        </View>
        

      </View>
    )
  }
}