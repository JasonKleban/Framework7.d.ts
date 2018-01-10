declare namespace Template7 {

    interface Template7{
        global?: any
        templates?: any;
        compile? (htmlString: string): any;
        registerHelper? (name: string, helper: Function): any;
        unregisterHelper? (name: string) : any;
        registerPartial? (name: string, template: string) : any;
        unregisterPartial? (name: string) : any;
    }
    
}

declare let Template7: Template7.Template7;

declare module "Template7" {
    export = Template7;
}
