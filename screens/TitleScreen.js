import { View, StyleSheet } from 'react-native';
import { Card, DefaultTheme } from "react-native-paper";

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

const TitleScreen = () => {
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Title title="This is Title Screen" />
            </Card>
        </View>
    )
};

export {
    TitleScreen
};