import { z } from 'zod/v4';

import { resolveConfigReference } from './utils';

export const listenConfigSchema = z
  .object({
    host: z
      .string()
      .default('0.0.0.0')
      .transform(resolveConfigReference),
    port: z.coerce.number().int().min(0).max(65535).default(3000),
  })
  .prefault({});

export type ListenConfig = z.infer<typeof listenConfigSchema>;
