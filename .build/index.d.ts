export declare const themeColors: {
    errormessage: string;
    errorbackground: string;
};
export declare const D1Tables: {
    readonly Group_Photos: "Group_Photos";
    readonly Headshots_Sm: "Headshots_Sm";
    readonly Headshots_Lg: "Headshots_Lg";
    readonly Litters: "Litters";
    readonly Dogs: "Dogs";
    readonly Adults: "Adults";
    readonly Puppies: "Puppies";
    readonly Families: "Families";
    readonly Dog_To_Group_Photos: "Dog_To_Group_Photos";
};
export declare const D1Columns: {
    readonly Group_Photos: {
        readonly id: "id";
        readonly groupPhotos: "groupPhotos";
    };
    readonly Headshots_Sm: {
        readonly id: "id";
        readonly headshotSmall: "headshotSmall";
    };
    readonly Headshots_Lg: {
        readonly id: "id";
        readonly headshotLarge: "headshotLarge";
    };
    readonly Litters: {
        readonly id: "id";
        readonly dueDate: "dueDate";
        readonly birthday: "birthday";
        readonly applicantsInQueue: "applicantsInQueue";
    };
    readonly Dogs: {
        readonly id: "id";
        readonly gender: "gender";
        readonly noseColor: "noseColor";
        readonly coatColor: "coatColor";
        readonly personality: "personality";
        readonly headshotSmall: "headshotSmall";
        readonly headshotLarge: "headshotLarge";
    };
    readonly Adults: {
        readonly id: "id";
        readonly adultName: "adultName";
        readonly breeder: "breeder";
        readonly birthday: "birthday";
        readonly eyeColor: "eyeColor";
        readonly isRetired: "isRetired";
        readonly about: "about";
        readonly weight: "weight";
        readonly energyLevel: "energyLevel";
        readonly dogId: "dogId";
    };
    readonly Puppies: {
        readonly id: "id";
        readonly puppyName: "puppyName";
        readonly collarColor: "collarColor";
        readonly isAvailable: "isAvailable";
        readonly dogId: "dogId";
        readonly litterId: "litterId";
    };
    readonly Families: {
        readonly id: "id";
        readonly groupPhoto: "groupPhoto";
        readonly mother: "mother";
        readonly father: "father";
        readonly litterId: "litterId";
    };
    readonly Dog_To_Group_Photos: {
        readonly id: "id";
        readonly groupPhotoId: "groupPhotoId";
        readonly dogId: "dogId";
    };
};
/**
 * The allowed transformations for images should be based on the image type.
 **/
export declare const ALLOWED_TRANSFORMS: {
    readonly Group_Photos: {
        readonly width: 800;
        readonly quality: 80;
    };
    readonly Headshots_Lg: {
        readonly width: 300;
        readonly quality: 80;
    };
    readonly Headshots_Sm: {
        readonly width: 100;
        readonly quality: 80;
    };
    readonly withWatermarkTransform: {
        readonly width: 300;
        readonly quality: 80;
    };
    readonly logoTransform: {
        readonly width: 300;
        readonly quality: 80;
    };
    /**@default*/
    readonly default: {
        readonly width: 100;
        readonly quality: 20;
    };
};
declare const Utils: {
    themeColors: {
        errormessage: string;
        errorbackground: string;
    };
    D1Tables: {
        readonly Group_Photos: "Group_Photos";
        readonly Headshots_Sm: "Headshots_Sm";
        readonly Headshots_Lg: "Headshots_Lg";
        readonly Litters: "Litters";
        readonly Dogs: "Dogs";
        readonly Adults: "Adults";
        readonly Puppies: "Puppies";
        readonly Families: "Families";
        readonly Dog_To_Group_Photos: "Dog_To_Group_Photos";
    };
    D1Columns: {
        readonly Group_Photos: {
            readonly id: "id";
            readonly groupPhotos: "groupPhotos";
        };
        readonly Headshots_Sm: {
            readonly id: "id";
            readonly headshotSmall: "headshotSmall";
        };
        readonly Headshots_Lg: {
            readonly id: "id";
            readonly headshotLarge: "headshotLarge";
        };
        readonly Litters: {
            readonly id: "id";
            readonly dueDate: "dueDate";
            readonly birthday: "birthday";
            readonly applicantsInQueue: "applicantsInQueue";
        };
        readonly Dogs: {
            readonly id: "id";
            readonly gender: "gender";
            readonly noseColor: "noseColor";
            readonly coatColor: "coatColor";
            readonly personality: "personality";
            readonly headshotSmall: "headshotSmall";
            readonly headshotLarge: "headshotLarge";
        };
        readonly Adults: {
            readonly id: "id";
            readonly adultName: "adultName";
            readonly breeder: "breeder";
            readonly birthday: "birthday";
            readonly eyeColor: "eyeColor";
            readonly isRetired: "isRetired";
            readonly about: "about";
            readonly weight: "weight";
            readonly energyLevel: "energyLevel";
            readonly dogId: "dogId";
        };
        readonly Puppies: {
            readonly id: "id";
            readonly puppyName: "puppyName";
            readonly collarColor: "collarColor";
            readonly isAvailable: "isAvailable";
            readonly dogId: "dogId";
            readonly litterId: "litterId";
        };
        readonly Families: {
            readonly id: "id";
            readonly groupPhoto: "groupPhoto";
            readonly mother: "mother";
            readonly father: "father";
            readonly litterId: "litterId";
        };
        readonly Dog_To_Group_Photos: {
            readonly id: "id";
            readonly groupPhotoId: "groupPhotoId";
            readonly dogId: "dogId";
        };
    };
    ALLOWED_TRANSFORMS: {
        readonly Group_Photos: {
            readonly width: 800;
            readonly quality: 80;
        };
        readonly Headshots_Lg: {
            readonly width: 300;
            readonly quality: 80;
        };
        readonly Headshots_Sm: {
            readonly width: 100;
            readonly quality: 80;
        };
        readonly withWatermarkTransform: {
            readonly width: 300;
            readonly quality: 80;
        };
        readonly logoTransform: {
            readonly width: 300;
            readonly quality: 80;
        };
        /**@default*/
        readonly default: {
            readonly width: 100;
            readonly quality: 20;
        };
    };
};
export default Utils;
/**
 * All Tables in the D1 Database.
 * @see D1Tables;
 **/
export type D1Tables = keyof typeof D1Tables;
/**
 * All Columns in the D1 Database.
 * @see D1Coumns;
 **/
export type D1Columns = keyof typeof D1Columns;
/**
 * The allowed transformations for images should be based on the image type.
 * @see ALLOWED_TRANSFORMS;
**/
export type ALLOWED_TRANSFORMS = typeof ALLOWED_TRANSFORMS;
