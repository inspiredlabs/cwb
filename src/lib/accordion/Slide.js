export function slide(node, isOpen){
	 console.log(node, isOpen)
	let initialHeight = node.offsetHeight;
	node.style.height = isOpen ? 'auto' : 0;
	node.style.overflow = 'hidden';
// 	node.style.backgroundColor = 'cyan';

	let animation = node.animate([
		{
			height: 0,
		}, {
			height: `${initialHeight}px`,
		}
	],
		{
			duration: initialHeight, //500
			fill: 'both',
			direction: isOpen ? 'reverse' : 'normal'
		});

	animation.pause();
	animation.onfinish = ({currentTime}) => {
		if(!currentTime){
			animation.reverse();
			animation.pause();
		}
		node.dispatchEvent(new CustomEvent('animationEnd'))
	};

	return {
		update: () => {
			//`isOpen` node.style.height = isOpen ? 'auto' : 0;
			//console.log(isOpen)
			animation.currentTime ? animation.reverse() : animation.play()
		}
	}
}
