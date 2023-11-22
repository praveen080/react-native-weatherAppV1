// LoadingOverlay.js
import React from "react";
import { Modal, ActivityIndicator, StyleSheet, View } from "react-native";

const Loading = ({ visible }) => {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

export default Loading;
