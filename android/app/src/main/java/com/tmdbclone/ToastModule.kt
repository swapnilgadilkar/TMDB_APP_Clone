package com.tmdbclone

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import  com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager


class ToastModule() : ReactPackage {
    override fun createNativeModules(reactContext : ReactApplicationContext): MutableList<NativeModule>{
        val modules = ArrayList<NativeModule>();
        modules.add(ToastService(reactContext));
        return modules
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<View, ReactShadowNode<*>>> {
        return emptyList()
    }
}
