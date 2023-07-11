import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    sidebarContainer: {
        backgroundColor: COLORS.dgrey,
        width: 100,
        position: "absolute",
        zIndex: 2,
    },
    sidebarText: {
        color: COLORS.white,
        padding: SIZES.medium,
    },
    mainContainer: {
        backgroundColor: COLORS.black,
        height: "100%",
    }
})

export default styles;