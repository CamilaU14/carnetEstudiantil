import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Carnet() {
  const [mostrarAnverso, setMostrarAnverso] = useState(true);

  const girarCarnet = () => {
    setMostrarAnverso(!mostrarAnverso);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {mostrarAnverso ? (
          <>
            <View style={styles.datos}>
              <Image source={require('../assets/foto.png')} style={styles.foto} />
              <View style={styles.info}>
                <Text style={styles.nombre}>Maria Camila Usma Ocampo</Text>
                <Text style={styles.texto}>Matrícula: 202428087</Text>
                <Text style={styles.texto}>Carrera: Ingeniería de Software</Text>
              </View>
            </View>

            <View style={styles.linea} />

            <Image source={require('../assets/qr.png')} style={styles.qr} />
          </>
        ) : (
          <View style={styles.reverso}>
            <Text style={styles.texto}>Válido hasta: 31/12/2025</Text>
            <Text style={styles.texto}>Este carnet es personal e intransferible.</Text>
          </View>
        )}
      </View>

      <TouchableOpacity onPress={girarCarnet} style={styles.boton}>
        <Text style={styles.botonTexto}>Girar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  datos: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  foto: {
    width: 80,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  texto: {
    fontSize: 14,
    marginBottom: 4,
  },
  linea: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 12,
  },
  qr: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  reverso: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  boton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 16,
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
