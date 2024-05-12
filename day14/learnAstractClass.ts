export abstract class TestReport{

//implemented -->have a logic
//unimplemented-->no logic /no body

    abstract startCustomReport():void;

    takeScreenshot(){
        console.log("Take screenshot for each step");
        
    }
}
//const tr=new TestReport() -->not allowed