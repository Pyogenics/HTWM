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
	}

	bindToDiv(div)
	{
		this.window = div;
		this.window.left = 0;
		this.window.top = 0;
		this.window.addEventListener("mousedown", (event) => {
			this.window.prevX = event.x;
			this.window.prevY = event.y;
			this.window.addEventListener("mousemove", this.dragHandler);
		});
		window.addEventListener("mouseup", (event) => {
			this.window.removeEventListener("mousemove", this.dragHandler);
		});
	}

	dragHandler(event)
	{
		event.target.style.left = event.target.offsetLeft + (event.x - event.target.prevX);
		event.target.style.top = event.target.offsetTop + (event.y - event.target.prevY);
		
		event.target.prevX = event.x;
		event.target.prevY = event.y;
	}
}

class ToolBar extends EventTarget
{
	constructor()
	{
		super();
	}

	bindToDiv(div)
	{
		this.toolbar = div;
	}

	bindActions(actions)
	{
		for (const [id, action] of Object.entries(actions))
		{
			const element = document.getElementById(id); //XXX: We don't know if the element is under us, do we care?
			if (element === null) throw new Error(`Unknow element id: "${id}"`);
			element.addEventListener("click", (event) => {
				this.dispatchEvent(new Event(action));
			});
		}
	}
}

export { Window, ToolBar };
