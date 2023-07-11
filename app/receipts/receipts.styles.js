import { StyleSheet } from "react-native";

import { COLORS, SIZES} from "../../constants"

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 5,
        marginTop: 10,
    },
    button: {
        flex: 1,
        marginHorizontal: 2.5,
        backgroundColor: COLORS.lgrey,
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonLeft: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    buttonRight: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    buttonText: {
        color: COLORS.white,
    }
})

export default styles