
const text = <HTMLInputElement>document.getElementById('text');
document.getElementById('button').addEventListener('click', (e: Event) => {
    console.log(text.value);
    new client();
});