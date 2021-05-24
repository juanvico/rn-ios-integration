//
//  ViewController.swift
//  Swift-Integration
//
//  Created by Juan vico on 5/5/21.
//

import UIKit
import React

public class ReactView {
    public init() {    }
    public func render() -> UIView {
        let jsCodeLocation: URL =
                 Bundle.main.url(forResource: "main", withExtension: "jsbundle")
                 ?? RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource: nil)
     
             return RCTRootView(
                 bundleURL: jsCodeLocation,
                 moduleName: "App",
                 initialProperties: nil,
                 launchOptions: nil
             )
    }
}
