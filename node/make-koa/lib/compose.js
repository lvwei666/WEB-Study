function compose(middleware) {
  return function(context) {
    return dispatch(0);
    function dispatch(i) {
      const fn = middleware[i];
      return Promise.resolve(fn(context, () => {
        return dispatch(i + 1);
      }));
    }
  }
}
/**
 * async (ctx, next) => {
  console.log(1);
  await () => {
    async (ctx) => {
      ctx.body = '123';
      await () => {
        async () => {
          async () => {
            async () => {
              async () => {
              
            }
        }
        }
        }
      }
      console.log(3);
    }
  };
  console.log(2);
}
 */

module.exports = compose;