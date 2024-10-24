import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  icon: {
    width: 150,  // Aumentado de 100 para 150
    height: 150, // Aumentado de 100 para 150
    marginBottom: 20,
    resizeMode: 'contain',  // Garante que a imagem não será cortada
  },
  input: {
    width: 312, 
    height: 47, 
    backgroundColor: '#F3F3F3',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    fontFamily: 'Arial',
    color: '#000',
    marginVertical: 7, 
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    marginVertical: 5, 
  },
  checkbox: {
    marginRight: 10,
  },
  label: {
    color: '#000',
    fontFamily: 'Arial',
  },
  defaultButton: {
    width: 150, 
    height: 45, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginVertical: 5, 
  },
  createButton: {
    backgroundColor: '#62A4B0',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#62A4B0',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Arial',
  },
});

export default styles;
