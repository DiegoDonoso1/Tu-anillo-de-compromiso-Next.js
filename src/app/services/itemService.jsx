export async function getItems() {
	const request = await fetch('http://localhost:8080/anillos/obtener', {});
	const items = await request.json();

	return items;
}
export async function getItemsById(id) {
	const request = await fetch(`http://localhost:8080/anillos/obtener/${id}`, {
		next: { revalidate: 3600 },
	});
	const items = await request.json();
	return items;
}

export async function getCategory() {
	const request = await fetch(`http://localhost:8080/categorias/obtener`);
	const items = await request.json();
	return items;
}

export async function getTalla() {
	const request = await fetch(`http://localhost:8080/tallas/obtener`);
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

export async function deleteProducts(id) {
	const request = await fetch(`http://localhost:8080/anillos/editar/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});
}

export async function postCliente(clienteData) {
	const request = await fetch(`http://localhost:8080/cliente/nuevo`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(clienteData),
	});
}
