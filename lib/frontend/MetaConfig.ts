interface MetaConfigString {
  name: string;
  type: 'string';
  encrypted: boolean;
  array: boolean;
}

interface MetaConfigOthers {
  name: string;
  type: 'number' | 'boolean' | 'Date';
}

type MetaConfig = MetaConfigString | MetaConfigOthers;

export { MetaConfig };
