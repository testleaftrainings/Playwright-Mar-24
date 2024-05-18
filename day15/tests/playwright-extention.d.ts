import {Page} from '@playwright/test'


declare module '@playwright/test'{
interface Page{
    clickAndDelay:(selectors:string)=>Promise<void>
}
}