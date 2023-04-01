const boom = require('@hapi/boom');

////// ==========> PROPIEDAD CLOSURE: closure permite acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada.
function validatorHandler(schema,property){
  return(req,res,next)=>{
    const data = req[property];
    const {error}= schema.validate(data,{abortEarly:false});// ==> propiedad de validacion para que muestre todos los datos de una vez 
    if (error) {
      next(boom.badRequest(error));
    } else {
      next();
    }
  }
}

module.exports = validatorHandler;
