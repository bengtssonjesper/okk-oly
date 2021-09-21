export class Lifter {
    id: string;
    name: string;
    weightclass: number;
    bestSnatch: number;
    bestCJ: number;
    bestTotal: number;
    bio: string;
    imageURL: string;
    

    constructor(
        id: string,
        name: string,
        weightclass: number,
        bestSnatch: number,
        bestCJ: number,
        bestTotal: number,
        { bio = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
        imageURL = "https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg" } = {}) {
        this.id = id;
        this.name = name;
        this.weightclass = weightclass;
        this.bestSnatch = bestSnatch;
        this.bestCJ = bestCJ;
        this.bestTotal = bestTotal;
        this.bio = bio;
        this.imageURL = imageURL;
        
    }
}

