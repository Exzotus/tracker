import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.small,
        marginBottom: SIZES.small / 2,
        alignItems: 'center'
    },  
    btn: {
        backgroundColor: COLORS.lgrey,
        paddingVertical: SIZES.medium,
        paddingHorizontal: SIZES.xLarge,
        borderRadius: SIZES.medium,
        marginLeft: 2
    }
})

export default styles