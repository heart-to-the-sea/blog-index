var middleware = [];
{
  middleware.push(function (next) {
    console.log(1);
    next();
    console.log(1.1);
  });

  middleware.push(function (next) {
    console.log(2);
    console.log("--->", arguments);
    next();
    console.log(2.1);
  });
  middleware.push((next) => {
    console.log(3);
    next();
    console.log(3.1);
  });
  middleware.push((next) => {
    console.log(4);
    next();
    console.log(4.1);
  });
  middleware.push((next) => {
    console.log(5);
    next();
    console.log(5.1);
  });
}
const fn = compiler(middleware);
fn();

function compiler(middleware) {
  const fn = middleware.shift();
  while(middleware.length){
    debugger
    fn(compiler(middleware)||(()=>{}))
  }
  return middleware.shift()
}
