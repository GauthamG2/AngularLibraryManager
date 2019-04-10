export class Book{
    
    public title: string;
    public isbn: number;
    public sector: string;
    public author: string;
    public publisher: string;
    public date: String;
    public noofpages: String;
    constructor(title: string,isbn: number,sector: string,author: string,publisher: string,date:String,noofpages: String) {
             this.title=title;     
             this.isbn=isbn;
             this.sector=sector;
             this.author=author;
             this.publisher=publisher;
             this.date=date;
             this.noofpages=noofpages;        
             }
}