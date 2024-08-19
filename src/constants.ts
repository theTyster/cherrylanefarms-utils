import {
  type RequestInitCfPropertiesImage,
  type BasicImageTransformations,
} from "@cloudflare/workers-types";

/**
 * The allowed transformations for images should be based on the image type.
 **/
export const VARIANTS = {
  Group_Photos: {
    width: 433,
    height: 615,
    quality: 80,
  } as RequestInitCfPropertiesImage & BasicImageTransformations,
  Headshots_Lg: {
    width: 500,
    height: 666,
    quality: 80,
    gravity: "center",
    fit: "crop",
  } as RequestInitCfPropertiesImage & BasicImageTransformations,
  Headshots_Sm: {
    width: 292,
    height: 292,
    quality: 80,
  } as RequestInitCfPropertiesImage & BasicImageTransformations,
  withWatermarkTransform: {
    width: 300,
    height: 300,
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

