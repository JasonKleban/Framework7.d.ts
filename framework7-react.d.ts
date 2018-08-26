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

    export interface F7Props {
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
        }
    }

    export class Block extends React.Component<Block.Props, {}> {}
    export const F7Block : typeof Block;

    namespace Button {
        export interface Props extends F7Props {
        }
    }

    export class Button extends React.Component<Button.Props, {}> {}
    export const F7Button : typeof Button;

    namespace CardContent {
        export interface Props extends F7Props {
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
        }
    }

    export class Card extends React.Component<Card.Props, {}> {}
    export const F7Card : typeof Card;

    namespace Checkbox {
        export interface Props extends F7Props {
        }
    }

    export class Checkbox extends React.Component<Checkbox.Props, {}> {}
    export const F7Checkbox : typeof Checkbox;

    namespace Chip {
        export interface Props extends F7Props {
        }
    }

    export class Chip extends React.Component<Chip.Props, {}> {}
    export const F7Chip : typeof Chip;

    namespace Col {
        export interface Props extends F7Props {
        }
    }

    export class Col extends React.Component<Col.Props, {}> {}
    export const F7Col : typeof Col;

    namespace FabButton {
        export interface Props extends F7Props {
        }
    }

    export class FabButton extends React.Component<FabButton.Props, {}> {}
    export const F7FabButton : typeof FabButton;

    namespace FabButtons {
        export interface Props extends F7Props {
        }
    }

    export class FabButtons extends React.Component<FabButtons.Props, {}> {}
    export const F7FabButtons : typeof FabButtons;

    namespace Fab {
        export interface Props extends F7Props {
        }
    }

    export class Fab extends React.Component<Fab.Props, {}> {}
    export const F7Fab : typeof Fab;

    namespace Gauge {
        export interface Props extends F7Props {
        }
    }

    export class Gauge extends React.Component<Gauge.Props, {}> {}
    export const F7Gauge : typeof Gauge;

    namespace Icon {
        export interface Props extends F7Props {
        }
    }

    export class Icon extends React.Component<Icon.Props, {}> {}
    export const F7Icon : typeof Icon;

    namespace Input {
        export interface Props extends F7Props {
        }
    }

    export class Input extends React.Component<Input.Props, {}> {}
    export const F7Input : typeof Input;

    namespace Label {
        export interface Props extends F7Props {
        }
    }

    export class Label extends React.Component<Label.Props, {}> {}
    export const F7Label : typeof Label;

    namespace Link {
        export interface Props extends F7Props {
        }
    }

    export class Link extends React.Component<Link.Props, {}> {}
    export const F7Link : typeof Link;

    namespace ListButton {
        export interface Props extends F7Props {
        }
    }

    export class ListButton extends React.Component<ListButton.Props, {}> {}
    export const F7ListButton : typeof ListButton;

    namespace ListGroup {
        export interface Props extends F7Props {
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
        }
    }

    export class ListItem extends React.Component<ListItem.Props, {}> {}
    export const F7ListItem : typeof ListItem;

    namespace List {
        export interface Props extends F7Props {
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