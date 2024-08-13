import {
  type RequestInitCfPropertiesImage,
  type BasicImageTransformations,
} from "@cloudflare/workers-types";

export const themeColors = {
  errormessage: "#9f0000",
  errorbackground: "#ffeeee",

  lightDad: "#87ceeb",
  darkDad: "#135771",

  lightMom: "#ffc9d8",
  darkMom: "#b81641",
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
} as const;

/**
 * All Tables in the D1 Database.
 * @see D1Tables;
 **/
export type D1Tables = keyof typeof D1Tables;

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
} as const;
/**
 * All Columns in the D1 Database.
 * @see D1Coumns;
 **/
export type D1Columns = keyof typeof D1Columns;


/**
 * The allowed transformations for images should be based on the image type.
 **/
export const VARIANTS = {
  Group_Photos: {
    width: 800,
    height: 600,
    quality: 80,
  } as RequestInitCfPropertiesImage & BasicImageTransformations,
  Headshots_Lg: {
    width: 500,
    height: 500,
    quality: 80,
    gravity: "center",
    fit: "crop",
  } as RequestInitCfPropertiesImage & BasicImageTransformations,
  Headshots_Sm: {
    width: 100,
    quality: 80,
  } as RequestInitCfPropertiesImage & BasicImageTransformations,
  withWatermarkTransform: {
    width: 300,
    quality: 80,
  } as RequestInitCfPropertiesImage & BasicImageTransformations,
  logoTransform: {
    width: 300,
    quality: 80,
  } as RequestInitCfPropertiesImage & BasicImageTransformations,
  /**@default*/
  default: {
    width: 300,
    quality: 80,
  } as RequestInitCfPropertiesImage & BasicImageTransformations,
} as const;
/**
 * The allowed transformations for images should be based on the image type.
 * @see VARIANTS;
 **/
export type Variants = keyof typeof VARIANTS;

export const VariantNames = Object.keys(VARIANTS) as Array<Variants>;

