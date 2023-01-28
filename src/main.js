/*
 * Copyright © 2023 Pyogenics <https://github.com/Pyogenics/>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

class Window
{
	constructor()
	{
		this.mouse = new Object();
		this.mouse.x = 0;
		this.mouse.y = 0;
		this.mouse.dragging = false;
	}

	bindToDiv(div)
	{
		this.window = div;
		this.window.addEventListener("mousedown", (event) => {
			this.mouse.dragging = true;
			this.dragHandler.call(this);
		});
		window.addEventListener("mouseup", (event) => {
			this.mouse.dragging = false;
		});
		window.addEventListener("mousemove", (event) => {
			this.mouse.x = event.x;
			this.mouse.y = event.y;
		});
	}

	dragHandler()
	{
		this.window.style.left = this.mouse.x;
		this.window.style.top = this.mouse.y;

		if (this.mouse.dragging)
			setTimeout(() => {this.dragHandler.call(this);}, 16); // 16ms is about 60 fps
	}
}
