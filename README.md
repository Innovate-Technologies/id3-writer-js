# id3-writer-js
Full JavaScript ID3v2 tag writer


id3-writer-js is a small full JavaScript ID3 tag writer. All previous code we could find depended on other software, for small tasks like writing a title and an artist this is not efficient.
That is why we wrote id3-writer-js, nothing fancy but a simple and fast way to write tags to a Buffer which then can be used to append to an MP3 file.


## Demo code

```
var writer = require("id3-writer-js");

var id3 = writer.write([
        {
            name: "TIT2",
            content: "10.000 Luchtballonnen",
        },
        {
            name: "TPE1",
            content: "K3",
        }
    ])

console.log(id3.toString("hex")) // show the hex string
```
## License

Copyright © 2015 Innovate Technologies (Maartje Eyskens)

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program. If not, see http://www.gnu.org/licenses/.
