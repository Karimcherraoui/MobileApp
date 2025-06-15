import { useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";



export default function AuthScreen() {

    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);


    const handleSwitchMode = () => {
        setIsSignup(!isSignup);
    };
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    return (
        <KeyboardAvoidingView   behavior={Platform.OS === "ios" ? "padding" : "height"}  className="flex-1 p-6 justify-center">
            <View  className="flex-1 justify-center" >

                <Text style={{ fontSize: 24, marginBottom: 20 ,textAlign:"center"}}  >
                    {isSignup ?"Create Account": "Welcom Back"}    </Text>
                    <View className=" justify-center">
                <TextInput
                    style={{ marginBottom: 10 }}
                    mode="outlined"
                    label="Email"
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="email"

                />
                <TextInput
                    mode="outlined"
                    label="Password"
                    placeholder="Enter your password"
                    secureTextEntry={showPassword}
                    autoCapitalize="none"
                    autoComplete="password"
                    right={showPassword ? <TextInput.Icon icon="eye" onPress={handleShowPassword} /> : <TextInput.Icon icon="eye-off" onPress={handleShowPassword} />}

                />
                {isSignup && (
                    <TextInput
                        
                        mode="outlined"
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        secureTextEntry={showConfirmPassword}
                        autoCapitalize="none"
                        autoComplete="password"
                        style={{ marginTop: 10 }}
                        right={showConfirmPassword ? <TextInput.Icon icon="eye" onPress={handleShowConfirmPassword} /> : <TextInput.Icon icon="eye-off" onPress={handleShowConfirmPassword} />}
                    />

                )}
                <Button mode="contained" style={{ marginTop: 20 }} onPress={() => { console.log("Account Created") }}>
                     {isSignup ?"Sign Up": "Sign In"}
                </Button>
                <Button mode="text" style={{ marginTop: 10 }} onPress={handleSwitchMode}>
                     {isSignup ?" Already have an account? Sign in": "Don't have an account? Sign up"}
                </Button>
                </View >
            </View>
        </KeyboardAvoidingView>
    );
}