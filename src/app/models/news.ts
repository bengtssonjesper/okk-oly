export class News {
    id: string;
    title: string;
    author: string;
    dateWritten: Date;
    content: string;
    imageURL: string;

    constructor(
        id: string,
        title: string,
        author: string,
        dateWritten:Date,
        { content="No content has been added",
        imageURL = "data:image/png;base64,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"
        } = {}) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.dateWritten = dateWritten;
        this.content = content;
        this.imageURL = imageURL;
    }
}

