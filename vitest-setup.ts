import 'vitest-axe/extend-expect'
import { expect } from 'vitest'
import jestDomMatchers from '@testing-library/jest-dom/matchers'
import * as axeMatchers from 'vitest-axe/matchers'
expect.extend(jestDomMatchers)
expect.extend(axeMatchers)
