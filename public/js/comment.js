
const newFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('.new-comment').value.trim();
    const blog_id = document.querySelector('.btn-comment').getAttribute('data-id');

    console.log(event.target.getAttribute('data-id'));
    if (comment) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment, post_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace(`/post/${post_id}`);
        } else {
            alert('Failed to create a new comment');
        }
    }
};

document
    .querySelector('.btn-comment')
    .addEventListener('click', newFormHandler);