import React, {useState} from 'react';
import {View, Button, Text, Modal} from 'react-native';

const ModalScreen = () => {
  const [show, setShow] = useState(false);

  return (
    <View style={{flex: 1, marginTop: 100}}>
      <Text style={{fontSize: 80}}>Home Screen Here !</Text>
      <Button
        title="Show Modal"
        onPress={() => {
          setShow(true);
        }}
      />
      <Modal transparent={true} visible={show}>
        <View
          style={{
            width: 400,
            backgroundColor: '#000000aa',
            // margin: 50,
            padding: 40,
            flex: 1,
          }}>
          <Text
            style={{
              flex: 1,
              fontSize: 50,
              backgroundColor: 'white',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            About Screen Here ! Tell Me About Yourself
          </Text>
          <Button
            title="Close Modal"
            onPress={() => {
              setShow(false);
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;
