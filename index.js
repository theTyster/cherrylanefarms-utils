export const themeColors = {
    errormessage: "#9f0000",
    errorbackground: "#ffeeee",
};
export const D1Tables = {
    Group_Photos: "Group_Photos",
    Headshots_Sm: "Headshots_Sm",
    Headshots_Lg: "Headshots_Lg",
    Litters: "Litters",
    Dogs: "Dogs",
    Adults: "Adults",
    Puppies: "Puppies",
    Families: "Families",
    Dog_To_Group_Photos: "Dog_To_Group_Photos",
};
export const D1Columns = {
    Group_Photos: {
        id: "id",
        groupPhotos: "groupPhotos",
    },
    Headshots_Sm: {
        id: "id",
        headshotSmall: "headshotSmall",
    },
    Headshots_Lg: {
        id: "id",
        headshotLarge: "headshotLarge",
    },
    Litters: {
        id: "id",
        dueDate: "dueDate",
        birthday: "birthday",
        applicantsInQueue: "applicantsInQueue",
    },
    Dogs: {
        id: "id",
        gender: "gender",
        noseColor: "noseColor",
        coatColor: "coatColor",
        personality: "personality",
        headshotSmall: "headshotSmall",
        headshotLarge: "headshotLarge",
    },
    Adults: {
        id: "id",
        adultName: "adultName",
        breeder: "breeder",
        birthday: "birthday",
        eyeColor: "eyeColor",
        isRetired: "isRetired",
        about: "about",
        weight: "weight",
        energyLevel: "energyLevel",
        dogId: "dogId",
    },
    Puppies: {
        id: "id",
        puppyName: "puppyName",
        collarColor: "collarColor",
        isAvailable: "isAvailable",
        dogId: "dogId",
        litterId: "litterId",
    },
    Families: {
        id: "id",
        groupPhoto: "groupPhoto",
        mother: "mother",
        father: "father",
        litterId: "litterId",
    },
    Dog_To_Group_Photos: {
        id: "id",
        groupPhotoId: "groupPhotoId",
        dogId: "dogId",
    },
};
const Utils = {
    themeColors,
    D1Tables,
    D1Columns,
};
export default Utils;
