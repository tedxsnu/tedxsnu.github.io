import { Thumbnail } from './thumbnail.model';

export class Event {
    public name: string;
    public description: string;
    public thumbnails: Thumbnail[];

    constructor(name: string, desc: string, thumbnails: Thumbnail[]) {
        this.name = name;
        this.description = desc;
        this.thumbnails = thumbnails;
    }
}