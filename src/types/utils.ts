// SimpleSpread<L, R> is a simplified version of what happens when you
// do an object spread like {...left, ...right} where left is of type L and
// right is of type R.  It is the type R, with any properties on L that
// don't exist in R.  (It doesn't work if a key in L is an optional property in
// R, which is why this is simplified)
export type SimpleSpread<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>
