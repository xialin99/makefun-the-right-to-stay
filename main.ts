import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const poem = `I lift my foot. The needle stops
with Dad's coat bunched under it.
He hooks a finger through the torn pocket.
I raise the presser foot, pull my chair
close enough for our knees to touch,
and put my finger through the same hole.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), poem, 'utf8');
