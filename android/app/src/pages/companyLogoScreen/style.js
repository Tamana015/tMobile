import { StyleSheet } from 'react-native';
import { color } from '../../utils/color';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.magenta,
    height:'100%'
  },
  square: {
   width: 25,
   height: 25,
    position: 'absolute',
  },
  dot: {
    backgroundColor: 'white',
    justifyContent:'center'
  },
  letterT: {
    justifyContent: 'center',
    alignItems: 'center',
    width:200,
    height:300,

  },
  text: {
    color: 'white',
    textAlign: 'center',
    borderCurve: 3,
    fontSize:150,
  },
  companyName: {
    color: color.blackMagenta,
    margin: 5,
    alignSelf: 'center',
    fontFamily: 'Lato-Bold',
    fontWeight: 'bold',
    fontSize: 12,
  },
  divider: {
    borderBottomWidth:1,
    width:'60%',
    borderColor: color.darkMagenta,
    marginTop:150
  }
});

export default styles;
