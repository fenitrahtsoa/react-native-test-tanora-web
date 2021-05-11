import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    w100: {
        width: '100%',
        height: 60,
    },
    logo: {
        width: 150,
        height: 50,
        marginBottom: 15,
    },
    input: {
        width: '80%',
    },
    grid: {
        width: '100%',
        marginTop: 10,
        height: 50,
        alignItems: 'center',
        flex: 1,
    },
    colL: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        marginRight: 5,
        
    },
    colR: {
        marginLeft: 5,
    },
    dispo: {
        height: 30,
    },
    footer: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        height: 'auto',
    },
    footerTop: {
        height: 32,
        borderBottomColor: '#dadce0',
        borderBottomWidth: 1,
        justifyContent: 'center',
        marginLeft: 10,
    },
    footerBottom: {
        minHeight: 32,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 5,
        width: '90%',
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
    },
    txtFooter: {
        flexDirection: 'column',
        flexWrap:'wrap',
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 5,
    }
});

export default styles;