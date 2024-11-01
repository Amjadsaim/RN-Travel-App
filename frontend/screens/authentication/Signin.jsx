import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../../theme/theme';
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ReusableButton } from '../../components';


const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, "Password must be atleast 8 characters")
        .required("Required"),
    email: Yup.string()
        .email("Provide a valid email")
        .required("Required"),
})

const Signin = ({navigation}) => {
    const [loader, setLoader] = useState(false);
    const [responseData, setResponseData] = useState(null);
    const [obsecureText, setObsecureText] = useState(false);

    return (
        <View style={styles.SignINContainer}>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(value) => { console.log(value) }}
            >
                {({
                    handleChange, touched, handleSubmit, values, errors, isValid, setFieldTouched
                }) => (
                    <View>
                        <View style={styles.wrapper}>
                            <Text style={styles.labelContainer}>Email</Text>
                            <View>
                                <View style={[styles.inputContainer, { borderColor: `${touched.email ? COLORS.lightBlue : COLORS.lightGray}` }]}>
                                    <MaterialCommunityIcons name='email-outline' size={20} color={COLORS.gray}/>
                                    <View style={{width: 20}}/>
                                    <TextInput onChangeText={handleChange("email")} placeholder='Enter your email' onFocus={()=> {setFieldTouched("email")}} onBlur={() => {setFieldTouched("email", "")}} value={values.email} autoCapitalize='none' autoCorrect={false} style={{flex:1}}/>
                                </View>
                                {touched.email && errors.email && (
                                    <Text style={styles.errorMessage}>{errors.email}</Text>
                                )}
                            </View>
                        </View>

                        <View style={styles.wrapper}>
                            <Text style={styles.labelContainer}>Password</Text>
                            <View>
                                <View style={[styles.inputContainer, { borderColor: `${touched.password ? COLORS.lightBlue : COLORS.lightGray}` }]}>
                                    <MaterialCommunityIcons name='lock-outline' size={20} color={COLORS.gray}/>
                                    <View style={{width: 20}}/>
                                    <TextInput secureTextEntry={obsecureText} onChangeText={handleChange("password")} placeholder='Enter your password' onFocus={()=> {setFieldTouched("password")}} onBlur={() => {setFieldTouched("password", "")}} value={values.password} autoCapitalize='none' autoCorrect={false} style={{flex:1}}/>
                                    <TouchableOpacity onPress={() => {setObsecureText(!obsecureText)}}>
                                        <MaterialCommunityIcons name={obsecureText ? "eye-outline" : "eye-off-outline"} size={18}/>
                                    </TouchableOpacity>
                                </View>
                                {touched.password && errors.password && (
                                    <Text style={styles.errorMessage}>{errors.password}</Text>
                                )}
                            </View>
                        </View>

                        <View style={{height: 20}}/>

                        <ReusableButton onPress={()=> {handleSubmit}} title={"SIGN IN"} width={SIZES.width - 40} bgColor={COLORS.green} borderColor={COLORS.green} borderWidth={0} textColor={COLORS.white}/>
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default Signin

const styles = StyleSheet.create({
    SignINContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.lightWhite,
        paddingTop: 60
    },
    wrapper:{
        marginBottom: 20
    },
    labelContainer:{
        fontWeight: "400",
        fontSize: SIZES.small,
        marginBottom: 5,
        marginEnd: 5,
        textAlign: "right"
    },
    inputContainer: {
        backgroundColor: COLORS.lightWhite,
        borderWidth: 1,
        height: 50,
        borderRadius: 12,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: "center"
    },
    errorMessage:{
        color: COLORS.red,
        fontSize: SIZES.small,
        fontWeight: "300",
        marginTop: 5,
        marginLeft: 5,
    }
})