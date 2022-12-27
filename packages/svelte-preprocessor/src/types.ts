import type { MdsvexOptions } from 'mdsvex'
import type { PreprocessorGroup } from 'svelte/types/compiler/preprocess'

export interface Options {
  mdsvexOptions?: MdsvexOptions
}

export type SveltepressPreprocessor = (options: Options) => PreprocessorGroup


export type Highlighter = (code: string, lang?: string) => Promise<string>