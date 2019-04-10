export class Dvd {

    public titledvd: string;
    public isbndvd: string;
    public creatordvd: string;
    public publisherdvd: string;
    public languagedvd: string;
    public datedvd: String;
    public totaltimedvd: String;
    constructor(titledvd: string,isbndvd: string,creatordvd: string,publisherdvd: string,languagedvd:string,datedvd: String,totaltimedvd: String) {
             this.titledvd=titledvd;     
             this.isbndvd=isbndvd;
             this.creatordvd=creatordvd;
             this.publisherdvd=publisherdvd;
             this.languagedvd=languagedvd;
             this.datedvd=datedvd;
             this.totaltimedvd=totaltimedvd;        
             }
}