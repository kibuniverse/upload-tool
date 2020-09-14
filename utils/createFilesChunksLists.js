"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileChunkList = exports.getFilesChunkLists = void 0;
function getFilesChunkLists(files, chunkSize) {
    let fileChunkLists = [];
    const createChunkList = (files, chunkSize) => {
        let fileChunkList = [];
        let cur = 0;
        let index = 1;
        while (cur < files.size) {
            fileChunkList.push({
                file: files.slice(cur, cur + chunkSize),
                hash: `${files.name}_${index}`,
                fileName: files.name,
            });
            index++;
            cur += chunkSize;
        }
        return fileChunkList;
    };
    for (let i = 0, len = files.length; i < len; i++) {
        fileChunkLists.push(createChunkList(files[i], chunkSize));
    }
    return fileChunkLists;
}
exports.getFilesChunkLists = getFilesChunkLists;
function getFileChunkList(files, chunkSize) {
    let fileChunkList = [];
    let cur = 0;
    let index = 1;
    while (cur < files.size) {
        fileChunkList.push({
            file: files.slice(cur, cur + chunkSize),
            hash: `${files.name}_${index}`,
            fileName: files.name,
        });
        index++;
        cur += chunkSize;
    }
    return fileChunkList;
}
exports.getFileChunkList = getFileChunkList;
//# sourceMappingURL=createFilesChunksLists.js.map