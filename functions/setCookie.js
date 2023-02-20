export default function setCookie (name, value){
    var d = new Date();
    d.setTime(d.getTime() + (20 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
}