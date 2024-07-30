import { D1Tables, D1Columns, ALLOWED_TRANSFORMS } from "./index";

/**
 * All Tables in the D1 Database.
 * @see D1Tables;
 **/
type D1Tables = keyof typeof D1Tables;

/**
 * All Columns in the D1 Database.
 * @see D1Coumns;
 **/
type D1Coumns = keyof typeof D1Columns;

/**
 * The allowed transformations for images should be based on the image type.
 * @see ALLOWED_TRANSFORMS;
**/
type allowedTransforms = typeof ALLOWED_TRANSFORMS;
