import {StyleSheet, Text, View} from 'react-native';

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
