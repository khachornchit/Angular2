export class Article {
    public Id: number;
    public Title: string;
    public Content: string;

    constructor(Id: number, Title: string, Content: string) {
        this.Id = Id;
        this.Title = Title;
        this.Content = Content;
    }
}