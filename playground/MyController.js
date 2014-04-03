
/**
 * TODO create a description
 * @class playground.MyController
 * @extends aria.templates.ModuleCtrl
 */
Aria.classDefinition({
    $classpath : "playground.MyController",
    $extends : "aria.templates.ModuleCtrl",
    $implements : ["playground.IMyInterface"],
    $constructor : function () {                    
        this.$ModuleCtrl.constructor.call(this);
    },
    $destructor : function () {
        this.$ModuleCtrl.$destructor.call(this);
    },
    $prototype : {
        $publicInterfaceName : "playground.IMyInterface"        
    }
});