export async function getItems() {
	const request = await fetch('http://localhost:8080/anillos/obtener', {
		next: { revalidate: 3600 },
	});
	const items = await request.json();

	return items;
}
export async function getItemsById(id) {
	const request = await fetch(`http://localhost:8080/anillos/obtener/${id}`);
	const items = await request.json();
	return items;
}

export async function getCategory() {
	const request = await fetch(`http://localhost:8080/categorias/obtener`);
	const items = await request.json();
	return items;
}

export async function putProducts(categoryData, id) {
	const request = await fetch(`http://localhost:8080/anillos/editar/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(categoryData),
	});
}
 
export async function postCategory (newCategory){
	const request = await fetch ('http://localhost:8080/categorias/nuevo',{
	method: 'POST',
	headers: {
	'Content-Type':'application/json',
	},
	body: JSON.stringify(newCategory),
	});
	}

export async function getCategoryById(id) {
	const request = await fetch(`http://localhost:8080/categorias/obtener/${id}`);
	const items = await request.json();
	return items;
	}