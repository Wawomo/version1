import React from 'react';
import {
  View,
  Text,
  // Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function Login() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>SIGN IN TO YOUR ACCOUNT</Text>
          <Text style={styles.subtitle}> Please enter in your details</Text>
        </View>
      </View>
      <View style={styles.form}>
        <View style={styles.input}>
          <Text style={styles.inputlabel}>Email address</Text>
          <TextInput
            style={styles.inputs}
            autoCapitalize="none"
            keyboardType="email-address"
            autoCorrect={false}
            placeholder="name@example.com"
            placeholderTextColor="#6b7280"
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputlabel}>Password</Text>
          <TextInput
            secureTextEntry
            style={styles.inputs}
            placeholder="password"
            placeholderTextColor="#6b7280"
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          // handle
          Alert.alert('Successfully logged in');
        }}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Sign In</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginTop: 'auto'}}
        onPress={() => {
          // handle
        }}>
        <Text style={styles.formfooter}>Don't Have an account? </Text>
        <Text style={{textDecorationLine: 'underline'}}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  header: {marginVertical: 36},
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#lelele',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  inputlabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 0,
  },
  inputs: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#200',
  },
  form: {
    marginBottom: 24,
    flex: 1,
  },
  formAction: {
    marginVertical: 24,
  },
  formfooter: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    color: '#222',
    letterSpacing: 0.15,
  },
  btn: {
    backgroundColor: '075eec',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#75eec',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});
