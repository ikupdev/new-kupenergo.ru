class Slider {
	
	constructor(delay = 0) {
		this.block = document.querySelector('#slider');
		this.items = document.querySelectorAll('.slider-item');
		this.dots = [...document.querySelectorAll('.dot')];
		this.prev = document.querySelector('.prev');
		this.next = document.querySelector('.next');		
		this.delay = delay;
		this.current = 0;
		this._init();
	}

	_init() {
		this.items.forEach(el => el.style.display = 'none');
		this.items[0].style.display = 'block';
		this.dots.forEach(el => el.classList.remove('dot-active'));
		this.dots[0].classList.add('dot-active');
		this.prev.addEventListener('click', this._leftFrame.bind(this));
		this.next.addEventListener('click', this._rightFrame.bind(this));
		this.dots.forEach(el => el.addEventListener('click', this._dotPress.bind(this)));
		if (this.delay) {
			const timer = setInterval(this._rightFrame.bind(this), this.delay)
		}
	}

	_leftFrame() {
		this._clearFrame();
		(this.current === 0) ? this.current = this.items.length - 1 : this.current--;
		this._renderFrame();
	}

	_rightFrame() {
		this._clearFrame();
		(this.current === this.items.length - 1) ? this.current = 0 : this.current++;
		this._renderFrame();
	}

	_clearFrame() {
		this.items[this.current].style.display = 'none';
		this.dots[this.current].classList.remove('dot-active');
	}

	_renderFrame() {
		this.items[this.current].style.display = 'block';
		this.dots[this.current].classList.add('dot-active');		
	}

	_dotPress({target}) {
		if (target.classList.contains('dot-active')) return;
		const n = this.dots.indexOf(target);
		this._clearFrame();
		this.current = n;
		this._renderFrame();
	}
}

window.addEventListener('DOMContentLoaded', () => {

	let slider = new Slider(3000);
});