import * as CLF from "./index";

/**
 * All Tables in the CLF D1 Database.
 * @see CLF.D1Tables;
 **/
type D1Tables = keyof typeof CLF.D1Tables;

/**
 * All Columns in the CLF D1 Database.
 * @see CLF.D1Coumns;
 **/
type D1Coumns = keyof typeof CLF.D1Columns;

/**
 * The allowed transformations for images should be based on the image type.
 * @see CLF.ALLOWED_TRANSFORMS;
**/
type allowedTransforms = typeof CLF.ALLOWED_TRANSFORMS;
