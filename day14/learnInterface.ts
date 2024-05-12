interface Browser{
    launchBrowser():void;  //abstract method
    locator():string;
    getStatus():void;    

}

export interface customeReports extends Browser{
    startReport():void;
    endReport():void;
}