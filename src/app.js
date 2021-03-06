import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View , Text } from 'react-native';
import { createStore } from 'redux';
import reducers from './reducers';

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
		<View>
		    <Text>Clone me!</Text>
        </View>
        </Provider>
	);
};

export default App;