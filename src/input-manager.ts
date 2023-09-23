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
