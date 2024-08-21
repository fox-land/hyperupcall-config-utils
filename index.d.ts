type Options = {
	readonly cwd?: URL | string
	readonly type?: 'file' | 'directory'
	readonly stopAt?: URL | string
}

export function findUp(name: string, options?: Options): Promise<string | undefined>

export function skipArrayMergeDeep(
	target: Record<PropertyKey, unknown>,
	source: Record<PropertyKey, unknown>,
): Record<PropertyKey, unknown>
