const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-name').value.trim();
    const contents = document.querySelector('#post-desc').value.trim();

    if (title && contents) {
        const response = await fetch(`/api/post`, {
            method: 'POST',
            body: JSON.stringify({ title, contents }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create a new post');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id') && event.target.id === "del-btn") {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/post/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete post');
        }
    }
};

const updateButtonHandler = async (event) => {

    if (event.target.hasAttribute('data-id') && event.target.id === "update-btn") {
        const id = event.target.getAttribute('data-id');
        const title = document.querySelector(`#title-${id}`).value.trim();
        const contents = document.querySelector(`#blog-${id}`).value.trim();

        console.log(event.target.id);
        const response = await fetch(`api/blogs/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, contents }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to update post');
        }
    }
};

document
    .querySelector('#btnNew')
    .addEventListener('click', newFormHandler);

document
    .querySelector('.delete-list')
    .addEventListener('click', delButtonHandler);

document
    .querySelector('.post-list')
    .addEventListener('click', updateButtonHandler);