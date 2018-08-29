declare module "framework7-react" {
    import Framework7, { Framework7Plugin, Device, Request, Utils, Router, Route, CssSelector, View as F7View } from 'framework7'

    export const Framework7React : Framework7Plugin;
    export default Framework7React;

    export interface F7ReactComponentExtensions {
        $f7ready: (f7 : Framework7) => void
        $f7 : Framework7
        $$ : Dom7.Dom7Static
        $Dom7 : Dom7.Dom7Static
        $device : Device
        $request : Request
        $utils : Utils
        $theme : {
            ios: boolean,
            material: boolean
        }
        $f7router : Router.Router
        $f7route : Route
    }

    // Not sure 
    export interface F7Props<Slots = string> {
        slot?: string
    }

    export interface F7AppProps extends F7Props {
        params?: { [ routeParameter : string ] : number | string | undefined }
        routes?: Route[]
        id?: string
    }

    export class App extends React.Component<F7AppProps, {}> {}
    export const F7App : typeof App;

    namespace AccordionContent {
        export interface Props extends F7Props {
            /** Makes accordion item opened */
            opened?: boolean

            /** Event will be triggered when accordion content starts its opening animation */
            onAccordionOpen?: (el : HTMLElement | CssSelector) => void

            /** Event will be triggered after accordion content completes its opening animation */
            onAccordionOpened?: (el : HTMLElement | CssSelector) => void
            
            /** Event will be triggered when accordion content starts its closing animation */
            onAccordionClose?: (el : HTMLElement | CssSelector) => void

            /** Event will be triggered after accordion content completes its closing animation */
            onAccordionClosed?: (el : HTMLElement | CssSelector) => void
        }
    }

    export class AccordionContent extends React.Component<AccordionContent.Props, {}> {}
    export const F7AccordionContent : typeof AccordionContent;

    namespace AccordionItem {
        export interface Props extends F7Props {
        }
    }

    export class AccordionItem extends React.Component<AccordionItem.Props, {}> {}
    export const F7AccordionItem : typeof AccordionItem;

    namespace AccordionToggle {
        export interface Props extends F7Props {
        }
    }

    export class AccordionToggle extends React.Component<AccordionToggle.Props, {}> {}
    export const F7AccordionToggle : typeof AccordionToggle;

    namespace Accordion {
        export interface Props extends F7Props {
        }
    }

    export class Accordion extends React.Component<Accordion.Props, {}> {}
    export const F7Accordion : typeof Accordion;

    namespace ActionsButton {
        export interface Props extends F7Props {
            bold?: boolean
            close?: boolean
        }
    }

    export class ActionsButton extends React.Component<ActionsButton.Props, {}> {}
    export const F7ActionsButton : typeof ActionsButton;

    namespace ActionsGroup {
        export interface Props extends F7Props {
        }
    }

    export class ActionsGroup extends React.Component<ActionsGroup.Props, {}> {}
    export const F7ActionsGroup : typeof ActionsGroup;

    namespace ActionsLabel {
        export interface Props extends F7Props {
            bold?: boolean
        }
    }

    export class ActionsLabel extends React.Component<ActionsLabel.Props, {}> {}
    export const F7ActionsLabel : typeof ActionsLabel;

    namespace Actions {
        export interface Props extends F7Props {
            opened?: boolean
            grid?: boolean
            convertToPopover?: boolean
            forceToPopover?: boolean
            target?: HTMLElement | CssSelector

            /** Event will be triggered when accordion content starts its opening animation */
            onActionsOpen?: (el : HTMLElement | CssSelector) => void

            /** Event will be triggered after accordion content completes its opening animation */
            onActionsOpened?: (el : HTMLElement | CssSelector) => void
            
            /** Event will be triggered when accordion content starts its closing animation */
            onActionsClose?: (el : HTMLElement | CssSelector) => void

            /** Event will be triggered after accordion content completes its closing animation */
            onActionsClosed?: (el : HTMLElement | CssSelector) => void
        }
    }

    export class Actions extends React.Component<Actions.Props, {}> {
        open(animate: true) : void
        close(animate: true) : void
    }
    export const F7Actions : typeof Actions;

    namespace Badge {
        export interface Props extends F7Props {
            color?: string
        }
    }

    export class Badge extends React.Component<Badge.Props, {}> {}
    export const F7Badge : typeof Badge;

    namespace BlockFooter {
        export interface Props extends F7Props {
        }
    }

    export class BlockFooter extends React.Component<BlockFooter.Props, {}> {}
    export const F7BlockFooter : typeof BlockFooter;

    namespace BlockHeader {
        export interface Props extends F7Props {
        }
    }

    export class BlockHeader extends React.Component<BlockHeader.Props, {}> {}
    export const F7BlockHeader : typeof BlockHeader;

    namespace BlockTitle {
        export interface Props extends F7Props {
        }
    }

    export class BlockTitle extends React.Component<BlockTitle.Props, {}> {}
    export const F7BlockTitle : typeof BlockTitle;

    namespace Block {
        export interface Props extends F7Props {
            /** Makes block inset. */
            inset?: boolean
            /** Makes block inset on tablets, but not on phones. */
            tabletInset?: boolean
            /** Adds extra highlighting and padding block content. */
            strong?: boolean
            /** Makes block wrapper for accordion items. */
            accordionList?: boolean
            /** Adds additional "tabs" class to make the block tabs wrapper. */
            tabs?: boolean
            /** Adds additional "tab" class when block should be used as a Tab. */
            tab?: boolean
            /** Adds additional "tab-active" class when block used as a Tab and makes it active tab. */
            tabActive?: boolean
            /** Removes outer hairlines. */
            noHairlines?: boolean
            /** Removes outer hairlines for MD theme. */
            noHairlinesMd?: boolean
            /** Removes outer hairlines for iOS theme. */
            noHairlinesIos?: boolean
        }
    }

    export class Block extends React.Component<Block.Props, {}> {}
    export const F7Block : typeof Block;

    namespace Button {
        export interface Props extends F7Props {
            /** Enables tab link and specify CSS selector of the target tab (if specified as a string). */
            tabLink?: boolean | CssSelector
            /** Makes this tab link active. (default false) */
            tabLinkActive?: boolean
            /** Makes this button active state when used in Segmented. Must be used instead of tab-link-active. (default false) */
            active?: boolean
            /** Button text label. */
            text: string
            /** Disables fast click. */
            noFastClick: boolean
            /** Button tooltip text to show on button hover/press. */
            tooltip?: string
            /** Makes button round. (default false) */
            round?: boolean
            /** Makes button round for iOS theme only. (default false) */
            roundIos?: boolean
            /** Makes button round for MD theme only. (default false) */
            roundMd?: boolean
            /** Makes big button. (default false) */
            big?: boolean
            /** Makes big button for iOS theme only. (default false) */
            bigIos?: boolean
            /** Makes big button for MD theme only. (default false) */
            bigMd?: boolean
            /** Makes small button. (default false) */
            small?: boolean
            /** Makes small button for iOS theme only. (default false) */
            smallIos?: boolean
            /** Makes small button for MD theme only. (default false) */
            smallMd?: boolean
            /** Makes button filled color. (default false) */
            fill?: boolean
            /** Makes button filled color for iOS theme only. (default false) */
            fillIos?: boolean
            /** Makes button filled color for MD theme only. (default false) */
            fillMd?: boolean
            /** Makes button raised. Affects MD theme only. (default false) */
            raised?: boolean
            /** Makes button outline. Affects MD theme only. (default false) */
            outline?: boolean

            // <Button> icon related properties
            /** Icon size in px. */
            iconSize: string | number
            /** Icon color. One of the default colors. */
            iconColor: string
            /** Custom icon class. */
            icon: string
            /** Name of F7 Icons font icon. */
            iconF7: string
            /** Name of Material Icons font icon. */
            iconMaterial: string
            /** Name of Font Awesome font icon. */
            iconFa: string
            /** Name of Ionicons font icon. */
            iconIon: string
            /** Icon to be used in case of iOS theme is used. Consists of icon family and icon name divided by colon, e.g. f7:home or ion:home. */
            iconIos: string
            /** Icon to be used in case of MD theme is used. Consists of icon family and icon name divided by colon, e.g. material:home or fa:home. */
            iconMd: string

            // <Button> navigation/router related properties
            /** URL of the page to load. In case of boolean href="false" it won't add href tag. (default #) */
            href?: string | false
            /** Value of link target attribute, e.g. _blank, _self, etc.. */
            target: string
            /** CSS selector of the View to load the page. */
            view: string
            /** Enable to bypass Framework7's link click handler. */
            external: boolean
            /** Enables back navigation link. */
            back: boolean
            /** Force page to load and ignore previous page in history (use together with back prop). */
            force: boolean
            /** Reloads new page instead of the currently active one. */
            reloadCurrent: boolean
            /** Replace the previous page in history with the new one from route. */
            reloadPrevious: boolean
            /** Load new page and remove all previous pages from history and DOM. */
            reloadAll: boolean
            /** Disables pages animation. */
            animate: boolean
            /** Ignores caching. */
            ignoreCache: boolean
            /** Name of the page to load. */
            pageName: string
            /** Routable Tab id. */
            routeTabId: string

            // <Button> action related properties
            /** Defines panel to open. Can be left or right. */
            panelOpen: 'left' | 'right' | boolean
            /** Closes panel on click. */
            panelClose: boolean
            /** CSS selector of the action sheet to open on click. */
            actionsOpen: CssSelector | boolean
            /** CSS selector of the action sheet to close on click. Or boolean property to close currently opened action sheet. */
            actionsClose: CssSelector | boolean
            /** CSS selector of the popup to open on click. */
            popupOpen: CssSelector | boolean
            /** CSS selector of the popup to close on click. Or boolean property to close currently opened popup. */
            popupClose: CssSelector | boolean
            /** CSS selector of the popover to open on click. */
            popoverOpen: CssSelector | boolean
            /** CSS selector of the popover to close on click. Or boolean property to close currently opened popover. */
            popoverClose: CssSelector | boolean
            /** CSS selector of the sheet modal to open on click. */
            sheetOpen: CssSelector | boolean
            /** CSS selector of the sheet modal to close on click. Or boolean property to close currently opened sheet modal. */
            sheetClose: CssSelector | boolean
            /** CSS selector of the login screen to open on click. */
            loginScreenOpen: CssSelector | boolean
            /** CSS selector of the login screen to close on click. Or boolean property to close currently opened login screen. */
            loginScreenClose: CssSelector | boolean
            /** CSS selector of the Sortable list to open on click. */
            sortableEnable: CssSelector | boolean
            /** CSS selector of the Sortable list to close on click. Or boolean property to close currently opened Sortable list. */
            sortableDisable: CssSelector | boolean
            /** CSS selector of the Sortable list to toggle on click. Or boolean property to toggle currently opened/closed Sortable list. */
            sortableToggle: CssSelector | boolean
            /** CSS selector of the Expandable Searchbar to be enabled on click. Or boolean property to enable the first found Searchbar. */
            searchbarEnable: CssSelector | boolean
            /** CSS selector of the Expandable Searchbar to be disabled on click. Or boolean property to disable the first found Searchbar. */
            searchbarDisable: CssSelector | boolean
            /** CSS selector of the Expandable Searchbar to toggle on click. Or boolean property to toggle the first found Searchbar. */
            searchbarToggle: CssSelector | boolean
            /** CSS selector of the Expandable Searchbar to clear on click. Or boolean property to clear the first found Searchbar. */
            searchbarClear: CssSelector | boolean

            /** Event will be triggered after click on a button */
            onClick : () => void
        }
    }

    export class Button extends React.Component<Button.Props, {}> {}
    export const F7Button : typeof Button;

    namespace CardContent {
        export interface Props extends F7Props {
            /** Adds additional inner padding. (default true) */
            padding?: boolean
        }
    }

    export class CardContent extends React.Component<CardContent.Props, {}> {}
    export const F7CardContent : typeof CardContent;

    namespace CardFooter {
        export interface Props extends F7Props {
        }
    }

    export class CardFooter extends React.Component<CardFooter.Props, {}> {}
    export const F7CardFooter : typeof CardFooter;

    namespace CardHeader {
        export interface Props extends F7Props {
        }
    }

    export class CardHeader extends React.Component<CardHeader.Props, {}> {}
    export const F7CardHeader : typeof CardHeader;

    namespace Card {
        export interface Props extends F7Props {
            /** Card header content. */
            title?: string
            /** Card content. */
            content?: string
            /** Card footer content. */
            footer?: string
            /** Adds additional inner padding on card content. (default true) */
            padding?: boolean
            /** Makes Card outline. (default false) */
            outline?: boolean
        }
    }

    export class Card extends React.Component<Card.Props, {}> {}
    export const F7Card : typeof Card;

    namespace Checkbox {
        export interface Props extends F7Props {
            /** Defines whether the checkbox input is checked or not. */
            checked: boolean
            /** Defines whether the checkbox input is checked or not, for the case if it is uncontrolled component. */
            defaultChecked: boolean
            /** Checkbox input name. */
            name: string | number
            /** Checkbox input value. */
            value: string | number | boolean
            /** Defines whether the checkbox input is disabled. */
            disabled: boolean
            /** Defines whether the checkbox input is readonly. */
            readonly: boolean

            /** Event will be triggered when checkbox state changed */
            onChange: () => void
        }
    }

    export class Checkbox extends React.Component<Checkbox.Props, {}> {}
    export const F7Checkbox : typeof Checkbox;

    namespace Chip {
        export interface Props extends F7Props {
            /** Chip label text. */
            text: string
            /** Text content of chip media. */
            media: string
            /** Chip media element background color. One of the default colors. */
            mediaBgColor: string
            /** Chip media element text color. One of the default colors. */
            mediaTextColor: string
            /** Defines whether the Chip has additional "delete" button or not. (default false) */
            deleteable?: boolean
            /** Makes Card outline. (default false) */
            outline?: boolean

            /** Event will be triggered on Chip click */
            onClick: () => void
            /** Event will be triggered on Chip delete button click */
            onDelete: () => void
        }
    }

    export class Chip extends React.Component<Chip.Props, {}> {}
    export const F7Chip : typeof Chip;

    namespace Col {
        export interface Props extends F7Props {
            /** Column width. Check available Column Sizes. (default auto) */
            width?: number| string
            /** Column width for large screen tablets (when width >= 768px). */
            tabletWidth: number | string
            /** Column width for larger screen tablets (when width >= 1025px). */
            desktopWidth: number | string
        }
    }

    export class Col extends React.Component<Col.Props, {}> {}
    export const F7Col : typeof Col;

    namespace FabButton {
        export interface Props extends F7Props {
            /** When enabled then clicking on this button will close the FAB. (default false) */
            fabClose?: boolean
            /** Value of link target attribute, e.g. _blank, _self, etc.. */
            target: string
            /** Button text label. */
            label: string
            /** Button tooltip text to show on button hover/press. */
            tooltip: string

            /** Event will be triggered after click on FAB Speed Dial button */
            onClick: () => void
        }
    }

    export class FabButton extends React.Component<FabButton.Props, {}> {}
    export const F7FabButton : typeof FabButton;

    namespace FabButtons {
        export interface Props extends F7Props {
            /** Speed dial buttons position. (default top) */
            position?: 'top' | 'right' | 'bottom' | 'left' | 'center'
        }
    }

    export class FabButtons extends React.Component<FabButtons.Props, {}> {}
    export const F7FabButtons : typeof FabButtons;

    namespace Fab {
        export interface Props extends F7Props {
            /** URL of the page to load (if set). Will set href attribute on main FAB link. In case of boolean href="false" it won't add href tag. */
            href: string | boolean
            /** Value of link target attribute, e.g. _blank, _self, etc.. */
            target: string
            /** FAB position. Can be one of the following:. (default 'right-bottom') */
            position?: 'right-bottom' | 'center-bottom' | 'left-bottom' | 'right-center' | 'center-center' | 'left-center' | 'right-top' | 'center-top' | 'left-top'
            /** String CSS selector of the FAB morph target. */
            morphTo: string
            /** FAB Button text. If specified, then it will be displayed as Extended Fab with text label. */
            text: string
            /** FAB tooltip text to show on button hover/press. */
            tooltip: string

            /** event will be triggered after click on FAB */
            onClick: () => void
        }
    }

    export class Fab extends React.Component<Fab.Props, {}> {}
    export const F7Fab : typeof Fab;

    namespace Gauge {
        export interface Props extends F7Props {
            /** Gauge element ID attribute. */
            id: string
            /** Gauge type. Can be circle or semicircle. (default circle) */
            type?: string
            /** Gauge value/percentage. Must be a number between 0 and 1. (default 0) */
            value?: number
            /** Generated SVG image size (in px). (default 200) */
            size?: number
            /** Gauge background color. Can be any valid color string, e.g. #ff00ff, rgb(0,0,255), etc.. (default transparent) */
            bgColor?: string
            /** Main border/stroke background color. (default #eeeeee) */
            borderBgColor?: string
            /** Main border/stroke color. (default #000000) */
            borderColor?: string
            /** Main border/stroke width. (default 10) */
            borderWidth?: string
            /** Gauge value text (large text in the center of gauge). (default null) */
            valueText?: string
            /** Value text color. (default #000000) */
            valueTextColor?: string
            /** Value text font size. (default 31) */
            valueFontSize?: string
            /** Value text font weight. (default 500) */
            valueFontWeight?: string
            /** Gauge additional label text. (default null) */
            labelText?: string
            /** Label text color. (default #888888) */
            labelTextColor?: string
            /** Label text font size. (default 14) */
            labelFontSize?: string
            /** Label text font weight. (default 400) */
            labelFontWeight?: string
        }
    }

    export class Gauge extends React.Component<Gauge.Props, {}> {}
    export const F7Gauge : typeof Gauge;

    namespace Icon {
        export interface Props extends F7Props {
            /** Icon size in px. */
            size?: number | string
            /** Custom icon class. */
            icon?: string
            /** Name of F7 Icons font icon. */
            f7?: string
            /** Name of Material Icons font icon. */
            material?: string
            /** Name of Font Awesome font icon. */
            fa?: string
            /** Name of Ionicons font icon. */
            ion?: string
            /** Icon to be used in case of iOS theme is used. Consists of icon family and icon name divided by colon, e.g. f7:home or ion:home. */
            ios?: string
            /** Icon to be used in case of Material theme is used. Consists of icon family and icon name divided by colon, e.g. material:home or fa:home. */
            md?: string
            /** Icon tooltip text to show on icon hover/press. */
            tooltip?: string
        }
    }

    export class Icon extends React.Component<Icon.Props, {}> {}
    export const F7Icon : typeof Icon;

    namespace Input {
        export interface Props extends F7Props {
            /** Defines should the input be wraped with "item-input-wrap" element or not. Must be disabled when using outside of List View. (default true) */
            wrap?: boolean
            /** Input type. All default HTML5 input type, and few special ones:. */
            type: string
            /** Makes textarea resizable. (default false) */
            resizable?: boolean
            /** Value if input's "style" attribute, in case you need to pass extra styles. */
            inputStyle: string
            /** Adds input clear button that will clear input value on click. (default false) */
            clearButton?: boolean
            /** When enabled then input value will be validated on change based on passed "pattern" or based on input type. If you use custom validation and need more control on where to show/hide error message, then it is better to disable validation and use error-message together with error-message-force props.. (default false) */
            validate?: boolean
            /** Custom error message to show when input value is invalid. */
            errorMessage: string
            /** Force error message to force. Useful in case you use custom validation and want to show/hide error message when you need it. (default false) */
            errorMessageForce?: boolean
            /** Custom additional text with information about input. */
            info: string
            /** Input name. */
            name: string
            /** Input placeholder. */
            placeholder: string
            /** Wrapping element ID attribute. */
            id: string
            /** Input element ID attribute. */
            inputId: string
            /** Input value. */
            value: string | number
            /** Input value, in case of uncontrolled component. */
            defaultValue: string | number
            /** Value of input's native "size" attribute. */
            size: string | number
            /** Value of input's native "pattern" attribute. */
            pattern: string
            /** Value of input's native "accept" attribute. */
            accept: string | number
            /** Value of input's native "autocomplete" attribute. */
            autocomplete: string
            /** Value of input's native "autofocus" attribute. (default false) */
            autofocus?: boolean
            /** Value of input's native "autosave" attribute. */
            autosave: string
            /** Marks input as checked. (default false) */
            checked?: boolean
            /** Marks input as disabled. (default false) */
            disabled?: boolean
            /** Value of input's native "max" attribute. */
            max: string | number
            /** Value of input's native "min" attribute. */
            min: string | number
            /** Value of input's native "step" attribute. */
            step: string | number
            /** Value of input's native "maxlength" attribute. */
            maxlength: string | number
            /** Value of input's native "minlength" attribute. */
            minlength: string | number
            /** Value of input's native "multiple" attribute. (default false) */
            multiple?: boolean
            /** Marks input as readonly. (default false) */
            readonly?: boolean
            /** Marks input as required. (default false) */
            required?: boolean
            /** Value of input's native "tabindex" attribute. */
            tabindex: string | number
            /** Allows to ignore input value to be stored when using with Form Storage. (default false) */
            noStoreData?: boolean
            /** Same as previous. (default false) */
            ignoreStoreData?: boolean

            /** Fired when user focused to input. */
            onFocus : (event : Event) => void
            /** Fired when user lost focus from input. */
            onBlur : (event : Event) => void
            /** Fired immediately when input value changed. Note: Input event triggers after beforeinput, keypress, keyup, keydown events. */
            onInput : (event : Event) => void
            /** Fired when blur if value changed. */
            onChange : (event : Event) => void
            /** Fired when input clear button clicked */
            onInputClear : (event : Event) => void
            /** Fired if resizable textarea resized. event.detail will contain object with the initialHeight, currentHeight and scrollHeight properties */
            onTextareaResize : (event : Event) => void
            /** Fired when input value becomes empty */
            onInputEmpty : (event : Event) => void
            /** Fired when input value becomes not empty */
            onInputNotempty : (event : Event) => void
        }
    }

    export class Input extends React.Component<Input.Props, {}> {}
    export const F7Input : typeof Input;

    namespace Label {
        export interface Props extends F7Props {
            /** Enables floating label (affects MD theme only). (default false) */
            floating?: boolean
            /** Makes label inline. (default false) */
            inline?: boolean
        }
    }

    export class Label extends React.Component<Label.Props, {}> {}
    export const F7Label : typeof Label;

    namespace Link {
        export interface Props extends F7Props {
            /** Removes "link" class. */
            noLinkClass: boolean
            /** Enables tab link and specify CSS selector of the target tab (if specified as a string). */
            tabLink: string | boolean
            /** Makes this tab link active. */
            tabLinkActive: boolean
            /** Link text. */
            text: string
            /** Disables fast click. */
            noFastClick: boolean
            /** Badge count. */
            badge: string | number
            /** Badge color. One of the default colors. */
            badgeColor: string
            /** Enable when used in navbar/toolbar with icon only inside. */
            iconOnly: boolean
            /** Link tooltip text to show on link hover/press. */
            tooltip: string

            // <Link> Smart Select related properties
            /** Enables Smart Select behavior. (default false) */
            smartSelect?: boolean
            /** Object with Smart Select Parameters. */
            smartSelectParams: object

            // <Link> icon related properties
            /** Icon size in px. */
            iconSize: string | number
            /** Icon color. One of the default colors. */
            iconColor: string
            /** Custom icon class. */
            icon: string
            /** Name of F7 Icons font icon. */
            iconF7: string
            /** Name of Material Icons font icon. */
            iconMaterial: string
            /** Name of Font Awesome font icon. */
            iconFa: string
            /** Name of Ionicons font icon. */
            iconIon: string
            /** Icon to be used in case of iOS theme is used. Consists of icon family and icon name divided by colon, e.g. f7:home or ion:home. */
            iconIos: string
            /** Icon to be used in case of MD theme is used. Consists of icon family and icon name divided by colon, e.g. material:home or fa:home. */
            iconMd: string
            /** Adds badge to the icon (intended to be used in Tabbar's icons). */
            iconBadge: string | number

            //<Link> navigation/router related properties
            /** URL of the page to load. In case of boolean href="false" it won't add href tag. (default #) */
            href?: string | boolean
            /** Value of link target attribute, e.g. _blank, _self, etc.. */
            target: string
            /** CSS selector of the View to load the page. */
            view: string
            /** Enable to bypass Framework7's link click handler. */
            external: boolean
            /** Enables back navigation link. */
            back: boolean
            /** Force page to load and ignore previous page in history (use together with back prop). */
            force: boolean
            /** Reloads new page instead of the currently active one. */
            reloadCurrent: boolean
            /** Replace the previous page in history with the new one from route. */
            reloadPrevious: boolean
            /** Load new page and remove all previous pages from history and DOM. */
            reloadAll: boolean
            /** Disables pages animation. */
            animate: boolean
            /** Ignores caching. */
            ignoreCache: boolean
            /** Name of the page to load. */
            pageName: string
            /** Routable Tab id. */
            routeTabId: string

            // <Link> action related properties
            /** Defines panel to open. Can be left or right. */
            panelOpen: string | boolean
            /** Closes panel on click. */
            panelClose: boolean
            /** CSS selector of the action sheet to open on click. */
            actionsOpen: string | boolean
            /** CSS selector of the action sheet to close on click. Or boolean property to close currently opened action sheet. */
            actionsClose: string | boolean
            /** CSS selector of the popup to open on click. */
            popupOpen: string | boolean
            /** CSS selector of the popup to close on click. Or boolean property to close currently opened popup. */
            popupClose: string | boolean
            /** CSS selector of the popover to open on click. */
            popoverOpen: string | boolean
            /** CSS selector of the popover to close on click. Or boolean property to close currently opened popover. */
            popoverClose: string | boolean
            /** CSS selector of the sheet modal to open on click. */
            sheetOpen: string | boolean
            /** CSS selector of the sheet modal to close on click. Or boolean property to close currently opened sheet modal. */
            sheetClose: string | boolean
            /** CSS selector of the login screen to open on click. */
            loginScreenOpen: string | boolean
            /** CSS selector of the login screen to close on click. Or boolean property to close currently opened login screen. */
            loginScreenClose: string | boolean
            /** CSS selector of the Sortable list to open on click. */
            sortableEnable: string | boolean
            /** CSS selector of the Sortable list to close on click. Or boolean property to close currently opened Sortable list. */
            sortableDisable: string | boolean
            /** CSS selector of the Sortable list to toggle on click. Or boolean property to toggle currently opened/closed Sortable list. */
            sortableToggle: string | boolean
            /** CSS selector of the Expandable Searchbar to be enabled on click. Or boolean property to enable the first found Searchbar. */
            searchbarEnable: string | boolean
            /** CSS selector of the Expandable Searchbar to be disabled on click. Or boolean property to disable the first found Searchbar. */
            searchbarDisable: string | boolean
            /** CSS selector of the Expandable Searchbar to toggle on click. Or boolean property to toggle the first found Searchbar. */
            searchbarToggle: string | boolean
            /** CSS selector of the Expandable Searchbar to clear on click. Or boolean property to clear the first found Searchbar. */
            searchbarClear: string | boolean

            /** Event will be triggered after click on a link */
            onClick: () => void
        }
    }

    export class Link extends React.Component<Link.Props, {}> {}
    export const F7Link : typeof Link;

    namespace ListButton {
        export interface Props extends F7Props {
            /** Button inner text. */
            title: string
            /** Button inner text, same as title. */
            text: string
            /** Enables tab link and specify CSS selector of the target tab (if specified as a string). */
            tabLink: string | boolean
            /** Disables fast click. */
            noFastClick: boolean

            // <ListButton> navigation/router related properties
            /** URL of the page to load. In case of boolean href="false" it won't add href tag. (default #) */
            href?: string | boolean
            /** Value of link target attribute, e.g. _blank, _self, etc.. */
            target: string
            /** CSS selector of the View to load the page. */
            view: string
            /** Enable to bypass Framework7's link click handler. */
            external: boolean
            /** Enables back navigation link. */
            back: boolean
            /** Force page to load and ignore previous page in history (use together with back prop). */
            force: boolean
            /** Reloads new page instead of the currently active one. */
            reloadCurrent: boolean
            /** Replace the previous page in history with the new one from route. */
            reloadPrevious: boolean
            /** Load new page and remove all previous pages from history and DOM. */
            reloadAll: boolean
            /** Disables pages animation. */
            animate: boolean
            /** Ignores caching. */
            ignoreCache: boolean
            /** Name of the page to load. */
            pageName: string
            /** Routable Tab id. */
            routeTabId: string

            // <ListButton> action related properties
            /** Defines panel to open. Can be left or right. */
            panelOpen: CssSelector | boolean
            /** Closes panel on click. */
            panelClose: boolean
            /** CSS selector of the action sheet to open on click. */
            actionsOpen: CssSelector | boolean
            /** CSS selector of the action sheet to close on click. Or boolean property to close currently opened action sheet. */
            actionsClose: CssSelector | boolean
            /** CSS selector of the popup to open on click. */
            popupOpen: CssSelector | boolean
            /** CSS selector of the popup to close on click. Or boolean property to close currently opened popup. */
            popupClose: CssSelector | boolean
            /** CSS selector of the popover to open on click. */
            popoverOpen: CssSelector | boolean
            /** CSS selector of the popover to close on click. Or boolean property to close currently opened popover. */
            popoverClose: CssSelector | boolean
            /** CSS selector of the sheet modal to open on click. */
            sheetOpen: CssSelector | boolean
            /** CSS selector of the sheet modal to close on click. Or boolean property to close currently opened sheet modal. */
            sheetClose: CssSelector | boolean
            /** CSS selector of the login screen to open on click. */
            loginScreenOpen: CssSelector | boolean
            /** CSS selector of the login screen to close on click. Or boolean property to close currently opened login screen. */
            loginScreenClose: CssSelector | boolean
            /** CSS selector of the Sortable list to open on click. */
            sortableEnable: CssSelector | boolean
            /** CSS selector of the Sortable list to close on click. Or boolean property to close currently opened Sortable list. */
            sortableDisable: CssSelector | boolean
            /** CSS selector of the Sortable list to toggle on click. Or boolean property to toggle currently opened/closed Sortable list. */
            sortableToggle: CssSelector | boolean
            /** CSS selector of the Expandable Searchbar to be enabled on click. Or boolean property to enable the first found Searchbar. */
            searchbarEnable: CssSelector | boolean
            /** CSS selector of the Expandable Searchbar to be disabled on click. Or boolean property to disable the first found Searchbar. */
            searchbarDisable: CssSelector | boolean
            /** CSS selector of the Expandable Searchbar to toggle on click. Or boolean property to toggle the first found Searchbar. */
            searchbarToggle: CssSelector | boolean
            /** CSS selector of the Expandable Searchbar to clear on click. Or boolean property to clear the first found Searchbar. */
            searchbarClear: CssSelector | boolean
            
            /** Event will be triggered after click on a button */
            onClick: () => void
        }
    }

    export class ListButton extends React.Component<ListButton.Props, {}> {}
    export const F7ListButton : typeof ListButton;

    namespace ListGroup {
        export interface Props extends F7Props {
            /** Enables Media List for this group. (default false) */
            mediaList?: boolean
            /** Enables Sortable List for this group. (default false) */
            sortable?: boolean
            /** Enables simplified Simple List for this group. (default false) */
            simpleList?: boolean
        }
    }

    export class ListGroup extends React.Component<ListGroup.Props, {}> {}
    export const F7ListGroup : typeof ListGroup;

    namespace ListIndex {
        export interface Props extends F7Props {
        }
    }

    export class ListIndex extends React.Component<ListIndex.Props, {}> {}
    export const F7ListIndex : typeof ListIndex;

    namespace ListItemCell {
        export interface Props extends F7Props {
        }
    }

    export class ListItemCell extends React.Component<ListItemCell.Props, {}> {}
    export const F7ListItemCell : typeof ListItemCell;

    namespace ListItemContent {
        export interface Props extends F7Props {
        }
    }

    export class ListItemContent extends React.Component<ListItemContent.Props, {}> {}
    export const F7ListItemContent : typeof ListItemContent;

    namespace ListItemRow {
        export interface Props extends F7Props {
        }
    }

    export class ListItemRow extends React.Component<ListItemRow.Props, {}> {}
    export const F7ListItemRow : typeof ListItemRow;

    namespace ListItem {
        export interface Props extends F7Props {
            // <ListItem> properties
            /** List item title. */
            title: string
            /** List item subtitle (only for Media List). */
            subtitle: string
            /** List item text (only for Media List). */
            text: string
            /** List item header text. */
            header: string
            /** List item footer text. */
            footer: string
            /** List item media image URL. */
            media: string
            /** List item label. */
            after: string
            /** List item Badge. */
            badge: string | number
            /** List item Badge color. One of the default colors. */
            badgeColor: string
            /** Enables Media list item for the current list item. */
            mediaItem: boolean
            /** Converts list item to list item divider. */
            divider: boolean
            /** Converts list item to list group title. */
            groupTitle: boolean
            /** Disables fast click. */
            noFastClick: boolean
            /** List item link target attribute. */
            target: boolean
            
            // <ListItem> Form inputs specific properties: 
            /** Enables inline-styled labels for Form Inputs. By default inherirt inlineLabels prop on parent <List>. (default false) */
            inlineLabel?: boolean
            /** Enables additional styling for Form Inputs inside. By default will try to detect based on content. (default false) */
            itemInput?: boolean
            /** Enables additional styling for Form Inputs with additional info. By default will try to detect based on content. (default false) */
            itemInputWithInfo?: boolean
            
            // <ListItem> Swipeout specific properties: 
            /** Converts list item to swipeout list item. */
            swipeout: boolean
            /** Defines whether swipe actions should be opened or not. Note, only one swipeout item can be opened at same time. */
            swipeoutOpened: boolean
            
            // <ListItem> Accordion specific properties: 
            /** Converts list item to accordion list item. (default false) */
            accordionItem?: boolean
            /** Makes accordion item opened. (default false) */
            accordionItemOpened?: boolean
            
            // <ListItem> Smart Select specific properties: 
            /** Enables Smart Select behavior. (default false) */
            smartSelect?: boolean
            /** Object with Smart Select Parameters. */
            smartSelectParams: object
            
            // <ListItem> Checkboxes & Radios specific properties: 
            /** Enables checkbox-item. (default false) */
            checkbox?: boolean
            /** Enables radio-item. (default false) */
            radio?: boolean
            /** Whether the checkbox/radio input is checked. (default false) */
            checked?: boolean
            /** Defines whether the checkbox input is checked or not, for the case if it is uncontrolled component. */
            defaultChecked: boolean
            /** Checkbox/radio input name. */
            name: string
            /** Checkbox/radio input value. */
            value: string | number
            /** Whether the checkbox/radio input is readonly. (default false) */
            readonly?: boolean
            /** Whether the checkbox/radio input is disabled. (default false) */
            disabled?: boolean
            /** Whether the checkbox/radio input is required. (default false) */
            required?: boolean
            
            // <ListItem> navigation/router related properties: 
            /** Enables link and link URL if specified as string. Same as href prop. */
            link: boolean | string
            /** URL of the page to load. In case of boolean href="false" it won't add href tag. (default #) */
            href?: string | boolean
            /** CSS selector of the View to load the page. */
            view: string
            /** Enable to bypass Framework7's link click handler. */
            external: boolean
            /** Enables back navigation link. */
            back: boolean
            /** Force page to load and ignore previous page in history (use together with back prop). */
            force: boolean
            /** Reloads new page instead of the currently active one. */
            reloadCurrent: boolean
            /** Replace the previous page in history with the new one from route. */
            reloadPrevious: boolean
            /** Load new page and remove all previous pages from history and DOM. */
            reloadAll: boolean
            /** Disables pages animation. */
            animate: boolean
            /** Ignores caching. */
            ignoreCache: boolean
            /** Name of the page to load. */
            pageName: string
            /** Routable Tab id. */
            routeTabId: string

            // <ListItem> action related properties: 
            /** Defines panel to open. Can be left or right. */
            panelOpen: string | boolean
            /** Closes panel on click. */
            panelClose: boolean
            /** CSS selector of the action sheet to open on click. */
            actionsOpen: string | boolean
            /** CSS selector of the action sheet to close on click. Or boolean property to close currently opened action sheet. */
            actionsClose: string | boolean
            /** CSS selector of the popup to open on click. */
            popupOpen: string | boolean
            /** CSS selector of the popup to close on click. Or boolean property to close currently opened popup. */
            popupClose: string | boolean
            /** CSS selector of the popover to open on click. */
            popoverOpen: string | boolean
            /** CSS selector of the popover to close on click. Or boolean property to close currently opened popover. */
            popoverClose: string | boolean
            /** CSS selector of the sheet modal to open on click. */
            sheetOpen: string | boolean
            /** CSS selector of the sheet modal to close on click. Or boolean property to close currently opened sheet modal. */
            sheetClose: string | boolean
            /** CSS selector of the login screen to open on click. */
            loginScreenOpen: string | boolean
            /** CSS selector of the login screen to close on click. Or boolean property to close currently opened login screen. */
            loginScreenClose: string | boolean
            /** CSS selector of the Sortable list to open on click. */
            sortableEnable: string | boolean
            /** CSS selector of the Sortable list to close on click. Or boolean property to close currently opened Sortable list. */
            sortableDisable: string | boolean
            /** CSS selector of the Sortable list to toggle on click. Or boolean property to toggle currently opened/closed Sortable list. */
            sortableToggle: string | boolean
            /** CSS selector of the Expandable Searchbar to be enabled on click. Or boolean property to enable the first found Searchbar. */
            searchbarEnable: string | boolean
            /** CSS selector of the Expandable Searchbar to be disabled on click. Or boolean property to disable the first found Searchbar. */
            searchbarDisable: string | boolean
            /** CSS selector of the Expandable Searchbar to toggle on click. Or boolean property to toggle the first found Searchbar. */
            searchbarToggle: string | boolean
            /** CSS selector of the Expandable Searchbar to clear on click. Or boolean property to clear the first found Searchbar. */
            searchbarClear: string | boolean

            // event
            /** Event will be triggeres when user clicks on list item */
            onClick: () => void
            /** Event will be triggeres when "change" event occurs on list item input (radio or checkbox) */
            onChange: () => void
            /** Event will be triggered while you move swipeout element. event.detail.progress contains current opened progress percentage */
            onSwipeout: () => void
            /** Event will be triggered when swipeout element starts its opening animation */
            onSwipeoutOpen: () => void
            /** Event will be triggered after swipeout element completes its opening animation */
            onSwipeoutOpened: () => void
            /** Event will be triggered when swipeout element starts its closing animation */
            onSwipeoutClose: () => void
            /** Event will be triggered after swipeout element completes its closing animation */
            onSwipeoutClosed: () => void
            /** Event will be triggered after swipeout element starts its delete animation */
            onSwipeoutDelete: () => void
            /** Event will be triggered after swipeout element completes its delete animation right before it will be removed from DOM */
            onSwipeoutDeleted: () => void
            /** Event will be triggered when accordion content starts its opening animation. */
            onAccordionOpen: () => void
            /** Event will be triggered after accordion content completes its opening animation. */
            onAccordionOpened: () => void
            /** Event will be triggered when accordion content starts its closing animation. */
            onAccordionClose: () => void
            /** Event will be triggered after accordion content completes its closing animation. */
            onAccordionClosed: () => void
        }
    }

    export class ListItem extends React.Component<ListItem.Props, {}> {}
    export const F7ListItem : typeof ListItem;

    namespace List {
        export interface Props extends F7Props {
            /** Makes list block inset. (default false) */
            inset?: boolean
            /** Makes block inset on tablets, but not on phones. (default false) */
            tabletInset?: boolean
            /** Enables Media List. (default false) */
            mediaList?: boolean
            /** Enables simplified Links List. (default false) */
            linksList?: boolean
            /** Enables simplified Simple List. (default false) */
            simpleList?: boolean
            /** Enables Sortable List. (default false) */
            sortable?: boolean
            /** Enables sorting on sortable list. (default false) */
            sortableEnabled?: boolean
            /** Enables Accordion List. (default false) */
            accordion?: boolean
            /** Enables Contacts List by adding required addional classes for styling. (default false) */
            contactsList?: boolean
            /** Enables <form> tag on list block instead of <div>. (default false) */
            form?: boolean
            /** Enables form storage for the current form. (default false) */
            formStoreData?: boolean
            /** Enables inline-styled labels for Form Inputs. (default false) */
            inlineLabels?: boolean
            /** Removes outer hairlines. (default false) */
            noHairlines?: boolean
            /** Removes outer hairlines for MD theme. (default false) */
            noHairlinesMd?: boolean
            /** Removes outer hairlines for iOS theme. (default false) */
            noHairlinesIos?: boolean
            /** Removes inner hairlines between items. (default false) */
            noHairlinesBetween?: boolean
            /** Removes inner hairlines between items for MD theme. (default false) */
            noHairlinesBetweenMd?: boolean
            /** Removes inner hairlines between items for iOS theme. (default false) */
            noHairlinesBetweenIos?: boolean
            /** Adds additional "tab" class when block should be used as a Tab. (default false) */
            tab?: boolean
            /** Adds additional "tab-active" class when block used as a Tab and makes it active tab. (default false) */
            tabActive?: boolean
            /** Enables Virtual List. (default false) */
            virtualList?: boolean
            /** Object with Virtual List Parameters. */
            virtualListParams: object

            // <List> events
            /** Event will be triggered when List Block-Tab becomes visible/active */
            onTabShow() : void
            /** Event will be triggered when List Block-Tab becomes invisible/inactive */
            onTabHide() : void
            /** Event will be triggered on list-form submit when list used as form (with enabled form prop) */
            onSubmit() : void

            // <List> Sortable specific events
            /** Event will be triggered when sortable mode is enabled */
            sortableEnable() : void
            /** Event will be triggered when sortable mode is disabled */
            sortableDisable() : void
            /** Event will be triggered after user release currently sorting element in new position. event.detail will contain object with from and to properties with start/new index numbers of sorted list item */
            sortableSort() : void

            // <List> Virtual List specific events
            /** Event will be triggered before item will be added to virtual document fragment */
            virtualItemBeforeInsert() : void
            /** Event will be triggered after current DOM list will be removed and before new document will be inserted */
            virtualItemsBeforeInsert() : void
            /** Event will be triggered after new document fragment with items inserted */
            virtualItemsAfterInsert() : void
            /** Event will be triggered before current DOM list will be removed and replaced with new document fragment */
            virtualBeforeClear() : void
        }
    }

    export class List extends React.Component<List.Props, {}> {}
    export const F7List : typeof List;

    namespace LoginScreenTitle {
        export interface Props extends F7Props {
        }
    }

    export class LoginScreenTitle extends React.Component<LoginScreenTitle.Props, {}> {}
    export const F7LoginScreenTitle : typeof LoginScreenTitle;

    namespace LoginScreen {
        export interface Props extends F7Props {
        }
    }

    export class LoginScreen extends React.Component<LoginScreen.Props, {}> {}
    export const F7LoginScreen : typeof LoginScreen;

    namespace Message {
        export interface Props extends F7Props {
        }
    }

    export class Message extends React.Component<Message.Props, {}> {}
    export const F7Message : typeof Message;

    namespace MessagebarAttachment {
        export interface Props extends F7Props {
        }
    }

    export class MessagebarAttachment extends React.Component<MessagebarAttachment.Props, {}> {}
    export const F7MessagebarAttachment : typeof MessagebarAttachment;

    namespace MessagebarAttachments {
        export interface Props extends F7Props {
        }
    }

    export class MessagebarAttachments extends React.Component<MessagebarAttachments.Props, {}> {}
    export const F7MessagebarAttachments : typeof MessagebarAttachments;

    namespace MessagebarSheetImage {
        export interface Props extends F7Props {
        }
    }

    export class MessagebarSheetImage extends React.Component<MessagebarSheetImage.Props, {}> {}
    export const F7MessagebarSheetImage : typeof MessagebarSheetImage;

    namespace MessagebarSheetItem {
        export interface Props extends F7Props {
        }
    }

    export class MessagebarSheetItem extends React.Component<MessagebarSheetItem.Props, {}> {}
    export const F7MessagebarSheetItem : typeof MessagebarSheetItem;

    namespace MessagebarSheet {
        export interface Props extends F7Props {
        }
    }

    export class MessagebarSheet extends React.Component<MessagebarSheet.Props, {}> {}
    export const F7MessagebarSheet : typeof MessagebarSheet;

    namespace Messagebar {
        export interface Props extends F7Props {
        }
    }

    export class Messagebar extends React.Component<Messagebar.Props, {}> {}
    export const F7Messagebar : typeof Messagebar;

    namespace MessagesTitle {
        export interface Props extends F7Props {
        }
    }

    export class MessagesTitle extends React.Component<MessagesTitle.Props, {}> {}
    export const F7MessagesTitle : typeof MessagesTitle;

    namespace Messages {
        export interface Props extends F7Props {
        }
    }

    export class Messages extends React.Component<Messages.Props, {}> {}
    export const F7Messages : typeof Messages;

    namespace NavLeft {
        export interface Props extends F7Props {
        }
    }

    export class NavLeft extends React.Component<NavLeft.Props, {}> {}
    export const F7NavLeft : typeof NavLeft;

    namespace NavRight {
        export interface Props extends F7Props {
        }
    }

    export class NavRight extends React.Component<NavRight.Props, {}> {}
    export const F7NavRight : typeof NavRight;

    namespace NavTitle {
        export interface Props extends F7Props {
        }
    }

    export class NavTitle extends React.Component<NavTitle.Props, {}> {}
    export const F7NavTitle : typeof NavTitle;

    namespace Navbar {
        export interface Props extends F7Props {
        }
    }

    export class Navbar extends React.Component<Navbar.Props, {}> {}
    export const F7Navbar : typeof Navbar;

    namespace PageContent {
        export interface Props extends F7Props {
            ptr?:boolean
            ptrDistance?:number
            ptrPreloader?:boolean
            infinite?:boolean
            infiniteTop?:boolean
            infiniteDistance?:boolean
            infinitePreloader?:boolean
            hideBarsOnScroll?:boolean
            hideNavbarOnScroll?:boolean
            hideToolbarOnScroll?:boolean
            messagesContent?:boolean
            loginScreen?:boolean

            tabShow?: () => void
            tabHide?: () => void
            onPtrPullStart?: () => void
            onPtrPullMove?: () => void
            onPtrPullEnd?: () => void
            onPtrRefresh?: () => void
            onPtrDone?: () => void
            onInfinite?: () => void
        }
    }

    export class PageContent extends React.Component<PageContent.Props, {}> {}
    export const F7PageContent : typeof PageContent;

    namespace Page {
        export interface Props extends F7Props {
            name?:string
            stacked?:boolean
            messagesContent?:boolean
            pageContent?:boolean
            tabs?:boolean
            loginScreen?:boolean
            noSwipeback?:boolean
            withSubnavbar?:boolean
            noNavbar?:boolean
            noToolbar?:boolean
            hideBarsOnScroll?:boolean
            hideNavbarOnScroll?:boolean
            hideToolbarOnScroll?:boolean
            ptr?:boolean
            ptrDistance?:number
            ptrPreloader?:boolean
            infinite?:boolean
            infiniteTop?:boolean
            infiniteDistance?:boolean
            infinitePreloader?:boolean

            onPageMounted? : () => void
            onPageInit? : () => void
            onPageReinit? : () => void
            onPageBeforeIn? : () => void
            onPageAfterIn? : () => void
            onPageBeforeOut? : () => void
            onPageAfterOut? : () => void
            onPageBeforeRemove? : () => void
            onPtrPullStart? : () => void
            onPtrPullMove? : () => void
            onPtrPullEnd? : () => void
            onPtrRefresh? : () => void
            onPtrDone? : () => void
            onInfinite? : () => void
        }
    }

    export class Page extends React.Component<Page.Props, {}> {}
    export const F7Page : typeof Page;

    namespace Panel {
        export interface Props extends F7Props {
        }
    }

    export class Panel extends React.Component<Panel.Props, {}> {}
    export const F7Panel : typeof Panel;

    namespace PhotoBrowser {
        export interface Props extends F7Props {
        }
    }

    export class PhotoBrowser extends React.Component<PhotoBrowser.Props, {}> {}
    export const F7PhotoBrowser : typeof PhotoBrowser;

    namespace Popover {
        export interface Props extends F7Props {
        }
    }

    export class Popover extends React.Component<Popover.Props, {}> {}
    export const F7Popover : typeof Popover;

    namespace Popup {
        export interface Props extends F7Props {
        }
    }

    export class Popup extends React.Component<Popup.Props, {}> {}
    export const F7Popup : typeof Popup;

    namespace Preloader {
        export interface Props extends F7Props {
        }
    }

    export class Preloader extends React.Component<Preloader.Props, {}> {}
    export const F7Preloader : typeof Preloader;

    namespace Progressbar {
        export interface Props extends F7Props {
        }
    }

    export class Progressbar extends React.Component<Progressbar.Props, {}> {}
    export const F7Progressbar : typeof Progressbar;

    namespace Radio {
        export interface Props extends F7Props {
        }
    }

    export class Radio extends React.Component<Radio.Props, {}> {}
    export const F7Radio : typeof Radio;

    namespace Range {
        export interface Props extends F7Props {
        }
    }

    export class Range extends React.Component<Range.Props, {}> {}
    export const F7Range : typeof Range;

    namespace RoutableModals {
        export interface Props extends F7Props {
        }
    }

    export class RoutableModals extends React.Component<RoutableModals.Props, {}> {}
    export const F7RoutableModals : typeof RoutableModals;

    namespace Row {
        export interface Props extends F7Props {
            /** Removes spacing between columns. (default false) */
            noGap?: boolean
            /** Defines which tag must be used to render row element. (default div) */
            tag?: string
        }
    }

    export class Row extends React.Component<Row.Props, {}> {}
    export const F7Row : typeof Row;

    namespace Searchbar {
        export interface Props extends F7Props {
        }
    }

    export class Searchbar extends React.Component<Searchbar.Props, {}> {}
    export const F7Searchbar : typeof Searchbar;

    namespace Segmented {
        export interface Props extends F7Props {
            /** Makes segmented raised. Affects MD theme only. (default false) */
            raised?: boolean
            /** Makes segmented round. (default false) */
            round?: boolean
            /** Tag used to render Segmented element. (default div) */
            tag?: string
        }
    }

    export class Segmented extends React.Component<Segmented.Props, {}> {}
    export const F7Segmented : typeof Segmented;

    namespace Sheet {
        export interface Props extends F7Props {
        }
    }

    export class Sheet extends React.Component<Sheet.Props, {}> {}
    export const F7Sheet : typeof Sheet;

    namespace Statusbar {
        export interface Props extends F7Props {
        }
    }

    export class Statusbar extends React.Component<Statusbar.Props, {}> {}
    export const F7Statusbar : typeof Statusbar;

    namespace Stepper {
        export interface Props extends F7Props {
        }
    }

    export class Stepper extends React.Component<Stepper.Props, {}> {}
    export const F7Stepper : typeof Stepper;

    namespace Subnavbar {
        export interface Props extends F7Props {
        }
    }

    export class Subnavbar extends React.Component<Subnavbar.Props, {}> {}
    export const F7Subnavbar : typeof Subnavbar;

    namespace SwipeoutActions {
        export interface Props extends F7Props {
        }
    }

    export class SwipeoutActions extends React.Component<SwipeoutActions.Props, {}> {}
    export const F7SwipeoutActions : typeof SwipeoutActions;

    namespace SwipeoutButton {
        export interface Props extends F7Props {
        }
    }

    export class SwipeoutButton extends React.Component<SwipeoutButton.Props, {}> {}
    export const F7SwipeoutButton : typeof SwipeoutButton;

    namespace SwiperSlide {
        export interface Props extends F7Props {
        }
    }

    export class SwiperSlide extends React.Component<SwiperSlide.Props, {}> {}
    export const F7SwiperSlide : typeof SwiperSlide;

    namespace Swiper {
        export interface Props extends F7Props {
        }
    }

    export class Swiper extends React.Component<Swiper.Props, {}> {}
    export const F7Swiper : typeof Swiper;

    namespace Tab {
        export interface Props extends F7Props {
        }
    }

    export class Tab extends React.Component<Tab.Props, {}> {}
    export const F7Tab : typeof Tab;

    namespace Tabs {
        export interface Props extends F7Props {
        }
    }

    export class Tabs extends React.Component<Tabs.Props, {}> {}
    export const F7Tabs : typeof Tabs;

    namespace Toggle {
        export interface Props extends F7Props {
        }
    }

    export class Toggle extends React.Component<Toggle.Props, {}> {}
    export const F7Toggle : typeof Toggle;

    namespace Toolbar {
        export interface Props extends F7Props {
        }
    }

    export class Toolbar extends React.Component<Toolbar.Props, {}> {}
    export const F7Toolbar : typeof Toolbar;

    namespace View {
        export interface Props extends F7Props, Partial<F7View.Parameters> {
            init?: boolean
            tab?: boolean
            tabActive?: boolean

            /** Event will be triggered during swipe back move */
            swipebackMove? : () => void
            /** Event will be triggered right before swipe back animation to previous page when you release it */
            swipeBackBeforeChange? : () => void
            /** Event will be triggered after swipe back animation to previous page when you release it */
            swipeBackAfterChange? : () => void
            /** Event will be triggered right before swipe back animation to current page when you release it */
            swipeBackBeforeReset? : () => void
            /** Event will be triggered after swipe back animation to current page when you release it */
            swipeBackAfterReset? : () => void
            /** Event will be triggered when View-Tab becomes visible/active */
            tabShow? : () => void
            /** Event will be triggered when View-Tab becomes invisible/inactive */
            tabHide? : () => void
        }
    }

    export class View extends React.Component<View.Props, {}> {}
    export const F7View : typeof View;

    namespace Views {
        export interface Props extends F7Props {
            tabs?: boolean
        }
    }

    export class Views extends React.Component<Views.Props, {}> {}
    export const F7Views : typeof Views;
}