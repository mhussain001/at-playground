
/**
 * TODO create a description
 * @class example1.MyController
 * @extends aria.templates.ModuleCtrl
 */
Aria.classDefinition({
    $classpath : "app.MyController",
    $extends : "aria.templates.ModuleCtrl",
    $implements : ["app.IMyInterface"],
    $constructor : function () {                    
        this.$ModuleCtrl.constructor.call(this);
    },
    $destructor : function () {
        this.$ModuleCtrl.$destructor.call(this);
    },
    $prototype : {
        $publicInterfaceName : "app.IMyInterface"        
    }
});