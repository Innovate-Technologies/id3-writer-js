module.exports.write = function (frames) {

    var id3Buffers = []

    id3Buffers.push(new Buffer("494433", "hex")) // ID3v2
    id3Buffers.push(new Buffer("0400", "hex")) // version 4
    id3Buffers.push(new Buffer("00000000", "hex")) // flags

    // extended header not present (in this version)

    var id3FrameBuffers = []
    for (var id in frames) {
        if (frames.hasOwnProperty(id)) {
            var frame = frames[id]
            id3FrameBuffers.push(new Buffer(frame.name)) // header
            var contentBuffer = new Buffer(frame.content, "utf8")
            id3FrameBuffers.push(new Buffer("000000", "hex")) // set frame tags
            var lengthString = (frame.content.length + 2).toString(16)
            if (lengthString.length % 2 !== 0) {
                lengthString = "0" + lengthString
            }
            id3FrameBuffers.push(new Buffer(lengthString, "hex")) // add length
            id3FrameBuffers.push(new Buffer("0000", "hex")) // status flags
            id3FrameBuffers.push(new Buffer("03", "hex")) // UTF-8 (what else?)
            id3FrameBuffers.push(contentBuffer) // content
            id3FrameBuffers.push(new Buffer("00", "hex")) // end UTF-8
        }
    }

    var framesBuffer = Buffer.concat(id3FrameBuffers)
    id3Buffers.push(new Buffer(framesBuffer.length.toString(16), "hex"))
    id3Buffers.push(framesBuffer)

    return Buffer.concat(id3Buffers)
}
