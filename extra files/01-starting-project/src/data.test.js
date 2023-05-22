import { describe, it, expect, vi} from 'vitest';
import { generateReportData } from './data';

describe('generateReportData()', () => {
    it('should execute LogFn if provided', () => {
        const logger = vi.fn(); // ViTest that keep tracks of functions 
        generateReportData(logger);
        expect(logger).toBeCalled(); // Check that logger was run
    })
})