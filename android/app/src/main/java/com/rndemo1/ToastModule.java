package com.rndemo1;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import  android.widget.Toast;

public class ToastModule extends ReactContextBaseJavaModule {

    ReactApplicationContext context;
    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
        context = reactContext;
    }


    @Override
    public String getName() {
        return "ToastModule";
    }


    @ReactMethod
    public void showMessage(String message, Callback callback) {
        // Implement native Android logic here

        Toast.makeText(context, message, Toast.LENGTH_SHORT).show();
        System.out.println("Native message: " + message);
        callback.invoke(null, "Message received successfully!");
    }
}