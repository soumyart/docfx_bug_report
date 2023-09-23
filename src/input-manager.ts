/* --------------------------------------------------------------------------------
 * Copyright: Altair Engineering, Inc., 2023.  All rights reserved.
 * Contains trade secrets of Altair Engineering, Inc.
 * Copyright notice does not imply publication.
 * Decompilation or disassembly of this software is strictly prohibited.
 * --------------------------------------------------------------------------------*/

export interface Common {
  name: string;
}

/**
 * @public
 */
export interface Main extends Common {
  value: string;
}

/**
 * @public
 */
export class MainImpl implements Main {
  value: string = '';
  name: string = '';
}
