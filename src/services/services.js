export const currentDate = () =>{
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    const fechaHoraActual = `${dia}/${mes}/${año}`;
    return fechaHoraActual
}