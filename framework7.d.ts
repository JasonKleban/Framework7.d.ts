/// <reference path="dom7.d.ts" />
/// <reference path="template7.d.ts" />

declare module "framework7" {
    interface Framework7Parameters {
        id? : string
        name? : string
        version? : string
        theme? : string
        language? : string
        routes? : any[]
        root? : string
        data? : (this : Framework7) => {}
        methods?: { [ event : string] : () => void }
        on? : { [ event : string] : () => void }
        init? : boolean
        initOnDeviceReady? : boolean
    }
    
    interface ClicksModuleParameters {
        externalLinks? : string
    }
    
    interface TouchModuleParameters {
        fastClicks? : boolean
        fastClicksDistanceThreshold? : number
        fastClicksDelayBetweenClicks? : number
        fastClicksExclude? : string
        disableContextMenu? : boolean
        tapHold? : boolean
        tapHoldDelay? : number
        tapHoldPreventClicks? : boolean
        activeState? : boolean
        activeStateElements? : string
        materialRipple? : boolean
        materialRippleElements? : string
    }
    
    interface Support {}
    interface Device {}
    interface Utils {}
    interface Request {}

    class Framework7 {
        constructor(options?: Framework7Parameters & ClicksModuleParameters & TouchModuleParameters);
        
        id : string
        name : string
        version : string
        theme : string
        language : string
        routes : any[]
        root : string
        data : (this : Framework7) => {}
        methods: { [ event : string] : () => void }
        initialized : boolean
    
        rtl : boolean
        width : number
        height : number
        left : number
        top : number
        $ : Dom7.Dom7
        t7 : any
        params : Framework7Parameters & ClicksModuleParameters & TouchModuleParameters
        support : Support
        device : Device
        utils : Utils
        request : Request
    
        Router : any
        history : any
        Storage : any
        storage : any
        View : any
        TouchRipple : any
        Modal : any
        CustomModal : any
    
        on(event : string, handler : Function) : Framework7
        once(event : string, handler : Function) : Framework7
        off(event : string, handler : Function) : Framework7
        off(event : string) : Framework7
        emit(event : string, ... args : any[]) : Framework7
        init() : void
    }

	export default Framework7;
}
