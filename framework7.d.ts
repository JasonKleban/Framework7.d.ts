declare module "framework7" {
    import * as Dom7 from 'Dom7'
    import * as Template7 from 'Template7'
    
    export { Template7, Dom7 };

    // Css Selector string is an option on many F7 methods
    // Giving this alias makes the typename show in the intellisense
    // instead of just `string`.
    export interface CssSelector extends String {}

    // I believe this will be reused throughout the components.
    // This aims to reduce repetition of tedius code and constrains
    // event names to be only the supported string names
    export interface EventManagement<Events> {
        /** Add event handler */
        on<E extends keyof Events>(event : E, handler : Events[E]) : void
        /** Add event handler that will be removed after it was fired */
        once<E extends keyof Events>(event : E, handler : Events[E]) : void
        /** Remove event handler */
        off<E extends keyof Events>(event : E, handler : Events[E]) : void
        /** Remove all handlers for specified event */
        off<E extends keyof Events>(event : E) : void
        /** Fire event on instance */
        emit<E extends keyof Events>(event : E, ...args : any[]) : void
    }

    // Trying to organize the types by the core components and their documentation.
    export namespace Accordian {
        // There are no parameters because there is no factory method for accordians
        // but if there were, they would go here and the AppMethod would have the factory
        export interface Parameters { }

        // These are into Framework7 immediately below each component's namespace
        export interface AppMethods {
            /** open specified accordion item */
            open(el : HTMLElement | CssSelector) : void
    
            /** close specified accordion item */
            close(el : HTMLElement | CssSelector) : void
    
            /** toggle specified accordion item */
            toggle(el : HTMLElement | CssSelector) : void
        }

        // These are merged into Framework7AppEvents
        export interface AppEvents {
            /** Event will be triggered when accordion content starts its opening animation */
            accordionOpen : (el : HTMLElement | CssSelector) => void
    
            /** Event will be triggered after accordion content completes its opening animation */
            accordionOpened : (el : HTMLElement | CssSelector) => void
            
            /** Event will be triggered when accordion content starts its closing animation */
            accordionClose : (el : HTMLElement | CssSelector) => void
    
            /** Event will be triggered after accordion content completes its closing animation */
            accordionClosed : (el : HTMLElement | CssSelector) => void
        }
    }
    // Merge the various "app method" related to this component into the Framework7 interface
    export interface Framework7 {
        accordion: Accordian.AppMethods
    }
    // Merge the various app events into the app-level 
    // events interface for later mapping convenience
    export interface Framework7AppEvents extends Accordian.AppEvents {}

    export namespace ActionSheet {
        export interface Events {
            /** Event will be triggered when Action Sheet starts its opening animation. As an argument event handler receives action sheet instance */
            open : (actions : ActionSheet) => void
            /** Event will be triggered after Action Sheet completes its opening animation. As an argument event handler receives action sheet instance */
            opened : (actions : ActionSheet) => void
            /** Event will be triggered when Action Sheet starts its closing animation. As an argument event handler receives action sheet instance */
            close : (actions : ActionSheet) => void
            /** Event will be triggered after Action Sheet completes its closing animation. As an argument event handler receives action sheet instance */
            closed : (actions : ActionSheet) => void
            /** Event will be triggered right before Action Sheet instance will be destroyed. As an argument event handler receives action sheet instance */
            beforeDestroy : (actions : ActionSheet) => void
        }

        export interface ActionSheet extends EventManagement<Events> {
            /** Link to global app instance */
            app : Framework7
            /** Action sheet HTML element */
            el : HTMLElement
            /** Dom7 instance with action sheet HTML element */
            $el : Dom7.Dom7
            /** Backdrop HTML element */
            backdropEl : HTMLElement
            /** Dom7 instance with backdrop HTML element */
            $backdropEl : Dom7.Dom7
            /** Action sheet instance parameters */
            params : Parameters
            /** Boolean prop indicating whether action sheet is opened or not */
            opened : boolean

            /** Open action sheet. Where animate - boolean (by default true) - defines whether it should be opened with animation */
            open(animate : boolean) : void
            /** Close action sheet. Where animate - boolean (by default true) - defines whether it should be closed with animation */
            close(animate : boolean) : void
            /** Destroy action sheet */
            destroy() : void
        }

        export interface ActionSheetButton {
            /** String with Button's text (could be HTML string) */
            text:string
            /** HTML string of icon */
            icon:string
            /** Enables bold button text */
            bold:boolean
            /** Button color, one of default colors */
            color:string
            /** Button background color, one of default colors */
            bg:string
            /** If enabled then it will be rendered as label instead of button */
            label:boolean
            /** Defines whether the button is disabled or not. */
            disabled:boolean
            /** If enabled then button click will close Action Sheet */
            close:boolean
            /** Callback function that will be executed after click on this button */
            onClick: (actions : unknown, e: unknown) => void
        }

        export interface Parameters { 
            /** Action Sheet element. Can be useful if you already have Action Sheet element in your HTML and want to create new instance using this element*/
            el:HTMLElement
            /** Full Action Sheet HTML content string. Can be useful if you want to create Action Sheet element with custom HTML*/
            content:string
            /** Enables Action Sheet backdrop (dark semi transparent layer behind)*/
            backdrop:boolean
            /** When enabled, action sheet will be closed on backdrop click*/
            closeByBackdropClick:boolean
            /** When enabled, action sheet will be closed on when click outside of it*/
            closeByOutsideClick:boolean
            /** Whether the Action Sheet should be opened/closed with animation or not. Can be overwritten in .open() and .close() methods*/
            animate:boolean
            /** Action sheet groups/buttons. In this case Actions layout will be generated dynamically based on passed groups and buttons. In case of groups it should array where each item represent array with buttons for group.*/
            buttons: ActionSheetButton[]
            /** Enables grid buttons layout*/
            grid:boolean
            /** When enabled, action sheet will be converted to Popoveron large screens.*/
            convertToPopover:boolean
            /** When enabled, action sheel will be always converted to Popover.*/
            forceToPopover:boolean
            /** HTML element or string CSS selector of target element. Required when converstion to popover is in use*/
            targetEl: HTMLElement | CssSelector
            /** Virtual target element horizontal offset from left side of the screen. Required when converstion to popover is in use without using real target element (targetEl)*/
            targetX:number
            /** Virtual target element vertical offset from top of the screen. Required when converstion to popover is in use without using real target element (targetEl)*/
            targetY:number
            /** Virtual target element width (in px). Required when converstion to popover is in use without using real target element (targetEl)*/
            targetWidth:number
            /** Virtual target element height (in px). Required when converstion to popover is in use without using real target element (targetEl)*/
            targetHeight:number
            /** Callback function that will be executed after click on the Action Sheet button*/
            onClick: (actions : unknown, e: unknown) => void
            /** Custom function to render Action Sheet. Must return Action Sheet html*/
            render: () => string
            /** Custom function to render Popover when conversition to popover is in use. Must return Popover html*/
            renderPopover: () => string
        }
    
        export interface DomEvents {
            /** Event will be triggered when Action Sheet starts its opening animation */
            'actions:open' : (actions : ActionSheet) => void
            /** Event will be triggered after Action Sheet completes its opening animation */
            'actions:opened' : (actions : ActionSheet) => void
            /** Event will be triggered when Action Sheet starts its closing animation */
            'actions:close' : (actions : ActionSheet) => void
            /** Event will be triggered after Action Sheet completes its closing animation */
            'actions:closed' : (actions : ActionSheet) => void
        }

        export interface AppMethods {
            /** create Action Sheet instance */
            create(
                /** Object with action sheet parameters */ 
                parameters : Parameters
            ) : ActionSheet;
            
            /** destroy Action Sheet instance */
            destroy(el : HTMLElement | CssSelector) : void;
            /** get Action Sheet instance by HTML element */
            get(el : HTMLElement | CssSelector) : ActionSheet;
            /** opens Action Sheet */
            open(el : HTMLElement | CssSelector, animate : boolean) : ActionSheet;
            /** closes Action Sheet */
            close(el : HTMLElement | CssSelector, animate : boolean) : ActionSheet;
        }
    
        export interface AppEvents {
            /** Event will be triggered when Action Sheet starts its opening animation. As an argument event handler receives action sheet instance */
            actionsOpen : (actions : ActionSheet) => void
            /** Event will be triggered after Action Sheet completes its opening animation. As an argument event handler receives action sheet instance */
            actionsOpened : (actions : ActionSheet) => void
            /** Event will be triggered when Action Sheet starts its closing animation. As an argument event handler receives action sheet instance */
            actionsClose : (actions : ActionSheet) => void
            /** Event will be triggered after Action Sheet completes its closing animation. As an argument event handler receives action sheet instance */
            actionsClosed : (actions : ActionSheet) => void
            /** Event will be triggered right before Action Sheet instance will be destroyed. As an argument event handler receives action sheet instance */
            actionsBeforeDestroy : (actions : ActionSheet) => void
        }
    }
    export interface Framework7 {
        actions: ActionSheet.AppMethods
    }
    export interface Framework7AppEvents extends ActionSheet.AppEvents {}

    export namespace Autocomplete {
        export interface Autocomplete extends EventManagement<Events> {
            /** Object with passed initialization parameters */
            params : Parameters
            /** Array with selected items */
            value : unknown[]
            /** true if Autocomplete is currently opened */
            opened : boolean
            /** HTML element of Autcomplete opener element (if passed on init) */
            openerEl : HTMLElement | undefined
            /** Dom7 instance of of Autcomplete opener element (if passed on init) */
            $openerEl : Dom7.Dom7 | undefined
            /** HTML element of Autcomplete input (if passed on init) */
            inputEl : HTMLElement | undefined
            /** Dom7 instance of of Autcomplete input (if passed on init) */
            $inputEl : Dom7.Dom7 | undefined
            /** Dom7 instance of Autcomplete dropdown */
            $dropdownEl : Dom7.Dom7 | undefined
            /** Autcomplete URL (that was passed in url parameter) */
            url : string
            /** Autcomplete View (that was passed in view parameter) or found parent view */
            view : View.View
            /** HTML element of Autcomplete container: dropdown element, or popup element, or page element. Available when Autocomplete opened */
            el : HTMLElement | undefined
            /** Dom7 instance of Autcomplete container: dropdown element, or popup element, or page element. Available when Autocomplete opened */
            $el : Dom7.Dom7 | undefined
            /** Autcomplete page Searchbar instance */
            searchbar : Searchbar.Searchbar

            /** Open Autocomplete (Dropdown, Page or Popup) */
            open() : void
            /** Close Autcomplete */
            close() : void
            /** Show autocomplete preloader */
            preloaderShow() : void
            /** Hide autocomplete preloader */
            preloaderHide() : void
            /** Destroy Autocomplete instance and remove all events */
            destroy() : void
        }

        export interface CommonParameters {
            /** Defines how to open Autocomplete, can be page or popup (for Standalone) or dropdown. (default page) */
            openIn?: string
            /** Function which accepts search query and render function where you need to pass array with matched items. */
            source: (query : string, render : unknown[]) => unknown
            /** Limit number of maximum displayed items in autocomplete per query. */
            limit: number
            /** Set to true to include Preloader to autocomplete layout. (default false) */
            preloader?: boolean
            /** Preloader color, one of the default colors. */
            preloaderColor: string
            /** Array with default selected values. */
            value: unknown[]
            /** Name of matched item object's key that represents item value. (default id) */
            valueProperty?: string
            /** Name of matched item object's key that represents item display value which is used as title of displayed options. (default text) */
            textProperty?: string

            //
            // Not sure if these go here??
            //
            /** Function to render autocomplete dropdown, must return dropdown HTML string. */
            renderDropdown: (items : any[]) => string
            /** Function to render autocomplete page, must return page HTML string. */
            renderPage: (items : any[]) => string
            /** Function to render autocomplete popup, must return popup HTML string. */
            renderPopup: (items : any[]) => string
            /** Function to render single autocomplete, must return item HTML string. */
            renderItem: (item : any, index: number) => string
            /** Function to render searchbar, must return searchbar HTML string. */
            renderSearchbar: () => string
            /** Function to render navbar, must return navbar HTML string. */
            renderNavbar: () => string

            on: {
                [event in keyof Events] : Function
           }
        }
        export interface StandaloneParameters {
            /** If enabled, then it will request passed to source function on autocomplete open. (default false) */
            requestSourceOnOpen?: boolean
            /** String with CSS selector or HTMLElement of link which will open standalone autocomplete page or popup on click. */
            openerEl: HTMLElement | CssSelector
            /** Default text for "Close" button when opened as Popup. (default Close) */
            popupCloseLinkText?: string
            /** Default text for "Back" link when opened as Page. (default Back) */
            pageBackLinkText?: string
            /** Autocomplete page title. If nothing is specified and passed openerEl is an item of List View, then text value of item-title element will be used. */
            pageTitle: string
            /** Searchbar placeholder text. (default Search...) */
            searchbarPlaceholder?: string
            /** Searchbar "Cancel" button text. (default Cancel) */
            searchbarDisableText?: string
            /** Text which is displayed when no matches found. (default Nothing found) */
            notFoundText?: string
            /** Set to true to allow multiple selections. (default false) */
            multiple?: boolean
            /** Set to true and autocomplete will be closed when user picks value. Not available if multiple is enabled. (default false) */
            closeOnSelect?: boolean
            /** Set to true to auto focus search field on autocomplete open. (default false) */
            autoFocus?: boolean
            /** Set to false to open standalone autocomplete without animation. (default true) */
            animate?: boolean
            /** Navbar color theme. One of the default color themes. */
            navbarColorTheme: string
            /** Form (checkboxes or radios) color theme. One of the default color themes. */
            formColorTheme: string
            /** Will add opened autocomplete modal (when openIn: 'popup') to router history which gives ability to close autocomplete by going back in router history and set current route to the autocomplete modal. (default true) */
            routableModals?: boolean
            /** Standalone autocomplete URL that will be set as a current route. (default select/) */
            url?: string
            /** Link to initialized View instance if you want use standalone Autcomplete. By default, if not specified, it will be opened in Main View.. */
            view: View.View
        }
        export interface DropdownParameters {
            /** String with CSS selector or HTMLElement of related text input. */
            inputEl: HTMLElement | CssSelector
            /** Allows to configure input events used to handle Autcomplete actions and source request. Can be changed for example to change keyup compositionend if you use keyboard with composition of Chinese characters. (default input) */
            inputEvents?: string
            /** Highlight matches in autcomplete results. (default true) */
            highlightMatches?: boolean
            /** Enables type ahead, will prefill input value with first item in match. (default false) */
            typeahead?: boolean
            /** Specify dropdown placeholder text. */
            dropdownPlaceholderText: string
            /** If true then value of related input will be update as well. (default true) */
            updateInputValueOnSelect?: boolean
            /** If true then input which is used as item-input in List View will be expanded to full screen wide during dropdown visible.. (default false) */
            expandInput?: boolean
            /** By default dropdown will be added to parent page-content element. You can specify here different element where to add dropdown element. */
            dropdownContainerEl: HTMLElement | CssSelector
        }
        // perhaps this could be improved
        export type Parameters = CommonParameters & Partial<StandaloneParameters> & Partial<DropdownParameters>

        export interface Events {
            /** Event will be triggered when Autocomplete value changed. Returned value is an array with selected items */
            change : (autocomplete : Autocomplete, value : unknown) => void
            /** Event will be triggered when Autocomplete starts its opening animation. As an argument event handler receives autocomplete instance */
            open : (autocomplete : Autocomplete) => void
            /** Event will be triggered after Autocomplete completes its opening animation. As an argument event handler receives autocomplete instance */
            opened : (autocomplete : Autocomplete) => void
            /** Event will be triggered when Autocomplete starts its closing animation. As an argument event handler receives autocomplete instance */
            close : (autocomplete : Autocomplete) => void
            /** Event will be triggered after Autocomplete completes its closing animation. As an argument event handler receives autocomplete instance */
            closed : (autocomplete : Autocomplete) => void
            /** Event will be triggered right before Autocomplete instance will be destroyed. As an argument event handler receives autocomplete instance */
            beforeDestroy : (autocomplete : Autocomplete) => void
        }

        export interface AppMethods {
            /** create Autocomplete instance */
            create(parameters : Parameters) : Autocomplete

            /** destroy Autocomplete instance */
            destroy(el : HTMLElement | CssSelector) : void

            /** get Autocomplete instance by HTML element */
            get(el : HTMLElement | CssSelector) : Autocomplete

            /** open Autocomplete */
            open(el : HTMLElement | CssSelector) : Autocomplete

            /** closes Autocomplete */
            close(el : HTMLElement | CssSelector) : Autocomplete
        }
    
        export interface AppEvents {
            /** Event will be triggered when Autocomplete value changed. Returned value is an array with selected items */
            autocompleteChange : (autocomplete : Autocomplete, value : unknown) => void
            /** Event will be triggered when Autocomplete starts its opening animation. As an argument event handler receives autocomplete instance */
            autocompleteOpen : (autocomplete : Autocomplete) => void
            /** Event will be triggered after Autocomplete completes its opening animation. As an argument event handler receives autocomplete instance */
            autocompleteOpened : (autocomplete : Autocomplete) => void
            /** Event will be triggered when Autocomplete starts its closing animation. As an argument event handler receives autocomplete instance */
            autocompleteClose : (autocomplete : Autocomplete) => void
            /** Event will be triggered after Autocomplete completes its closing animation. As an argument event handler receives autocomplete instance */
            autocompleteClosed : (autocomplete : Autocomplete) => void
            /** Event will be triggered right before Autocomplete instance will be destroyed. As an argument event handler receives autocomplete instance */
            autocompleteBeforeDestroy : (autocomplete : Autocomplete) => void
        }
    }
    export interface Framework7Params { }
    export interface Framework7 {
        autocomplete: Autocomplete.AppMethods
    }
    export interface Framework7AppEvents extends Autocomplete.AppEvents {}

    export namespace Badge {
        export interface Badge {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Badge: Badge.AppMethods
    }
    export interface Framework7AppEvents extends Badge.AppEvents {}

    export namespace Block {
        export interface Block {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Block: Block.AppMethods
    }
    export interface Framework7AppEvents extends Block.AppEvents {}

    export namespace Button {
        export interface Button {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Button: Button.AppMethods
    }
    //export interface Framework7AppEvents extends Button.AppEvents {}

    export namespace Calendar {
        export interface Calendar {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Calendar: Calendar.AppMethods
    }
    //export interface Framework7AppEvents extends Calendar.AppEvents {}

    export namespace Datepicker {
        export interface Datepicker {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Datepicker: Datepicker.AppMethods
    }
    //export interface Framework7AppEvents extends Datepicker.AppEvents {}

    export namespace Cards {
        export interface Cards {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Cards: Cards.AppMethods
    }
    //export interface Framework7AppEvents extends Cards.AppEvents {}

    export namespace Checkbox {
        export interface Checkbox {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Checkbox: Checkbox.AppMethods
    }
    //export interface Framework7AppEvents extends Checkbox.AppEvents {}

    export namespace Chips {
        export interface Chips {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Chips: Chips.AppMethods
    }
    //export interface Framework7AppEvents extends Chips.AppEvents {}

    export namespace Tags {
        export interface Tags {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Tags: Tags.AppMethods
    }
    //export interface Framework7AppEvents extends Tags.AppEvents {}

    export namespace ContactsList {
        export interface ContactsList {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // ContactsList: ContactsList.AppMethods
    }
    //export interface Framework7AppEvents extends ContactsList.AppEvents {}

    export namespace DataTable {
        export interface DataTable {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // DataTable: DataTable.AppMethods
    }
    //export interface Framework7AppEvents extends DataTable.AppEvents {}

    export namespace Dialog {
        export interface Dialog {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Dialog: Dialog.AppMethods
    }
    //export interface Framework7AppEvents extends Dialog.AppEvents {}

    export namespace Elevation {
        export interface Elevation {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Elevation: Elevation.AppMethods
    }
    //export interface Framework7AppEvents extends Elevation.AppEvents {}

    export namespace FloatingActionButton {
        export interface FloatingActionButton {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // FloatingActionButton: FloatingActionButton.AppMethods
    }
    //export interface Framework7AppEvents extends FloatingActionButton.AppEvents {}

    export namespace FormDataStorage {
        export interface FormDataStorage {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // FormDataStorage: FormDataStorage.AppMethods
    }
    //export interface Framework7AppEvents extends FormDataStorage.AppEvents {}

    export namespace Gauge {
        export interface Gauge {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Gauge: Gauge.AppMethods
    }
    //export interface Framework7AppEvents extends Gauge.AppEvents {}

    export namespace Grid {
        export interface Grid {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Grid: Grid.AppMethods
    }
    //export interface Framework7AppEvents extends Grid.AppEvents {}

    export namespace LayoutGrid {
        export interface LayoutGrid {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // LayoutGrid: LayoutGrid.AppMethods
    }
    //export interface Framework7AppEvents extends LayoutGrid.AppEvents {}

    export namespace Icons {
        export interface Icons {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Icons: Icons.AppMethods
    }
    //export interface Framework7AppEvents extends Icons.AppEvents {}

    export namespace InfiniteScroll {
        export interface InfiniteScroll {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // InfiniteScroll: InfiniteScroll.AppMethods
    }
    //export interface Framework7AppEvents extends InfiniteScroll.AppEvents {}

    export namespace FormInputs {
        export interface FormInputs {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // FormInputs: FormInputs.AppMethods
    }
    //export interface Framework7AppEvents extends FormInputs.AppEvents {}

    export namespace LazyLoad {
        export interface LazyLoad {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // LazyLoad: LazyLoad.AppMethods
    }
    //export interface Framework7AppEvents extends LazyLoad.AppEvents {}

    export namespace Link {
        export interface Link {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Link: Link.AppMethods
    }
    //export interface Framework7AppEvents extends Link.AppEvents {}

    export namespace ListView {
        export interface ListView {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // ListView: ListView.AppMethods
    }
    //export interface Framework7AppEvents extends ListView.AppEvents {}

    export namespace ListIndex {
        export interface ListIndex {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // ListIndex: ListIndex.AppMethods
    }
    //export interface Framework7AppEvents extends ListIndex.AppEvents {}

    export namespace LoginScreen {
        export interface LoginScreen {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // LoginScreen: LoginScreen.AppMethods
    }
    //export interface Framework7AppEvents extends LoginScreen.AppEvents {}

    export namespace Messagebar {
        export interface Messagebar {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Messagebar: Messagebar.AppMethods
    }
    //export interface Framework7AppEvents extends Messagebar.AppEvents {}

    export namespace Messages {
        export interface Messages {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Messages: Messages.AppMethods
    }
    //export interface Framework7AppEvents extends Messages.AppEvents {}

    export namespace Navbar {
        export interface Navbar {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Navbar: Navbar.AppMethods
    }
    //export interface Framework7AppEvents extends Navbar.AppEvents {}

    export namespace Notification {
        export interface Notification {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Notification: Notification.AppMethods
    }
    //export interface Framework7AppEvents extends Notification.AppEvents {}

    export namespace Page {
        export interface Page {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Page: Page.AppMethods
    }
    //export interface Framework7AppEvents extends Page.AppEvents {}


    export namespace Panels {
        export interface AppParameters {
            /** Minimal app width (in px) when left panel becomes always visible. */
            leftBreakpoint : number
            /** Minimal app width (in px) when right panel becomes always visible. */
            rightBreakpoint : number
            /** Disabled by default. If you want to enable ability to open/close side panels with swipe you can pass here left (for left panel) or right (for right panel) or both (for both panels).. */
            swipe : string
            /** Width (in px) of invisible edge from the screen that triggers swipe panel. (default 0) */
            swipeActiveArea : number
            /** This parameter gives ability to close opposite panel by swipe. For example, if your swipePanel is "left", then you could close "right" panel also with swipe.. (default true) */
            swipeCloseOpposite : boolean
            /** This parameter allows to close (but not open) panels with swipes. (default false) */
            swipeOnlyClose : boolean
            /** Fallback option for potentially better performance on old/slow devices. If you enable it, then side panel will not follow your finger during touch, it will be automatically opened/closed on swipe left/right.. (default false) */
            swipeNoFollow : boolean
            /** Panel will not move with swipe if "touch distance" will be less than this value (in px).. (default 0) */
            swipeThreshold : number
            /** Enable/disable ability to close panel by clicking outside of panel (on panel's backdrop). (default true) */
            closeByBackdropClick : boolean
        }
    }
    export interface Framework7Params {
        panel: Panels.AppParameters
    }

    export namespace PhotoBrowser {
        export interface PhotoBrowser {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // PhotoBrowser: PhotoBrowser.AppMethods
    }
    //export interface Framework7AppEvents extends PhotoBrowser.AppEvents {}

    export namespace Picker {
        export interface Picker {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Picker: Picker.AppMethods
    }
    //export interface Framework7AppEvents extends Picker.AppEvents {}

    export namespace Popover {
        export interface Popover {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Popover: Popover.AppMethods
    }
    //export interface Framework7AppEvents extends Popover.AppEvents {}

    export namespace Popup {
        export interface Popup {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // popup: Popup.AppMethods
    }
    //export interface Framework7AppEvents extends Popup.AppEvents {}

    export namespace Preloader {
        export interface Preloader {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Preloader: Preloader.AppMethods
    }
    //export interface Framework7AppEvents extends Preloader.AppEvents {}

    export namespace Progressbar {
        export interface Progressbar {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Progressbar: Progressbar.AppMethods
    }
    //export interface Framework7AppEvents extends Progressbar.AppEvents {}

    export namespace PullToRefresh {
        export interface PullToRefresh {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // PullToRefresh: PullToRefresh.AppMethods
    }
    //export interface Framework7AppEvents extends PullToRefresh.AppEvents {}

    export namespace PullToRefresh {
        export interface Radio {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // PullToRefresh: PullToRefresh.AppMethods
    }
    //export interface Framework7AppEvents extends PullToRefresh.AppEvents {}

    export namespace RangeSlider {
        export interface RangeSlider {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // RangeSlider: RangeSlider.AppMethods
    }
    //export interface Framework7AppEvents extends RangeSlider.AppEvents {}

    export namespace Searchbar {
        export interface Searchbar {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Searchbar: Searchbar.AppMethods
    }
    //export interface Framework7AppEvents extends Searchbar.AppEvents {}

    export namespace SheetModal {
        export interface SheetModal {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // SheetModal: SheetModal.AppMethods
    }
    //export interface Framework7AppEvents extends SheetModal.AppEvents {}

    export namespace SmartSelect {
        export interface SmartSelect {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // SmartSelect: SmartSelect.AppMethods
    }
    //export interface Framework7AppEvents extends SmartSelect.AppEvents {}

    export namespace SortableList {
        export interface SortableList {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // SortableList: SortableList.AppMethods
    }
    //export interface Framework7AppEvents extends SortableList.AppEvents {}


    export namespace Statusbar {
        export interface AppParameters{
            /** Enables statusbar handling by Framework7. Disable it if you
             * don't want Framework7 to handle statusbar behavior */
            enabled:boolean
            /** Can be true, false, auto. Defines whether the statusbar overlay
             * should be visible or not. In case of autoFramework7 will detect
             * it automatically depending whether the app is in fullscreen mode
             * or not */
            overlay: string | boolean
            /** Hex string (#RRGGBB) with background color when iOS theme is
             * active. If passed then it will override CSS value */
            iosBackgroundColor:string
            /** Hex string (#RRGGBB) with background color when MD theme is
             * active. If passed then it will override CSS value */
            materialBackgroundColor:string
            /** If enabled, then click on statusbar overlay will scroll top page
             * content to the top.This functionality is only available when app
             * is running under cordova/phonegap environment with installed
             * cordova-plugin-statusbar */
            scrollTopOnClick:boolean
            /** "Makes the statusbar overlay or not overlay the WebView. iOS-only feature.
            This functionality is only available when app is running under cordova/phonegap
            environment with installed cordova-plugin-statusbar"
            */
            iosOverlaysWebView:boolean
            /** "Statusbar text color. Can be white or black iOS-only feature. This
            functionality is only available when app is running under cordova/phonegap
            environment with installed cordova-plugin-statusbar" */
            iosTextColor:string
        }

        export interface AppMethods {
            /** Hide statusbar. In webapp it just hides statusbar overlay, but
             * in cordova app it will hide statusbar at all.Hiding device
             * statusbar is available when app is running under cordova/phonegap
             * environment with installed cordova-plugin-statusbar */
            hide() : void
            /** Show statusbar */
            show() : void
            /** Makes the statusbar overlay or not overlay the WebView.  overlays -
             * boolean - does it overlay or notThis functionality is only
             * available when app is running under cordova/phonegap environment
             * with installed cordova-plugin-statusbar */
            iosOverlaysWebView(overlays : boolean) : void
            /** "Set/change statusbar text color.color - string - text color,
            can be white or blackiOS-only feature This functionality is only
            available when app is running under cordova/phonegap environment
            with installed cordova-plugin-statusbar" */
            setIosTextColor(color : string) : void
            /** Set/change statusbar background colorhex - string - Hex string
             * (#RRGGBB) with background color */
            setBackgroundColor(hex : string) : void
            /** Returns true if system statusbar is visible and false when it is
             * not visibleThis functionality is only available when app is
             * running under cordova/phonegap environment with installed
             * cordova-plugin-statusbar */
            isVisible() : boolean
        }
    }
    export interface Framework7 {
        statusbar: Statusbar.AppParameters & Statusbar.AppMethods
    }

    export namespace Stepper {
        export interface Stepper {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Stepper: Stepper.AppMethods
    }
    //export interface Framework7AppEvents extends Stepper.AppEvents {}

    export namespace Subnavbar {
        export interface Subnavbar {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Subnavbar: Subnavbar.AppMethods
    }
    //export interface Framework7AppEvents extends Subnavbar.AppEvents {}

    export namespace Swiper {
        export interface Swiper {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Swiper: Swiper.AppMethods
    }
    //export interface Framework7AppEvents extends Swiper.AppEvents {}

    export namespace Swipeout {
        export interface Swipeout {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Swipeout: Swipeout.AppMethods
    }
    //export interface Framework7AppEvents extends Swipeout.AppEvents {}

    export namespace Tabs {
        export interface Tabs {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Tabs: Tabs.AppMethods
    }
    //export interface Framework7AppEvents extends Tabs.AppEvents {}

    export namespace Timeline {
        export interface Timeline {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Timeline: Timeline.AppMethods
    }
    //export interface Framework7AppEvents extends Timeline.AppEvents {}

    export namespace Toast {
        export interface Toast {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Toast: Toast.AppMethods
    }
    //export interface Framework7AppEvents extends Toast.AppEvents {}

    export namespace Toggle {
        export interface Toggle {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Toggle: Toggle.AppMethods
    }
    //export interface Framework7AppEvents extends Toggle.AppEvents {}

    export namespace Toolbar {
        export interface Toolbar {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Toolbar: Toolbar.AppMethods
    }
    //export interface Framework7AppEvents extends Toolbar.AppEvents {}

    export namespace Tabbar {
        export interface Tabbar {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Tabbar: Tabbar.AppMethods
    }
    //export interface Framework7AppEvents extends Tabbar.AppEvents {}

    export namespace Tooltip {
        export interface Tooltip {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // Tooltip: Tooltip.AppMethods
    }
    //export interface Framework7AppEvents extends Tooltip.AppEvents {}

    export namespace VideoIntelligence {
        export interface VideoIntelligence {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // VideoIntelligence: VideoIntelligence.AppMethods
    }
    //export interface Framework7AppEvents extends VideoIntelligence.AppEvents {}

    export namespace View {
        export interface View {
            // TODO: fill in?
        }

        export interface Parameters {
            name:string
            main:boolean
            router:boolean
            url:string
            stackPages:boolean
            linksView:string | object
            uniqueHistory:boolean
            uniqueHistoryIgnoreGetParameters:boolean
            allowDuplicateUrls:boolean
            animate:boolean
            preloadPreviousPage:boolean
            reloadPages:boolean
            restoreScrollTopOnBack:boolean
            iosPageLoadDelay:number
            materialPageLoadDelay:number
            passRouteQueryToRequest:boolean
            passRouteParamsToRequest:boolean
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // View: View.AppMethods
    }
    //export interface Framework7AppEvents extends View.AppEvents {}

    export namespace VirtualList {
        export interface VirtualList {
            // TODO: fill in?
        }

        export interface Parameters {
            // TODO: fill in?
        }

        export interface Events {
            // TODO: fill in?
        }
    
        export interface DomEvents {
            // TODO: fill in?
        }

        export interface AppMethods {
            // TODO: fill in?
        }
    
        export interface AppEvents {
            // TODO: fill in?
        }
    }
    export interface Framework7Params {
        // TODO: fill in?
    }
    export interface Framework7 {
        // TODO: fill in?
        // VirtualList: VirtualList.AppMethods
    }
    //export interface Framework7AppEvents extends VirtualList.AppEvents {}

    export namespace Router {
        export interface Router {
            /** Template7 template string. Will be compiled as Template7 template */
            template : string
            /** Render function to render component. Must return full html string or HTMLElement */
            render : () => string | HTMLElement
            /** Component data, function must return component context data */
            data : () => any
            /** Component CSS styles. Styles will be added to the document after component will be mounted (added to DOM), and removed after component will be destroyed (removed from the DOM) */
            style : string
            /** Object with additional component methods which extend component context */
            methods : { [name : string] : () => any }
            /** Object with page events handlers */
            on : { [event : string] : () => void }

            /** Called synchronously immediately after the component has been initialized, before data and event/watcher setup. */
            beforeCreate : () => void
            /** Called synchronously after the component is created, context data and methods are available and component element $el is also created and available */
            created : () => void
            /** Called right before component will be added to DOM */
            beforeMount : () => void
            /** Called right after component was be added to DOM */
            mounted : () => void
            /** Called right after component VDOM has been patched */
            updated : () => void
            /** Called right before component will be destoyed */
            beforeDestroy : () => void
            /** Called when component destroyed */
            destroyed : () => void
        }
    }

    export interface Framework7Params {
        /** App root element. If you main app layout is not a direct child of the <body> then it is required to specify root element here. (default body) */
        root : string
        /** App bundle id.. (default io.framework7.testapp) */
        id : string
        /** App name. Can be used by other components, e.g. as the default title for Dialog component.. (default Framework7) */
        name : string
        /** App version. Can be used by other components.. (default 1.0.0) */
        version : string
        /** App theme. Can be ios, md or auto. In case of auto it will use iOS theme for iOS devices and MD theme for all other devices.. (default auto) */
        theme : string
        /** App language. Can be used by other components. By default equal to the current browser/webview language (i.e. navigator.language).. */
        language : string
        /** Array with default routes to all views.. (default []) */
        routes : Route[]
        /** App root data. Must be a function that returns an object with root data.  Note, that this inside of this data function points to app Framework7 instance.. */
        data : () => any
        /** App root methods. Object with methods.  Note, that this inside of each method points to app Framework7 instance.. (default {}) */
        methods : { [name : string] : () => any }
        /** Object with events handlers.. (default {}) */
        on : { [event : string] : () => void }
        /** By default Framework7 will be initialized automatically when you call new Framework7(). If you want to prevent this behavior you can disable it with this option and then initialize it manually with init() when you need it.. (default true) */
        init : boolean
        /** If automatic initialization is enabled with init: true parameter and app is running under cordova environment then it will be initialized on deviceready event.. (default true) */
        initOnDeviceReady : boolean
        /** Object with clicks-module related parameters */
        clicks: {
            /** CSS selector for links that should be treated as external and shouldn't be handled by Framework7. For example such '.external' value will match to links like <a href="somepage.html" class="external"> (with class "external") (default '.external') */
            externalLinks : string
        }
        /** Object with touch-module related parameters */
        touch: {
            /** Fast clicks is a built-in library that removes 300ms delay from links and form elements in mobile browser while you click them. You can disable this built-in library if you want to use other third party fast clicks script.. (default true) */
            fastClicks : boolean
            /** Distance threshold (in px) to prevent short taps. So if tap/move distance is larger than this value then "click" will not be triggered. (default 10) */
            fastClicksDistanceThreshold : number
            /** Minimal allowed delay (in ms) between multiple clicks. (default 50) */
            fastClicksDelayBetweenClicks : number
            /** This parameter allows to specify elements not handled by fast clicks by passing CSS selector of such elements. */
            fastClicksExclude : string
            /** . (default true) */
            disableContextMenu : boolean
            /** Enables tap hold. (default false) */
            tapHold : boolean
            /** Determines how long (in ms) the user must hold their tap before the taphold event is fired on the target element. (default 750) */
            tapHoldDelay : number
            /** When enabled (by default), then click event will not be fired after tap hold event. (default true) */
            tapHoldPreventClicks : boolean
            /** When enabled, app will add "active-state" class to currently touched (:active) element.. (default true) */
            activeState : boolean
            /** CSS selector of elements where enabled activeState will add appropriate active class. (default a, button, label, span, .actions-button) */
            activeStateElements : string
            /** Enables Material theme specific touch ripple effect. (default true) */
            materialRipple : boolean
            /** CSS selector of elements to apply touch ripple effect on click. (default .ripple, .link, .item-link, .links-list a, .button, button, .input-clear-button, .dialog-button, .tab-link, .item-radio, .item-checkbox, .actions-button, .searchbar-disable-button, .fab a, .checkbox, .radio, .data-table .sortable-cell, .notification-close-button) */
            materialRippleElements : string
        }
    }

    export interface Framework7 {
        /** App ID passed in parameters */
        id : string
        /** App name passed in parameters */
        name : string
        /** App version */
        version : string
        /** App routes */
        routes : Route[]
        /** App language */
        language : string
        /** Dom7 instance with app root element */
        root : Dom7.Dom7
        /** Boolean property indicating app is in RTL layout or not */
        rtl : boolean
        /** Current app theme. Can be md or ios */
        theme : string
        /** Object with app root data passed on intialization */
        data : any
        /** Object with app root methods */
        methods : { [name : string] : () => any }
        /** App width in px */
        width : number
        /** App height in px */
        height : number
        /** App left offset in px */
        left : number
        /** App top offset in px */
        top : number
        /** Boolean property indicating app is initialized or not */
        initialized : boolean
        /** Dom7 alias */
        $ : Dom7.Dom7Static
        /** Template7 alias */
        t7 : Template7.Template7
        /** App parameters */
        params : Framework7Params
        /** Object with properties about supported features. Check the Support utilities section */
        support : Support
        /** Object with properties about device. Check the Device utilities section */
        device : Device
        /** Object with some useful utilities. Check the Utils section */
        utils : Utils
        /** Contains methods to work with XHR requests. Check the Request utilities section */
        request : Request

        /** Add event handler */
        on(event : keyof Framework7AppEvents, handler : () => void) : void
        /** Add event handler that will be removed after it was fired */
        once(event : keyof Framework7AppEvents, handler : () => void) : void
        /** Remove event handler */
        off(event : keyof Framework7AppEvents, handler : () => void) : void
        /** Remove all handlers for specified event */
        off(event : keyof Framework7AppEvents) : void
        /** Fire event on instance */
        emit(event : keyof Framework7AppEvents, ... args : any[]) : void
        /** Initialize app. In case you disabled auto initialization with init: false parameter */
        init() : void
    }

    interface Framework7AppEvents {
        /** Event will be fired on app initialization. Automatically after new Framework7() or after app.init() if you disabled auto init. */
        'init': () => void
        /** Event will be fired on app resize (window resize). */
        'resize': () => void
        /** Event will be fired on app orientation change (window orientantion change). */
        'orientationchange': () => void
        /** Event will be fired on app click */
        'click': (event : Event) => void
        /** Event will be fired on touch start (mousedown) event added as active listener (possible to prevent default) */
        'touchstart:active': (event : Event) => void
        /** Event will be fired on touch move (mousemove) event added as active listener (possible to prevent default) */
        'touchmove:active': (event : Event) => void
        /** Event will be fired on touch end (mouseup) event added as active listener (possible to prevent default) */
        'touchend:active': (event : Event) => void
        /** Event will be fired on touch start (mousedown) event added as passive listener (impossible to prevent default) */
        'touchstart:passive': (event : Event) => void
        /** Event will be fired on touch move (mousemove) event added as passive listener (impossible to prevent default) */
        'touchmove:passive': (event : Event) => void
        /** Event will be fired on touch end (mouseup) event added as passive listener (impossible to prevent default) */
        'touchend:passive': (event : Event) => void
    }

    export interface Route {
        /** route URL */
        url : string
        /** route path */
        path : string
        /** object with route query. If the url is `/page/?id=5&foo=bar` then it will contain the following object `{id: '5', foo: 'bar'}` */
        query : { [ queryParameter : string ] : number | string | undefined }
        /** route params. If we have matching route with `/page/user/:userId/post/:postId/` path and url of the page is `/page/user/55/post/12/` then it will be the following object `{userId: '55', postId: '12'}` */
        params : { [ routeParameter : string ] : number | string | undefined }
        /** route name */
        name : string
        /** route URL hash */
        hash : string
        /** object with matching route from available routes */
        route : Route
        /** context that was passed to the route */
        context : any
    }

    export interface RouterOptions {
        url?: string;
        content?: string | HTMLElement | Dom7.Dom7 | HTMLElement[];
        pageName?: string;
        template?: (template: any) => void;
        context?: any;
        contextName?: string;
        query?: any;
        force?: boolean;
        ignoreCache?: boolean;
        animatePages?: boolean;
        reload?: boolean;
        reloadPrevious?: boolean;
        pushState?: boolean;
    }

    export interface Device {
        ios: boolean,
        android: boolean,
        androidChrome: boolean,
        desktop: boolean,
        windowsPhone: boolean,
        iphone: boolean,
        iphoneX: boolean,
        ipod: boolean,
        ipad: boolean,
        edge: boolean,
        ie: boolean,
        firefox: boolean,
        macos: boolean,
        windows: boolean,
        cordova: boolean,
        phonegap: boolean,
        os: string,
        osVersion: string,
        webview: boolean,
        minimalUi?: boolean,
        statusbar: boolean,
        pixelRatio: number,
        needsStatusbarOverlay: () => boolean
    }

    export const Device: Device;

    export interface Framework7Plugin {
        /** Module Name */
        name: string,
        /** Install callback
        It will be executed right after component is installed
        Context of this callback points to Class where it was installed */
        install: () => void,
        /** Create callback
        It will be executed in the very beginning of class initilization (when we create new instance of the class) */
        create(instance: Framework7): () => void,
        /** Object with default class/plugin parameters */
        params?: {
            [plugin_name: string]: {
                [param: string]: any
           }
        },
        /** proto object extends Class prototype */
        proto?: {
            [name: string]: any
        },
        /** Extend Class with static props and methods, e.g. Class.myMethod */
        static?: {
            [name: string]: any
        },
        /** Initialized instance Props & Methods */
        instance?: {
            [name: string]: any
        },
        /** Event handlers */
        on?: {
            [event: string]: (...params: any[]) => void
        },
        /** Handle clicks - prop name means CSS selector of element to add click handler */
        clicks?: {
            [selector: string]: ($clickedEl: HTMLElement, data: any) => void
        }
    }

    // TODO
    
    export type Request = any
    export const Request: Request;

    export type Utils = any
    export const Utils: Utils;

    export type Support = any
    export const Support: Support;

    export default Framework7;
}