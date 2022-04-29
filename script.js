// JavaScript Document

const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
	
	{
	
	name: 'Miyah Miles',
	position: 'Marketing',
	photo: 'https://randomuser.me/api/portraits/women/30.jpg',
	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra sollicitudin blandit. Maecenas molestie nulla at tempor rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam dui urna, imperdiet ut orci vitae, sagittis consequat lorem. Quisque vel mi magna. Maecenas varius finibus sem ac laoreet. Duis sollicitudin consectetur semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus a pretium dui. Nulla auctor nisi nec sollicitudin euismod. Donec maximus dictum faucibus. Donec congue orci convallis enim pellentesque condimentum. Fusce finibus eros orci, quis rutrum felis volutpat id. Praesent eget pharetra mauris. Donec ac metus ex.",
	},
	
	{ 
	name: 'Kayla Moses',
	position: 'Insider',
	photo: 'https://randomuser.me/api/portraits/women/46.jpg',
	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra sollicitudin blandit. Maecenas molestie nulla at tempor rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam dui urna, imperdiet ut orci vitae, sagittis consequat lorem. Quisque vel mi magna. Maecenas varius finibus sem ac laoreet. Duis sollicitudin consectetur semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus a pretium dui. Nulla auctor nisi nec sollicitudin euismod. Donec maximus dictum faucibus. Donec congue orci convallis enim pellentesque condimentum. Fusce finibus eros orci, quis rutrum felis volutpat id. Praesent eget pharetra mauris. Donec ac metus ex.",
	},
	{
	name: 'Ramoni Crowe',
	position: 'Grocery Clerk',
	photo: 'https://randomuser.me/api/portraits/women/57.jpg',
	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra sollicitudin blandit. Maecenas molestie nulla at tempor rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam dui urna, imperdiet ut orci vitae, sagittis consequat lorem. Quisque vel mi magna. Maecenas varius finibus sem ac laoreet. Duis sollicitudin consectetur semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus a pretium dui. Nulla auctor nisi nec sollicitudin euismod. Donec maximus dictum faucibus. Donec congue orci convallis enim pellentesque condimentum. Fusce finibus eros orci, quis rutrum felis volutpat id. Praesent eget pharetra mauris. Donec ac metus ex.",
	},
	{
	
	name: 'Gracie Gallagher',
	position: 'Nail Clerk',
	photo: 'https://randomuser.me/api/portraits/women/64.jpg',
	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra sollicitudin blandit. Maecenas molestie nulla at tempor rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam dui urna, imperdiet ut orci vitae, sagittis consequat lorem. Quisque vel mi magna. Maecenas varius finibus sem ac laoreet. Duis sollicitudin consectetur semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus a pretium dui. Nulla auctor nisi nec sollicitudin euismod. Donec maximus dictum faucibus. Donec congue orci convallis enim pellentesque condimentum. Fusce finibus eros orci, quis rutrum felis volutpat id. Praesent eget pharetra mauris. Donec ac metus ex.",
	},
	
]

let idx = 1

function updateTestimonial () {
	const { name, position, photo, text } = testimonials[idx]
	
	testimonial.innerHTML = text
	userImage.src = photo
	username.innerHTML = name 
	role.innerHTML = position 
	
	idx++
	if(idx > testimonials.length - 1) {
		idx = 0
	}
}

setInterval(updateTestimonial, 10000)