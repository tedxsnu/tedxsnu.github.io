export class Thumbnail {
    public name: string;
    public title: string;
    public videoLink: string;
    public imageLink: string;

    constructor(name: string, title: string, videoLink: string, imageLink: string) {
        this.name = name;
        this.title = title;
        this.videoLink = videoLink;
        this.imageLink = imageLink;
    }
}