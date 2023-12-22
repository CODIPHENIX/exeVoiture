export const datatime={
    date: new Date().getFullYear(),
    el : document.querySelector("footer p"),
    printOut(){
        this.el.innerHTML += `&copy; MIT ${this.date}`
    }

}
