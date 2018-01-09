/// <reference path="dom7.d.ts" />
/// <reference path="template7.d.ts" />

/** 
 * This all needs filling in!  Ok to steal from the v1 branch, but 
 *   make sure it's still valid for v2!
 * 
 * 1) Make smaller commits at first.
 * 2) Comments from the docs would be nice - gotta keep them up as they're updated.
 * 3) Somebody convince Vladimir on the virtues of typescript as a source language!
 **/

declare module "framework7" {
    interface Framework7Parameters {
        /** App bundle id.  Ex. io.framework7.testapp */
        id? : string
        /** App name. Can be used by other components, e.g. as the default title for Dialog component. */
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

    interface Panel {}

    interface Statusbar {}

    type KnownEvents = 'init' | 'resize' | 'orientationchange' | 'click' 
        | 'touchstart:active' | 'touchmove:active' | 'touchend:active' 
        | 'touchstart:passive' | 'touchmove:passive' | 'touchend:passive'
        | 'panelOpen';

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
    
        on(event : 'panelOpen', handler : (panel : Panel) => void) : Framework7
        on(event : KnownEvents | string, handler : Function) : Framework7

        once(event : KnownEvents | string, handler : Function) : Framework7
        off(event : KnownEvents | string, handler : Function) : Framework7
        off(event : KnownEvents | string) : Framework7
        emit(event : KnownEvents | string, ... args : any[]) : Framework7
        init() : void

        panel : Panel
        statusbar : Statusbar
    }

	export default Framework7;
}
