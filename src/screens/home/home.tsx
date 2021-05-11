import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import styles from './home.style';
import { Input, Item, Button, Grid, Col } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

export const HomeScreen: React.FC = ({ navigation }: any ) => {

    const [loading, setLoading] = useState<boolean>(true);

    const loadFont = async () => {
        await Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        setLoading(false)
    }

    React.useEffect(() => {
        loadFont();
    }, []);

    const showToast = (text: string) => {
        Alert.alert('Message', text);
    }
    
    return (   
        loading ? 
        <ActivityIndicator color={"#333"} />
        :        
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../assets/images/google-logo.png')}/>        
                <Item rounded style={styles.input}>
                    <Input placeholder='Search...'/>
                </Item>
                <View style={styles.w100}>
                    <Grid style={styles.grid}>
                    <Col style={styles.colL}>
                        <Button light small><Text> Recherche google </Text></Button>
                    </Col>
                    <Col style={styles.colR}>
                        <Button light small><Text> J'ai de la chance </Text></Button>
                    </Col>
                    </Grid>    
                </View> 
                <View style={styles.dispo}>
                    <Text>Google disponible en : English Malagasy</Text> 
                </View> 

                <View style={styles.footer}>
                    <View style={styles.footerTop}>
                        <Text>Madagascar</Text> 
                    </View>
                    <View style={styles.footerBottom}>
                        <TouchableOpacity activeOpacity={0.5} style={styles.txtFooter} onPress={() => navigation.push('AProposScreen')}>                             
                            <Text>A propos </Text> 
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={styles.txtFooter} onPress={() => showToast('Publicité')}>                              
                            <Text> Publicité </Text> 
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={styles.txtFooter} onPress={() => showToast('Entreprise')}>                              
                            <Text> Entreprise </Text> 
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={styles.txtFooter} onPress={() => showToast('Comment fonctionne la recherche Google ?')}>                             
                            <Text> Comment fonctionne la recherche Google ?  </Text> 
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={styles.txtFooter} onPress={() => showToast('Confidentialité')}>                              
                            <Text> Confidentialité </Text> 
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={styles.txtFooter} onPress={() => showToast('Conditions')}>                              
                            <Text> Conditions </Text> 
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={styles.txtFooter} onPress={() => showToast('Paramètres')}>                              
                            <Text> Paramètres </Text> 
                        </TouchableOpacity>
                    </View>
                </View>
            </View>            
        </SafeAreaView>        
    );
}
