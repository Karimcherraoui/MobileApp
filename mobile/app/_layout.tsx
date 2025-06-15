import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

 



export default function RootLayout() {
  return(
    
    <Stack >
        <Stack.Screen
      name="welcome"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="(tabs)"
      options={{
      headerShown:false,
      }}
    />
    <Stack.Screen
      name="auth"
      options={{
        headerShown: false,
      }}
    />
  
  </Stack>

  )
}
