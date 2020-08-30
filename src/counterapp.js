import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'


function mapStateToProps(state){
    return{
        counter:state.counter
    }
}

function mapDispatchToProps(dispatch){
    return{
        increasecounter: ()=> dispatch ({type:'INCREASE_COUNTER'}),
        decreasecounter: ()=> dispatch ({type:'DECREASE_COUNTER'})
    }
}

class CounterApp extends React.Component {

    render(){

        return (
            <View style={styles.container}>

                
                <TouchableOpacity style={styles.btn}  onPress={()=>this.props.increasecounter()}>
                <Text style={{fontSize:20, color:'white' }}>Increase</Text>
                </TouchableOpacity>
                
                <Text style={{fontSize:40}}>{this.props.counter}</Text>
                
                <TouchableOpacity style={styles.btn} onPress={()=>this.props.decreasecounter()}>
                <Text style={{fontSize:20, color:'white' }}>Decrease</Text>
                </TouchableOpacity>
            

            </View>
        );

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterApp)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems:'center'
  },
  btn: {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },


});
