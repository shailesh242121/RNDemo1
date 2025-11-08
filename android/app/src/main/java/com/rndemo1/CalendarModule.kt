package com.rndemo1 // replace your-apps-package-name with your app’s package name

import android.util.Log
import android.widget.Toast
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.util.concurrent.TimeUnit
import kotlin.concurrent.thread

class CalendarModule(val reactContext: ReactApplicationContext) :
        ReactContextBaseJavaModule(reactContext) {
    // add to CalendarModule.kt

    override fun getName() = "CalendarModule"

    @ReactMethod
    fun createCalendarEvent(name: String, location: String) {
        Log.d("CalendarModule", "Create event called with name: $name and location: $location")
        Toast.makeText(reactContext, "Hello", Toast.LENGTH_SHORT).show()
    }

    @ReactMethod
    fun showToast(message: String) {
        Toast.makeText(reactContext, message, Toast.LENGTH_SHORT).show()
    }

    @ReactMethod
    fun callbackMethodDemo(firstName: String, secondName: String, callback: Callback) {

        callback.invoke("${firstName} ${secondName}")
        callback.invoke("abcd")
        //  invokeThread(callback)
    }

    fun invokeThread(callback: Callback) {
        thread(name = "MyWorkerThread") {
            callback.invoke("thread started")
            // For loop inside the worker thread
            for (i in 1..5) {
                println("Worker thread '${Thread.currentThread().name}': Iteration $i")
                // Simulate some work with a delay
                TimeUnit.MILLISECONDS.sleep(500)
                callback.invoke("thread counter ${i}")
            }

            callback.invoke("thread ends")
            println("Worker thread '${Thread.currentThread().name}' finished.")
        }
    }
}
