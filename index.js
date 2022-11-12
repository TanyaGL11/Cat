console.log('word')
const $wr = document.querySelector(`[data-wr]`)

const generateCardHTML = (post) => {
    return `
    <div class="card my-2" style="width: 18rem";
        <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">
              ${post.body}
            </p>
            <a href="#" class="btn-primary"> Go somewhere</a>
        </div>
    </div>

    `
}
console.log(document.querySelector('[ data-dc ]'))
//document.querySelector('[ data-dc ]').onclick = generateCardHTML;

