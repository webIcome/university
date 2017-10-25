const privateProps = new WeakMap();

class Session {

    set deviceType(deviceType) {
        privateProps.set(this, _setPropsAndReturn(privateProps.get(this), 'deviceType', deviceType));
    }

    get deviceType() {
        return privateProps.get(this).deviceType;
    }

    set deviceId(deviceId) {
        privateProps.set(this, _setPropsAndReturn(privateProps.get(this), 'deviceId', deviceId));
    }

    get deviceId() {
        return privateProps.get(this).deviceId;
    }

    set accessToken(accessToken) {
        privateProps.set(this, _setPropsAndReturn(privateProps.get(this), 'accessToken', accessToken));
    }

    get accessToken() {
        return privateProps.get(this).accessToken;
    }

    set regionCode(regionCode) {
        privateProps.set(this, _setPropsAndReturn(privateProps.get(this), 'regionCode', regionCode));
    }

    get regionCode() {
        return privateProps.get(this).regionCode;
    }
}

function _setPropsAndReturn(props, propName, value) {
    if (props) {
        props[propName] = value;
    } else {
        props = {[propName]: value};
    }
    return props;
}

export default Session;
