class ProxyFactory {
  static create(object, props, action) {
    return new Proxy(object, {
      get(target, prop, receiver) {
        // debugger;
        if (props.includes(prop) && ProxyFactory._isFunction(target[prop])) {
          return function () {
            // console.log(`interceptando ${prop}`);
            let response = Reflect.apply(target[prop], target, arguments);

            action(target);

            return response;
          };
        }

        return Reflect.get(target, prop, receiver);
      },

      set(target, prop, value, receiver) {
        let response = Reflect.set(target, prop, value, receiver);

        if (props.includes(prop)) action(target);

        return response;
      },
    });
  }

  static _isFunction(func) {
    return typeof func === typeof Function;
  }
}
