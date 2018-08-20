type UnionToIntersection<U> = (U extends any ? (k : U) => void : never) extends ((k : infer I) => void) ? I : never
type PickAndFlatten<T, K extends keyof T> = UnionToIntersection<T[K]>

declare module "framework7" {
    ///
    /// BEGIN v3 organization
    ///
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

    export namespace Autocomplete {}
    export namespace Badge {}
    export namespace Block {}
    export namespace Button {}
    export namespace Calendar {}
    export namespace Datepicker {}
    export namespace Cards {}
    export namespace Checkbox {}
    export namespace Chips {}
    export namespace Tags {}
    export namespace ContactsList {}
    export namespace DataTable {}
    export namespace Dialog {}
    export namespace Elevation {}
    export namespace FloatingActionButton {}
    export namespace FormDataStorage {}
    export namespace Gauge {}
    export namespace Grid {}
    export namespace LayoutGrid {}
    export namespace Icons {}
    export namespace InfiniteScroll {}
    export namespace FormInputs {}
    export namespace LazyLoad {}
    export namespace Link {}
    export namespace ListView {}
    export namespace ListIndex {}
    export namespace LoginScreen {}
    export namespace Messagebar {}
    export namespace Messages {}
    export namespace Navbar {}
    export namespace Notification {}
    export namespace Page {}
    export namespace Panels {}
    export namespace PhotoBrowser {}
    export namespace Picker {}
    export namespace Popover {}
    export namespace Popup {}
    export namespace Preloader {}
    export namespace Progressbar {}
    export namespace PullToRefresh {}
    export namespace Radio {}
    export namespace RangeSlider {}
    export namespace Rearchbar {}
    export namespace Router {}
    export namespace SheetModal {}
    export namespace SmartSelect {}
    export namespace SortableList {}
    export namespace Statusbar {}
    export namespace Stepper {}
    export namespace Subnavbar {}
    export namespace Swiper {}
    export namespace Swipeout {}
    export namespace Tabs {}
    export namespace Timeline {}
    export namespace Toast {}
    export namespace Toggle {}
    export namespace Toolbar {}
    export namespace Tabbar {}
    export namespace Tooltip {}
    export namespace VideoIntelligence {}
    export namespace View {
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
    export namespace VirtualList {}

    ///
    /// END v3 organization
    ///

    ///
    /// BEGIN v1 stuff that hasn't been reviewed/incorporated into the new structure
    ///

    export interface PageCallbackObject {
        trigger(): void;
        remove(): void;
    }

    export interface Framework7Options {
        // Material Theme (Material theme only)
        material?: boolean;
        materialPageLoadDelay?: number;
        materialRipple?: boolean;
        materialRippleElements?: string;
        materialPreloaderHtml?: string;

        // Caching
        cache?: boolean;
        cacheDuration?: number;
        cacheIgnore?: string[];
        cacheIgnoreGetParameters?: boolean;

        // Fast clicks library
        fastClicks?: boolean;
        fastClicksDelayBetweenClicks?: number;
        fastClicksDistanceThreshold?: number;
        activeState?: boolean;
        activeStateElemets?: string;
        tapHold?: boolean;
        tapHoldDelay?: number;
        tapHoldPreventClicks?: boolean;

        // Navigation / Router
        router?: boolean;
        ajaxLinks?: string;
        dynamicPageUrl?: string;
        uniqueHistory?: boolean;
        uniqueHistoryIgnoreGetParameters?: boolean;
        externalLinks?: string;
        allowDuplicateUrls?: boolean;
        animateNavBackIcon?: boolean;
        animatePages?: boolean;
        preloadPreviousPage?: boolean;
        preroute?: (view: View, options: ViewParameters) => void;
        preprocess?: (content?: any, url?: string, next?: (resultContent: any) => void) => void;

        // Push State
        pushState?: boolean;
        pushStateSeparator?: string;
        pushStateRoot?: string;
        pushStateNoAnimation?: boolean;
        pushStatePreventOnLoad?: boolean;

        // Swipe back (iOS theme only)
        swipeBackPage?: boolean;
        swipeBackPageThreshold?: number;
        swipeBackPageActiveArea?: number;
        swipeBackPageAnimateShadow?: boolean;
        swipeBackPageAnimateOpacity?: boolean;

        // Sortable Lists
        sortable?: boolean;

        // Swipeout
        swipeout?: boolean;
        swipeoutNoFollow?: boolean;

        // Side Panels
        swipePanel?: string;
        swipePanelCloseOpposite?: boolean;
        swipePanelOnlyClose?: boolean;
        swipePanelActiveArea?: number;
        swipePanelNoFollow?: boolean;
        swipePanelThreshold?: number;
        panelsCloseByOutside?: boolean;

        // Modals
        modalTitle?: string;
        modalButtonOk?: string;
        modalButtonCancel?: string;
        modalPreloaderTitle?: string;
        modalCloseByOutside?: boolean;
        actionsCloseByOutside?: boolean;
        popupCloseByOutside?: boolean;
        modalTemplate?: string;
        modalActionsTemplate?: string;
        modalActionsToPopoverTemplate?: string;
        modalUsernamePlaceholder?: string;
        modalPasswordPlaceholder?: string;
        modalStack?: boolean;

        // Smart Select
        smartSelectOpenIn?: string;
        smartSelectBackTemplate?: string;
        smartSelectPopupCloseTemplate?: string;
        smartSelectBackText?: string;
        smartSelectPopupCloseText?: string;
        smartSelectPickerCloseText?: string;
        smartSelectSearchbar?: boolean;
        smartSelectBackOnSelect?: boolean;
        smartSelectFormTheme?: string;
        smartSelectNavbarTheme?: string;

        // Navbars / Toolbars
        hideNavbarOnPageScroll?: boolean;
        hideToolbarOnPageScroll?: boolean;
        hideTabbarOnPageScroll?: boolean;
        showBarsOnPageScrollEnd?: boolean;
        showBarsOnPageScrollTop?: boolean;
        scrollTopOnNavbarClick?: boolean;

        // Images Lazy Load
        imagesLazyLoadThreshold?: number;
        imagesLazyLoadSequential?: boolean;
        imagesLazyLoadPlaceholder?: string;

        // Notifications
        notificationTitle?: string;
        notificationSubtitle?: string;
        notificationMedia?: string;
        notificationHold?: number;
        notificationCloseOnClick?: boolean;
        notificationCloseIcon?: boolean;
        notificationCloseButtonText?: string;

        // Status Bar (iOS theme only)
        statusbarOverlay?: boolean;
        scrollTopOnStatusbarClick?: boolean;

        // Template7
        template7Pages?: boolean;
        template7Data?: any;
        precompileTemplates?: boolean;
        templates?: any;

        // Page Callbacks
        onPageBeforeInit?: (pageName: string, callback: (page: PageData) => void) => PageCallbackObject;
        onPageInit?: (pageName: string, callback: (page: PageData) => void) => PageCallbackObject;
        onPageBeforeAnimation?: (pageName: string, callback: (page: PageData) => void) => PageCallbackObject;
        onPageAfterAnimation?: (pageName: string, callback: (page: PageData) => void) => PageCallbackObject;
        onPageBeforeRemove?: (pageName: string, callback: (page: PageData) => void) => PageCallbackObject;
        onPageBack?: (pageName: string, callback: (page: PageData) => void) => PageCallbackObject;
        onPageAfterBack?: (pageName: string, callback: (page: PageData) => void) => PageCallbackObject;

        // Ajax Callbacks
        onAjaxStart?: (xhr: Dom7.Dom7XHR) => void;
        onAjaxComplete?: (xhr: Dom7.Dom7XHR) => void;

        // Namespace
        /**
        * Class name for your View element -
        * Attention! If you change following class names you will also need to change them in CSS! */
        viewClass?: string;
        /**
        * Class name for your Main View element -
        * Attention! If you change following class names you will also need to change them in CSS! */
        viewMainClass?: string;
        /**
        * Class name for your Views element -
        * Attention! If you change following class names you will also need to change them in CSS! */
        viewsClass?: string;

        // Init
        init?: boolean;
    }

    export interface ModalButton {
        text?: string;
        bold?: boolean;
        close?: boolean;
        onClick?: () => void;
    }

    export interface ActionSheetButton {
        text: string;
        bold?: boolean;
        color?: string;
        bg?: string;
        label?: boolean;
        disabled?: boolean;
        onClick?: () => void;
    }

    export interface ModalOptions {
        title?: string;
        text?: string;
        afterText?: string;
        buttons?: ModalButton[];
        verticalButtons?: boolean;
        onClick?: (modal: HTMLElement, index: number) => void;
    }

    export interface Modal {

    }

    export interface SearchBarOptions {
        searchList?: string | HTMLElement;
        searchIn?: string;
        found?: string | HTMLElement;
        notFoud?: string | HTMLElement;
        overlay?: string | HTMLElement;
        ignore?: string;
        customSearch?: boolean;
        removeDiacritics?: boolean;
        hideDividers?: boolean;
        hideGroups?: boolean;
        // Callbacks
        onSearch?: (s: SearchBar) => void;
        onEnable?: (s: SearchBar) => void;
        onDisable?: (s: SearchBar) => void;
        onClear?: (s: SearchBar) => void;
    }

    export interface SearchBar {
        params: SearchBarOptions;
        query: string;
        searchList: Dom7.Dom7;
        container: Dom7.Dom7;
        input: Dom7.Dom7;
        active: boolean;

        search(query: string): void;
        enable(): void;
        disable(): void;
        clear(): void;
        destroy(): void;
    }

    export interface ViewParameters {

        dynamicNavbar?: boolean;
        url?: string;
        domCache?: boolean;
        linksView?: string | View;

        // Navigation
        uniqueHistory?: boolean;
        uniqueHistoryIgnoreGetParameters?: boolean;
        allowDuplicateUrls?: boolean;
        animatePages?: boolean;
        preloadPreviousPage?: boolean;
        reloadPages?: boolean;
        preroute?: (view: View, options: ViewParameters) => void;
        preprocess?: (content: string, url: string, next: (result: any) => void) => void;

        // Swipe back (iOS theme only)
        swipeBackPage?: boolean;
        swipeBackPageThreshold?: number;
        swipeBackPageActiveArea?: number;
        swipeBackPageAnimateShadow?: boolean;
        swipeBackPageAnimateOpacity?: boolean;

        // Callbacks (iOS theme only)
        onSwipeBackMove?: (callbackData: any) => void;
        onSwipeBackBeforeChange?: (callbackData: any) => void;
        onSwipeBackAfterChange?: (callbackData: any) => void;
        onSwipeBackBeforeReset?: (callbackData: any) => void;
        onSwipeBackAfterReset?: (callbackData: any) => void;
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

    export interface VirtualListOptions {
        items?: any[];
        rowsBefore?: number;
        rowsAfter?: number;
        cols?: number;
        height?: number | { (item: any): number };
        template?: string | Function;
        renderItem?: (index: number, item: any) => HTMLElement;
        dynamicHeightBufferSize?: number;
        cache?: boolean;
        updatableScroll?: boolean;
        showFilteredItemsOnly?: boolean;

        // Search
        searchByItem?: (query: string, index: number, item: any) => boolean;
        searchAll?: (query: string, items: any[]) => number[];

        // Callbacks
        onItemBeforeInsert?: (list: VirtualList, item: any) => void;
        onBeforeClear?: (list: VirtualList, fragment: DocumentFragment) => void;
        onItemsBeforeInsert?: (list: VirtualList, fragment: DocumentFragment) => void;
        onItemsAfterInsert?: (list: VirtualList, fragment: DocumentFragment) => void;
    }

    export interface VirtualList {
        items: any[];
        filteredItems: any[];
        domCache: any;
        params: VirtualListOptions;
        listBlock: Dom7.Dom7;
        pageContent: Dom7.Dom7;
        currentFromIndex: number;
        currentToIndex: number;
        reachEnd: boolean;

        filterItems(indexes: number[]): VirtualList;
        resetFilter(): VirtualList;
        appendItem(item: any): VirtualList;
        appendItems(items: any[]): VirtualList;
        prependItem(item: any): VirtualList;
        prependItems(items: any[]): VirtualList;
        replaceItem(index: number, item: any): VirtualList;
        replaceAllItems(items: any[]): VirtualList;
        moveItem(oldIndex: number, newIndex: number): VirtualList;
        insertItemBefore(index: number, item: any): VirtualList;
        deleteItem(index: number): VirtualList;
        deleteItems(indexes: number[]): VirtualList;
        deleteAllItems(): VirtualList;
        clearCache(): VirtualList;
        destroy(): void;
        update(): VirtualList;
        scrollToItem(index: number): VirtualList;
    }

    export interface Router {
        load(options: RouterOptions): void;
        back(): void;
        back(options: RouterOptions): void;
        loadPage(url: string): void;
        loadContent(content: string | HTMLElement | Dom7.Dom7 | HTMLElement[]): void;
        reloadPage(url: string): void;
        reloadContent(content: string | HTMLElement | Dom7.Dom7 | HTMLElement[]): void;
        reloadPreviousPage(url: string): void;
        reloadPreviousContent(content: string | HTMLElement | Dom7.Dom7 | HTMLElement[]): void;
        refreshPage(): void;
        refreshPreviousPage(): void;
    }

    export interface PageData {
        name?: string;
        url?: string;
        query?: any;
        view?: View;
        container?: HTMLElement;
        from?: string;
        navbarInnerContainer?: HTMLElement;
        swipeBack?: boolean;
        context?: any;
        fromPage?: PageData;
    }

    export interface View {
        params: ViewParameters;
        history: string[];
        contentCache: any;
        url: string;
        pagesContainer: HTMLElement;
        activePage: PageData;
        main: boolean;
        router: Router;

        hideNavbar(): void;
        showNavbar(): void;
        hideToolbar(): void;
        showToolbar(): void;
        destroy(): void;
    }

    export interface PhotoBrowserOptions {
        photos?: { html?: string; url?: string; caption?: string }[]
        initialSlide?: number;
        spaceBetween?: number;
        speed?: number;
        zoom?: boolean;
        maxZoom?: number;
        minZoom?: number;
        exposition?: boolean;
        expositionHideCaptions?: boolean;
        swipeToClose?: boolean;
        view?: View;
        type?: string;
        loop?: boolean;
        theme?: string;
        captionsTheme?: string;
        navbar?: boolean;
        toolbar?: boolean;
        backLinkText?: string;
        ofText?: string;

        // Lazy Loading
        lazyLoading?: boolean;
        lazyLoadingInPrevNext?: boolean;
        lazyLoadingOnTransitionStart?: boolean;

        // Templates
        template?: string;
        navbarTemplate?: string;
        toolbarTemplate?: string;
        photoTemplate?: string;
        photoLazyTemplate?: string;
        objectTemplate?: string;
        captionTemplate?: string;

        // Callbacks
        onOpen?: (photobrowser: PhotoBrowser) => void;
        onClose?: (photobrowser: PhotoBrowser) => void;
        onSwipeToClose?: (photobrowser: PhotoBrowser) => void;

        // Swiper Callbacks
        onSlideChangeStart?: (swiper: Swiper) => void;
        onSlideChangeEnd?: (swiper: Swiper) => void;
        onTransitionStart?: (swiper: Swiper) => void;
        onTransitionEnd?: (swiper: Swiper) => void;
        onClick?: (swiper: Swiper, event: string) => void;
        onTap?: (swiper: Swiper, event: string) => void;
        onDoubleTap?: (swiper: Swiper, event: string) => void;
        onLazyImageLoad?: (swiper: Swiper, slide: number, image: HTMLElement) => void;
        onLazyImageReady?: (swiper: Swiper, slide: number, image: HTMLElement) => void;
    }

    export interface PhotoBrowser {
        swiper: Swiper;
        container: string | HTMLElement | Dom7.Dom7
        exposed: boolean;
        activeSlideIndex: number;
        params: PhotoBrowserOptions;

        open(index: number): void;
        close(): void;
        toggleZoom(): void;
        toggleExposition(): void;
        enableExposition(): void;
        disableExposition(): void;
    }

    export interface AutocompleteOptions {
        openIn?: string;
        source?: (autocomplete: Autocomplete, query: string, render: (results: any[]) => void) => void;
        limit?: number;
        preloader?: boolean;
        preloaderColor?: string;
        valueProperty?: string;
        textProperty?: string;

        // Standalone Autocomplete Parameters
        opener?: string | HTMLElement;
        popupCloseText?: string;
        backText?: string;
        pageTitle?: string;
        searchbarPlaceholderText?: string;
        searchbarCancelText?: string;
        notFoundText?: string;
        multiple?: boolean;
        backOnSelect?: boolean;
        navbarTheme?: string;
        formTheme?: string;

        // Dropdown Autocomplete Parameters
        input?: string | HTMLElement;
        dropdownPlaceholderText?: string;
        updateInputValueOnSelect?: boolean;
        expandInput?: boolean;

        // Callbacks
        onChange?: (autocomplete: Autocomplete, value: any[]) => void;
        onOpen?: (autocomplete: Autocomplete) => void;
        onClose?: (autocomplete: Autocomplete) => void;

        // Templates
        navbarTemplate?: string;
        itemTemplate?: string;
        dropdownTemplate?: string;
        dropdownItemTemplate?: string;
        dropdownPlaceholderTemplate?: string;
    }

    export interface Autocomplete {
        params: AutocompleteOptions;
        value: any[];
        opened: boolean;
        dropdown: Dom7.Dom7;
        popup: Dom7.Dom7;

        open(): Autocomplete;
        close(): Autocomplete;
        showPreloader(): Autocomplete;
        hidePreloader(): Autocomplete;
        destroy(): void;
    }

    export interface PickerColumnOptions {
        values?: string[];
        displayValues?: string[];
        cssClass?: string;
        textAlign?: string;
        width?: number;
        divider?: boolean;
        content?: string;

        // Callbacks
        onChange?: (p: Picker, value: string, displayValue: string) => void;
    }

    export interface PickerColumn {
        container?: Dom7.Dom7;
        items?: Dom7.Dom7;
        values: Array<any>;
        displayValues?: Array<any>;
        activeIndex?: number;
        textAlign?: string;

        setValue?(value: any, duration: number): void;
        replaceValues?(values: any[], displayValues: any[]): void;
    }

    export interface PickerOptions {
        // Common Picker Modal Component Parameters
        container?: string | HTMLElement;
        input?: string | HTMLElement;
        scrollToInput?: boolean;
        inputReadOnly?: boolean;
        convertToPopover?: boolean;
        onlyOnPopover?: boolean;
        cssClass?: string;
        closeByOutsideClick?: boolean;
        toolbar?: boolean;
        toolbarCloseText?: string;
        toolbarTemplate?: string;

        // Specific Picker Parameters
        rotateEffect?: boolean;
        momentumRatio?: number;
        updateValuesOnMomentum?: boolean;
        updateValuesOnTouchmove?: boolean;
        value?: any[];
        formatValue?: (p: Picker, values: any[], displayValues: string[]) => string;
        cols?: PickerColumn[];

        // Callbacks
        onChange?: (p: Picker, values: string[], displayValues: string[]) => void;
        onOpen?: (p: Picker) => void;
        onClose?: (p: Picker) => void;

    }

    export interface Picker {
        params: PickerOptions;
        value: any[];
        displayValue: any[];
        opened: boolean;
        inline: boolean;
        cols: PickerColumn[];
        container: Dom7.Dom7;

        setValue(values: any[], duration: number): Picker;
        open(): Picker;
        close(): Picker;
        destroy(): void;
    }

    type DateRange = Date | Date[] | { (d: Date): boolean } | { from: Date; to: Date; };
    export interface RangeClass {
        cssClass: string;
        range: DateRange;
    }

    export interface CalendarOptions {
        // Common Picker Modal Component Parameters
        container?: string | HTMLElement;
        input?: string | HTMLElement;
        scrollToInput?: boolean;
        inputReadOnly?: boolean;
        convertToPopover?: boolean;
        onlyOnPopover?: boolean;
        cssClass?: string;
        closeByOutsideClick?: boolean;
        toolbar?: boolean;
        toolbarCloseText?: string;
        toolbarTemplate?: string;

        // Specific Calendar Parameters
        value?: Date[];
        disabled?: DateRange;
        events?: DateRange;
        rangesClasses?: RangeClass[];
        formatValue?: (p: Calendar, values: Date[]) => string;
        monthNames?: string[];
        monthNamesShort?: string[];
        dayNames?: string[];
        dayNamesShort?: string[];
        updateValuesOnTouchmove?: boolean;
        firstDay?: number;
        weekendDays?: string[];
        dateFormat?: string;
        multiple?: boolean;
        rangePicker?: boolean;
        direction?: string;
        minDate?: Date;
        maxDate?: Date;
        touchmove?: boolean;
        animate?: boolean;
        closeOnSelect?: boolean;
        weekHeader?: boolean;
        monthPicker?: boolean;
        monthPickerTemplate?: string;
        yearPicker?: boolean;
        yearPickerTemplate?: string;

        // Callbacks
        onChange?: (p: Calendar, values: Date[], displayValues: string[]) => void;
        onMonthAdd?: (p: Calendar, monthContainer: HTMLElement) => void;
        onDayClick?: (p: Calendar, dayContainer: HTMLElement, year: number, month: number, day: number) => void;
        onMonthYearChangeStart?: (p: Calendar, year: number, month: number) => void;
        onMonthYearChangeEnd?: (p: Calendar, year: number, month: number) => void;
        onOpen?: (p: Calendar) => void;
        onClose?: (p: Calendar) => void;
    }

    export interface Calendar {
        params: CalendarOptions;
        value: Date[];
        opened: boolean;
        inline: boolean;
        cols: PickerColumn[];
        container: Dom7.Dom7;

        setValue(values: Date[]): Calendar;
        nextMonth(duration: number): Calendar;
        prevMonth(duration: number): Calendar;
        nextYear(): Calendar;
        prevYear(): Calendar;
        setYearMonth(year: number, month: number, duration: number): Calendar;
        open(): Calendar;
        close(): Calendar;
        destroy(): Calendar;
    }

    export interface MessageOptions {
        text?: string;
        name?: string;
        avatar?: string;
        type?: string;
        label?: string;
        day?: string;
        time?: string;
    }

    export interface Message {
    }

    export interface MessagesOptions {
        autoLayout?: boolean;
        newMessagesFirst?: boolean;
        scrollMessages?: boolean;
        scrollMessagesOnlyOnEdge?: boolean;
        messages?: Message[];
        messageTemplate?: string;
    }

    export interface Messages {
        params: MessagesOptions;
        container: Dom7.Dom7;

        addMessage(messageParameters: MessageOptions, method?: string, animate?: boolean): HTMLElement;
        appendMessage(messageParameters: MessageOptions, animate?: boolean): HTMLElement;
        prependMessage(messageParameters: MessageOptions, animate?: boolean): HTMLElement;
        addMessages(messages: Message[], method?: string, animate?: boolean): HTMLElement[];
        removeMessage(message: Message): boolean;
        removeMessages(messages: Message[]): boolean;
        scrollMessages(): void;
        layout(): void;
        clean(): void;
        destroy(): void;
    }

    export interface MessageBarOptions {
        maxHeight?: number;
    }

    export interface MessageBar {
        params: MessageBarOptions;
        container: Dom7.Dom7;
        textarea: HTMLTextAreaElement;

        value(): string;
        value(newValue?: string): MessageBar;
    }

    export interface NotificationOptions {
        title?: string;
        message?: string;
        subtitle?: string;
        media?: string;
        hold?: number;
        closeIcon?: boolean;
        button?: { text: string, color: string, close: boolean };
        closeOnClick?: boolean;
        additionalClass?: string;
        custom?: string;
        onClick?: () => void;
        onClose?: () => void;
    }
    
    export interface SwiperOptions {
        initialSlide?: number;
        direction?: string;
        speed?: number;
        setWrapperSize?: boolean;
        virtualTranslate?: boolean;
        width?: number;
        height?: number;
        autoHeight?: boolean;
        roundLengths?: boolean;
        nested?: boolean;

        // Autoplay
        autoplay?: number;
        autoplayDisableOnInteraction?: boolean;

        // Progress
        watchSlidesProgress?: boolean;
        watchSlidesVisibility?: boolean;

        // Freemode
        freeMode?: boolean;
        freeModeMomentum?: boolean;
        freeModeMomentumRatio?: number;
        freeModeMomentumBounce?: boolean;
        freeModeMomentumBounceRatio?: number;
        freeModeMinimumVelocity?: number;
        freeModeSticky?: boolean;

        // Effects
        effect?: string;
        fade?: any;
        cube?: any;
        coverflow?: any;

        // Parallax
        parallax?: boolean;

        // Slides grid
        spaceBetween?: number;
        slidesPerView?: number | string;
        slidesPerColumn?: number;
        slidesPerColumnFill?: string;
        slidesPerGroup?: number;
        centeredSlides?: boolean;
        slidesOffsetBefore?: number;
        slidesOffsetAfter?: number;

        // Grab Cursor
        grabCursor?: boolean;

        // Touches
        touchEventsTarget?: string;
        touchRatio?: number;
        touchAngle?: number;
        simulateTouch?: boolean;
        shortSwipes?: boolean;
        longSwipes?: boolean;
        longSwipesRatio?: number;
        longSwipesMs?: number;
        followFinger?: boolean;
        onlyExternal?: boolean;
        threshold?: number;
        touchMoveStopPropagation?: boolean;
        iOSEdgeSwipeDetection?: boolean;
        iOSEdgeSwipeThreshold?: number;

        // Touch Resistance
        resistance?: boolean;
        resistanceRatio?: number;

        // Clicks
        preventClicks?: boolean;
        preventClicksPropagation?: boolean;
        slideToClickedSlide?: boolean;

        // Swiping / No swiping
        allowSwipeToPrev?: boolean;
        allowSwipeToNext?: boolean;
        noSwiping?: boolean;
        noSwipingClass?: string;
        swipeHandler?: string | HTMLElement;

        // Pagination
        pagination?: string | HTMLElement;
        paginationHide?: boolean;
        paginationClickable?: boolean;
        paginationElement?: string;
        paginationBulletRender?: (index: number, className: string) => string;

        // Navigation Buttons
        nextButton?: string | HTMLElement;
        prevButton?: string | HTMLElement;

        // Accessibility
        a11y?: boolean
        prevSlideMessage?: string;
        nextSlideMessage?: string;
        firstSlideMessage?: string;
        lastSlideMessage?: string;
        paginationBulletMessage?: string;

        // Scollbar
        scrollbar?: string | HTMLElement;
        scrollbarHide?: boolean;
        scrollbarDraggable?: boolean;
        scrollbarSnapOnRelease?: boolean;

        // Keyboard / Mousewheel
        keyboardControl?: boolean;
        mousewheelControl?: boolean;
        mousewheelForceToAxis?: boolean;
        mousewheelReleaseOnEdges?: boolean;
        mousewheelInvert?: boolean;
        mousewheelSensitivity?: number;

        // Hash Navigation
        hashnav?: boolean;

        // Images
        preloadImages?: boolean;
        updateOnImagesReady?: boolean;
        lazyLoading?: boolean;
        lazyLoadingInPrevNext?: boolean;
        lazyLoadingOnTransitionStart?: boolean;

        // Loop
        loop?: boolean;
        loopAdditionalSlides?: number;
        loopedSlides?: number;

        // Controller
        control?: Swiper | Swiper[];
        controlInverse?: boolean;
        controlBy?: string;

        // Observer
        observer?: boolean;
        observeParents?: boolean;

        // Breakpoints
        breakpoints?: any;

        // Callbacks
        runCallbacksOnInit?: boolean;
        onInit?: (swiper: Swiper) => void;
        onSlideChangeStart?: (swiper: Swiper) => void;
        onSlideChangeEnd?: (swiper: Swiper) => void;
        onSlideNextStart?: (swiper: Swiper) => void;
        onSlideNextEnd?: (swiper: Swiper) => void;
        onSlidePrevStart?: (swiper: Swiper) => void;
        onSlidePrevEnd?: (swiper: Swiper) => void;
        onTransitionStart?: (swiper: Swiper) => void;
        onTransitionEnd?: (swiper: Swiper) => void;
        onTouchStart?: (swiper: Swiper, event: string) => void;
        onTouchMove?: (swiper: Swiper, event: string) => void;
        onTouchMoveOpposite?: (swiper: Swiper, event: string) => void;
        onSliderMove?: (swiper: Swiper, event: string) => void;
        onTouchEnd?: (swiper: Swiper, event: string) => void;
        onClick?: (swiper: Swiper, event: string) => void;
        onTap?: (swiper: Swiper, event: string) => void;
        onDoubleTap?: (swiper: Swiper, event: string) => void;
        onImagesReady?: (swiper: Swiper) => void;
        onProgress?: (swiper: Swiper, progress: number) => void;
        onReachBeginning?: (swiper: Swiper) => void;
        onReachEnd?: (swiper: Swiper) => void;
        onDestroy?: (swiper: Swiper) => void;
        onSetTranslate?: (swiper: Swiper, translate: boolean) => void;
        onSetTransition?: (swiper: Swiper, transition: number) => void;
        onAutoplayStart?: (swiper: Swiper) => void;
        onAutoplayStop?: (swiper: Swiper) => void;
        onLazyImageLoad?: (swiper: Swiper, slide: number, image: HTMLElement) => void;
        onLazyImageReady?: (swiper: Swiper, slide: number, image: HTMLElement) => void;

        // Namespace
        slideClass?: string
        slideActiveClass?: string
        slideVisibleClass?: string
        slideDuplicateClass?: string
        slideNextClass?: string
        slidePrevClass?: string
        wrapperClass?: string
        bulletClass?: string
        bulletActiveClass?: string
        paginationHiddenClass?: string
        buttonDisabledClass?: string
    }

    export class Swiper {
        constructor(swiperContainer: string | HTMLElement | Dom7.Dom7, parameters: SwiperOptions);

        params: SwiperOptions;
        container: Dom7.Dom7;
        wrapper: Dom7.Dom7;
        slides: Dom7.Dom7;
        bullets: Dom7.Dom7;
        width: number;
        height: number;
        translate: string;
        progress: number;
        /** Index number of currently active slide. In loop mode active index value will be always shifted on a number of looped/duplicated slides. **/
        activeIndex: number;
        previousIndex: number;
        /** Index number of currently active slide considering duplicated slides in loop mode **/
        realIndex: number;
        isBeginning: boolean;
        isEnd: boolean;
        autoplaying: boolean;
        animating: boolean;
        touches: { startX: number; startY: number; currentX: number; currentY: number; diff: any };
        clickedIndex: number;
        clickedSlide: HTMLElement;

        slideNext(runCallbacks?: boolean, speed?: number): Swiper;
        slidePrev(runCallbacks?: boolean, speed?: number): Swiper;
        slideTo(index: number, speed?: number, runCallbacks?: boolean): Swiper;
        update(updateTranslate?: boolean): Swiper;
        onResize(): Swiper;
        detachEvents(): Swiper;
        attachEvents(): Swiper;
        startAutoplay(): Swiper;
        stopAutoplay(): Swiper;
        destroy(deleteInstance?: boolean, cleanupStyles?: boolean): Swiper;
        appendSlide(...slides: Array<HTMLElement | string>): Swiper;
        prependSlide(...slides: Array<HTMLElement | string>): Swiper;
        removeSlide(slideIndex?: number): Swiper;
        removeAllSlides(): Swiper;
        setWrapperTranslate(translate?: string): Swiper;
        getWrapperTranslate(): Swiper;
        on(callback: string, handler: () => void): Swiper;
        once(callback: string, handler: () => void): Swiper;
        off(callback: string): Swiper;
        lockSwipeToNext(): Swiper;
        unlockSwipeToNext(): Swiper;
        lockSwipeToPrev(): Swiper;
        unlockSwipeToPrev(): Swiper;
        lockSwipes(): Swiper;
        unlockSwipes(): Swiper;
        disableMousewheelControl(): Swiper;
        enableMousewheelControl(): Swiper;
        disableKeyboardControl(): Swiper;
        enableKeyboardControl(): Swiper;
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

    class Framework7 {
        constructor(options?: Framework7Options);
        init(): void;

        device: Device; // https://framework7.io/docs/device-api.html

        // Views
        views: View[];
        addView(selector: string | HTMLElement | Dom7.Dom7, parameters: ViewParameters): View;
        getCurrentView(index?: number): View | View[];

        // Search Bar
        searchbar(searchbarContainer: string | HTMLElement | Dom7.Dom7, parameters: SearchBarOptions): SearchBar;

        // Side panels
        openPanel(position: string): void;
        closePanel(): void;

        // Navbar https://framework7.io/docs/navbar.html

        /** Hide specified toolbar. **/
        hideNavbar(navbar: HTMLElement, isAnimated?: boolean): void;

        /** Show specified toolbar. **/
        showNavbar(navbar: HTMLElement, isAnimated?: boolean): void;

        /** Recalculate positional styles for Navbar in selected View. Useful after you change some of Navbar elements dynamically.
         * @param viewContainer - CSS Selector string or HTMLElement. **/
        sizeNavbars(viewContainer: any): void;


        // Overlays
        alert(text: string, callbackOk?: () => void): HTMLElement;
        alert(text: string, title?: string, callbackOk?: () => void): HTMLElement;
        confirm(text: string, callbackOk?: () => void, callbackCancel?: () => void): HTMLElement;
        confirm(text: string, title?: string, callbackOk?: () => void, callbackCancel?: () => void): HTMLElement;
        prompt(text: string, callbackOk?: (input: string) => void, callbackCancel?: (input: string) => void): HTMLElement;
        prompt(text: string, title?: string, callbackOk?: (input: string) => void, callbackCancel?: (input: string) => void): HTMLElement;
        modalLogin(text: string, callbackOk?: (username: string, password: string) => void, callbackCancel?: (username: string, password: string) => void): HTMLElement;
        modalLogin(text: string, title?: string, callbackOk?: (username: string, password: string) => void, callbackCancel?: (username: string, password: string) => void): HTMLElement;
        modalPassword(text: string, callbackOk?: (password: string) => void, callbackCancel?: (password: string) => void): HTMLElement;
        modalPassword(text: string, title?: string, callbackOk?: (password: string) => void, callbackCancel?: (password: string) => void): HTMLElement;
        showPreloader(title: string): void;
        hidePreloader(): void;
        showIndicator(): void;
        hideIndicator(): void;
        modal(options: ModalOptions): HTMLElement;
        popup(content: HTMLElement | string | Dom7.Dom7, removeOnClose?: boolean): HTMLElement;
        popover(content: HTMLElement | string | Dom7.Dom7, target: HTMLElement | string | Dom7.Dom7, removeOnClose?: boolean): HTMLElement;
        closeModal(modal?: Modal | HTMLElement | string): void;
        actions(groups: ActionSheetButton[][]): void;
        actions(buttons: ActionSheetButton[]): HTMLElement;
        actions(target: HTMLElement | string | Dom7.Dom7, groups: ActionSheetButton[][]): void;
        actions(target: HTMLElement | string | Dom7.Dom7, buttons: ActionSheetButton[]): HTMLElement;
        loginScreen(loginScreen: HTMLElement | string | Dom7.Dom7, animated?: boolean): HTMLElement;
        pickerModal(picker: HTMLElement | string | Dom7.Dom7, removeOnClose?: boolean): HTMLElement;

        // Progress Bars
        setProgressbar(container: HTMLElement | string | Dom7.Dom7, progress: number, speed: number): void;
        hideProgressbar(container: HTMLElement | string | Dom7.Dom7): void;
        showProgressbar(container: HTMLElement | string | Dom7.Dom7, color: string): void;
        showProgressbar(progress: number, color: string): void;
        showProgressbar(container: HTMLElement | string | Dom7.Dom7, progress: number, color: string): void;
        showProgressbar(): void;

        // Swipeout
        swipeoutOpen(el: HTMLElement | string | Dom7.Dom7, direction: string, callback: Function): void;
        swipeoutClose(el: HTMLElement | string | Dom7.Dom7, callback: Function): void;
        swipeoutDelete(el: HTMLElement | string | Dom7.Dom7, callback: Function): void;
        swipeoutOpenedEl: HTMLElement;

        // Sortable List
        sortableOpen(sortableContainer: HTMLElement | string | Dom7.Dom7): void;
        sortableClose(sortableContainer: HTMLElement | string | Dom7.Dom7): void;
        sortableToggle(sortableContainer: HTMLElement | string | Dom7.Dom7): void;

        // Virtual List
        virtualList(listBlockContainer: HTMLElement | string | Dom7.Dom7, parameters: VirtualListOptions): VirtualList;

        // Accordian
        accordionOpen(item: HTMLElement | string | Dom7.Dom7): void;
        accordionClose(item: HTMLElement | string | Dom7.Dom7): void;
        accordionToggle(item: HTMLElement | string | Dom7.Dom7): void;

        // SmartSelect
        smartSelectOpen(smartSelect: HTMLElement | string | Dom7.Dom7): void;
        smartSelectAddOption(select: HTMLElement | string | Dom7.Dom7, optionHTML: string, index: number): void;

        // Forms
        formToJSON(form: HTMLElement | string | Dom7.Dom7): any;
        formFromJSON(form: HTMLElement | string | Dom7.Dom7, formData: Object): void;
        formGetData(formId: string): void;
        formDeleteData(formId: string): void;
        formStoreData(formId: string, formJSON: Object): void;

        // Tabs
        showTab(tab: HTMLElement | string | Dom7.Dom7): boolean;

        // Swiper
        swiper(swiperContainer: string | HTMLElement | Dom7.Dom7, parameters?: SwiperOptions): Swiper;

        // Photo Browser
        photoBrowser(parameters: PhotoBrowserOptions): PhotoBrowser;

        // Autocomplete
        autocomplete(parameters: AutocompleteOptions): Autocomplete;

        // Picker
        picker(parameters: PickerOptions): Picker;

        // Calendar/Datepicker
        calendar(parameters: CalendarOptions): Calendar;

        // Pull to Refresh
        initPullToRefresh(pageContainer: string | HTMLElement | Dom7.Dom7): void;
        pullToRefreshDone(ptrContent?: string | HTMLElement | Dom7.Dom7): void;
        pullToRefreshTrigger(ptrContent?: string | HTMLElement | Dom7.Dom7): void;
        destroyPullToRefresh(ptrContent?: string | HTMLElement | Dom7.Dom7): void;

        // Infinite Scroll
        attachInfiniteScroll(container: string | HTMLElement | Dom7.Dom7): void;
        detachInfiniteScroll(container: string | HTMLElement | Dom7.Dom7): void;

        // Messages
        messages(messagesContainer: string | HTMLElement | Dom7.Dom7, parameters: MessagesOptions): Messages;
        messagebar(messagebarContainer: string | HTMLElement | Dom7.Dom7, parameters: MessageBarOptions): MessageBar;

        // Notifications
        addNotification(parameters: NotificationOptions): void;
        closeNotification(notificationElement: string | HTMLElement | Dom7.Dom7): void;

        // not documented
        onPageBeforeInit(pageName: string, callback: (page: PageData) => void): PageCallbackObject;
        onPageInit(pageName: string, callback: (page: PageData) => void): PageCallbackObject;
        onPageReinit(pageName: string, callback: (page: PageData) => void): PageCallbackObject;
        onPageBeforeAnimation(pageName: string, callback: (page: PageData) => void): PageCallbackObject;
        onPageAfterAnimation(pageName: string, callback: (page: PageData) => void): PageCallbackObject;
        onPageBeforeRemove(pageName: string, callback: (page: PageData) => void): PageCallbackObject;
        onPageBack(pageName: string, callback: (page: PageData) => void): PageCallbackObject;
        onPageAfterBack(pageName: string, callback: (page: PageData) => void): PageCallbackObject;

        // Resizable textarea
        resizeTextarea(textarea: string | HTMLElement | Dom7.Dom7): void;
        resizableTextarea(textarea: string | HTMLElement | Dom7.Dom7): void;
        destroyResizableTextarea(pageContainer: string | HTMLElement | Dom7.Dom7): void;
        initPageResizableTextarea(pageContainer: string | HTMLElement | Dom7.Dom7): void;

        static use(module: Framework7Plugin, ...params: any[]): Framework7;
    }

    ///
    /// END v1 stuff that hasn't been reviewed/incorporated into the new structure
    ///

    // TODO
    
    export type Request = any
    export const Request: Request;

    export type Utils = any
    export const Utils: Utils;

    export type Support = any
    export const Support: Support;

    export default Framework7;
}