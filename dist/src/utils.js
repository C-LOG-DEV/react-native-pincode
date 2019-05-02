"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Keychain = require("react-native-keychain");
const react_native_1 = require("react-native");
var PinResultStatus;
(function (PinResultStatus) {
    PinResultStatus["initial"] = "initial";
    PinResultStatus["success"] = "success";
    PinResultStatus["failure"] = "failure";
    PinResultStatus["locked"] = "locked";
})(PinResultStatus = exports.PinResultStatus || (exports.PinResultStatus = {}));
exports.hasPinCode = async (serviceName) => {
    return await Keychain.getInternetCredentials(serviceName).then(res => {
        return !!res && !!res.password;
    });
};
exports.deletePinCode = async (serviceName) => {
    return await Keychain.resetInternetCredentials(serviceName);
};
exports.resetInternalStates = async (asyncStorageKeys) => {
    return await react_native_1.AsyncStorage.multiRemove(asyncStorageKeys);
};
