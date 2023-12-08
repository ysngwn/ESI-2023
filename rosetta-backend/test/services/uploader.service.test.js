// Generated by CodiumAI

describe('generateFilename', () => {

    // Generates a unique filename with a random 16-byte string and the current timestamp.
    it('should generate a unique filename with a random 16-byte string and the current timestamp', () => {
        const file = { originalname: 'testfile' }
        const cb = jest.fn()
        generateFilename(null, file, cb)
        expect(cb).toHaveBeenCalledWith(null, expect.stringMatching(/^[a-f0-9]{32}-\d+\.\w+$/))
    });

    // Appends the original file extension to the generated filename.
    it('should append the original file extension to the generated filename', () => {
        const file = { originalname: 'testfile.txt' }
        const cb = jest.fn()
        generateFilename(null, file, cb)
        expect(cb).toHaveBeenCalledWith(null, expect.stringMatching(/^[a-f0-9]{32}-\d+\.txt$/))
    });

    // The original filename has no extension.
    it('should handle the original filename with no extension', () => {
        const file = { originalname: 'testfile' }
        const cb = jest.fn()
        generateFilename(null, file, cb)
        expect(cb).toHaveBeenCalledWith(null, expect.stringMatching(/^[a-f0-9]{32}-\d+$/))
    });

    // The original filename has multiple extensions.
    it('should handle the original filename with multiple extensions', () => {
        const file = { originalname: 'testfile.tar.gz' }
        const cb = jest.fn()
        generateFilename(null, file, cb)
        expect(cb).toHaveBeenCalledWith(null, expect.stringMatching(/^[a-f0-9]{32}-\d+\.tar\.gz$/))
    });

    // The original filename has a long extension.
    it('should handle the original filename with a long extension', () => {
        const file = { originalname: 'testfile.thisisalongextension' }
        const cb = jest.fn()
        generateFilename(null, file, cb)
        expect(cb).toHaveBeenCalledWith(null, expect.stringMatching(/^[a-f0-9]{32}-\d+\.thisisalongextension$/))
    });

    // The original filename has special characters in the name or extension.
    it('should handle the original filename with special characters in the name or extension', () => {
        const file = { originalname: 'testfile$@!.txt' }
        const cb = jest.fn()
        generateFilename(null, file, cb)
        expect(cb).toHaveBeenCalledWith(null, expect.stringMatching(/^[a-f0-9]{32}-\d+\.\w+$/))
    });

    // The callback function is not provided.
    it('should not throw an error when the callback function is not provided', () => {
        const file = { originalname: 'testfile' }
        expect(() => {
            generateFilename(null, file)
        }).not.toThrow()
    });

    // The generated filename has a length limit.
    it('should generate a filename with a length limit', () => {
        const file = { originalname: 'testfile' }
        const cb = jest.fn()
        generateFilename(null, file, cb)
        const generatedFilename = cb.mock.calls[0][1]
        expect(generatedFilename.length).toBeLessThanOrEqual(255)
    });

    // The function is called with a null file argument.
    it('should return an error when called with a null file argument', () => {
        const file = null
        const cb = jest.fn()
        generateFilename(null, file, cb)
        expect(cb).toHaveBeenCalledWith(expect.any(Error), null)
    });

    // The function is called with an empty file argument.
    it('should return an error when called with an empty file argument', () => {
        const file = { originalname: '' }
        const cb = jest.fn()
        generateFilename(null, file, cb)
        expect(cb).toHaveBeenCalledWith(expect.any(Error), null)
    });
});