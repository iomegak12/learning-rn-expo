import { Card, DefaultTheme } from "react-native-paper";
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: DefaultTheme.colors.background,
        alignItems: "center",
        paddingTop: 10
    },
    card: {
        width: '90%'
    }
});

const NameScreen = ({ route }) => {
    const { name } = route.params;

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Title title={`Hello, ${name}`} />
            </Card>
        </View>
    )
};

export {
    NameScreen
};