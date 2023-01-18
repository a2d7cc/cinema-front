export const getKeys = <T extends object>(obj: T): (keyof T)[] => {
	return Object.keys(obj) as Array<keyof T>
}

/* export const getKeys = <T>(obj: T) => Object.keys(obj) as Array<keyof T>
 */
